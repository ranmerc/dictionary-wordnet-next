const Wordnet = require('node-wordnet');
const wordnet = new Wordnet();

// extract findsense logic to use elsewhere if required.
export async function findSense(sense) {
  await wordnet.open();
  const results = await wordnet.findSense(sense);
  return results;
}

export default async function handler(req, res) {
  try {
    let { sense } = req.query;
    // if invalid query
    if (!sense) {
      throw new Error(`Invalid Query String. Requires 'sense' query param.`);
    }
    // replace spaces(+) in query with # which findsense expects <sense>#<pos>#<number>
    sense = sense.replace(/\ /g, '#');
    const results = await findSense(sense);
    res.status(200).json(results);
  } catch (e) {
    console.error(e);
    res.status(500).json(e.message);
  }
}
