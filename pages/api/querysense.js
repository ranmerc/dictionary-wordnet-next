const Wordnet = require('node-wordnet');
const wordnet = new Wordnet();

export default async (req, res) => {
  try {
    const { word } = req.query;
    await wordnet.open();
    const queryResults = await wordnet.querySense(word);
    const results = [];
    for (let i = 0; i < queryResults.length; ++i) {
      const result = await wordnet.findSense(queryResults[i]);
      results.push({
        sense: queryResults[i].replace(/\#/g, '+'),
        lemma: result.lemma,
        pos: result.pos,
        def: result.def,
      });
    }
    res.status(200).json(results);
  } catch (e) {
    res.status(405).json(e);
  }
};
