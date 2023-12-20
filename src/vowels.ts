interface StringMap {
  [key: string]: string;
}
const vowelMatch: StringMap = {};
vowelMatch["а"] = "а";
vowelMatch["о"] = "о";
vowelMatch["е"] = "е";
vowelMatch["э"] = "е";
vowelMatch["и"] = "е";
vowelMatch["ы"] = "а";
vowelMatch["у"] = "а";
vowelMatch["я"] = "а";
vowelMatch["ү"] = "ө";

const vowels = "аяэеыиоөёуүю";
const isVowel = (letter: string): boolean => vowels.includes(letter);

const katkalan = "птсшчкхф";
const isKatkalan = (letter: string) => katkalan.includes(letter);

const jumshak = "бвдзжглмнң";
const isJumshak = (letter: string) => jumshak.includes(letter);

const lastVowel = (word: string): string => {
  const vowelsOnly = Array.from(word.toLowerCase()).filter(isVowel);
  return vowelsOnly[vowelsOnly.length - 1];
};

function getSuffixConsonant(word: string): string {
  word = word.replace("ь", "");
  const lastLetter = word[word.length - 1];
  if (isVowel(lastLetter) || "йр".includes(lastLetter)) return "л";
  if (isKatkalan(lastLetter)) return "т";
  if (isJumshak(lastLetter)) return "д";

  return "л";
}

export default function getPluralSuffix(word: string): string {
  const suffixConsonant = getSuffixConsonant(word);
  const suffixVowel = vowelMatch[lastVowel(word)];

  console.log(word, ":", word + suffixConsonant + suffixVowel + "р");
  // if (suffixConsonant === undefined || suffixVowel === undefined) return "";
  return suffixConsonant + suffixVowel + "р";
}
