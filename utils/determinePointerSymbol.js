/*
  maps pointer symbols to their description
  https://wordnet.princeton.edu/documentation/wninput5wn
*/

export default function determinePointerSymbol(sym) {
  switch (sym) {
    case '!':
      return 'Antonym';
    case '@':
      return 'Hypernym';
    case '@i':
      return 'Instance Hypernym';
    case '~':
      return 'Hyponym';
    case '~i':
      return 'Instance Hyponym';
    case '#m':
      return 'Member Holonym';
    case '#s':
      return 'Substance Holonym';
    case '#p':
      return 'Part Holonym';
    case '%m':
      return 'Member Meronym';
    case '%s':
      return 'Substance Meronym';
    case '%p':
      return 'Part Meronym';
    case '+':
      return 'Derivationally Related Form';
    case ';c':
      return 'Domain of synset - TOPIC';
    case '=':
      return 'Attribute';
    case '-c':
      return 'Member of this domain - TOPIC';
    case ';r':
      return 'Domain of synset - REGION';
    case '-r':
      return 'Member of this domain - REGION';
    case ';u':
      return 'Domain of synset - USAGE';
    case '-u':
      return 'Member of this domain - USAGE';
    case '*':
      return 'Entailment';
    case '>':
      return 'Cause';
    case '^':
      return 'Also see';
    case '$':
      return 'Verb Group';
    case '&':
      return 'Similar to';
    case '<':
      return 'Participle of verb';
    case '\\':
      return 'Pertainym (pertains to noun) [For Adjective] \n Derived from adjective [For Adverb]';
    default:
      throw new Error(`Unknown Pointer Symbol: ${sym}`);
  }
}
