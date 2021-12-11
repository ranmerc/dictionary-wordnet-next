/* 
  /api/getsense?offset=1076017&pos=v 
  returns the following object-
  {
    offset: 1076017,
    lemma: 'cricket',
    pos: 'v',
    synonyms: ['cricket'],
    def: 'play cricket ',
    exp: [],
    ptrs: [
      {
        lemma: 'play',
        pos: 'v',
        sym: '@',
        offset: 1072949,
      },
    ],
  };
*/
const Wordnet = require('node-wordnet');
const wordnet = new Wordnet();

// extract getsense logic to use elsewhere if required
async function getsense(offset, pos) {
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
    // for recent, bookmarks lists
    offset: result.synsetOffset,
    // replace _ with space
    lemma: result.lemma.replace(/\_/g, ' '),
    /*
      wordnet.get() expects pos as 'a'
      if pos is 's' but returns 's' itself
    */
    pos: result.pos === 's' ? 'a' : result.pos,
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

/* 
  using wordnet.close() after wordnet.get() in the 
  same function causes errors
*/
export async function getSense(offset, pos) {
  await wordnet.open();
  const result = await getsense(offset, pos);
  await wordnet.close();
  return result;
}

export default async function getSenseHandler(req, res) {
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
    res.status(500).json({
      error: e.message,
    });
  }
}
