// cyrillicToLatin.js

function replaceCyrillicWithLatin(text) {
  const cyrillicToLatinMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ж: "j",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sh",
    ъ: "",
    ы: "i",
    ь: "'",
    э: "e",
    ю: "yu",
    я: "ya",
    У: "U",
  };

  return text.replace(/[а-я]/g, (match) => cyrillicToLatinMap[match] || match);
}

export { replaceCyrillicWithLatin };
