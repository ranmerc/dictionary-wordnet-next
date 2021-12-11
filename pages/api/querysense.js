/* 
  /api/querysense?word=bow returns 
  an array of objects like-
  {
    offset: '2880189',
    lemma: 'bow',
    pos: 'n',
    def: 'a knot with two loops and loose ends',
  }
*/
const Wordnet = require('node-wordnet');
const wordnet = new Wordnet();

export default async (req, res) => {
  try {
    const { word } = req.query;
    // if wrong params are passed
    if (!word) {
      throw new Error(`Invalid Query String. Requires 'word' query param.`);
    }
    await wordnet.open();
    const queryResults = await wordnet.querySense(word);
    const results = [];
    for (let i = 0; i < queryResults.length; ++i) {
      const result = await wordnet.findSense(queryResults[i]);
      results.push({
        offset: result.synsetOffset,
        /* 
          seems as if wordnet.get() expects pos 'a'
          in place of pos 's'. works as expected with 's'
        */
        pos: result.pos === 's' ? 'a' : result.pos,
        lemma: result.lemma.replace(/\_/g, ' '),
        def: result.def,
      });
    }
    res.status(200).json(results);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: e.message,
    });
  }
};
