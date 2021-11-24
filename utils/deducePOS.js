export default function deducePOS(pos) {
  switch (pos) {
    case 'n':
      return 'noun';
    case 'a':
      return 'adjective';
    case 's':
      return 'adjective';
    case 'v':
      return 'verb';
    case 'r':
      return 'adverb';
      /* 
        seems as if wordnet.get() expects pos 'a'
        in place of pos 's'. works as expected with 's'
        querysense now returns pos 'a'
        instead of 's'. see api/querysense
        for more information.
      */
      {
        /* case 's':
      return 'sat adj'; */
      }
    default:
      console.error(`Unknown Part of Speech ${pos}`);
      return 'unknown';
  }
}
