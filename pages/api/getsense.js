const Wordnet = require('node-wordnet');
const wordnet = new Wordnet();

// extract findsense logic to use elsewhere if required.
export async function getSense(offset, pos) {
  await wordnet.open();
  const result = await wordnet.get(offset, pos);
  // remove duplicate ptrs
  const uniqueOffsets = [];
  result.ptrs = result.ptrs.filter((ptr) => {
    if (uniqueOffsets.includes(ptr.synsetOffset)) {
      return false;
    } else {
      uniqueOffsets.push(ptr.synsetOffset);
      return true;
    }
  });
  // get lemma for each ptr
  for (let i = 0; i < result.ptrs.length; ++i) {
    result.ptrs[i].lemma = (
      await wordnet.get(result.ptrs[i].synsetOffset, result.ptrs[i].pos)
    ).lemma;
  }
  return {
    // replace _ with space
    lemma: result.lemma.replace(/\_/g, ' '),
    pos: result.pos,
    synonyms: result.synonyms.map((synonym) => {
      return synonym.replace(/\_/g, ' ');
    }),
    def: result.def,
    exp: result.exp,
    ptrs: result.ptrs.map((ptr) => {
      return {
        // replace _ with space
        lemma: ptr.lemma.replace(/\_/g, ' '),
        /* 
          seems as if wordnet.get() expects pos 'a'
          in place of pos 's'. works as expected with 's'
        */
        pos: ptr.pos === 's' ? 'a' : ptr.pos,
        sym: ptr.pointerSymbol,
        offset: ptr.synsetOffset,
      };
    }),
  };
}

export default async function handler(req, res) {
  try {
    let { offset, pos } = req.query;
    // if invalid query
    if (!offset || !pos) {
      throw new Error(
        `Invalid Query String. Requires 'offset' and 'pos' query param.`
      );
    }
    offset = parseInt(offset);
    const result = await getSense(offset, pos);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json(e.message);
  }
}
