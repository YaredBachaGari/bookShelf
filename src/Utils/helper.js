//this function takes any words or phrase separated by white space and capitalize the first letter of each words.
//but if the length of character is is less than 2, it will simply convert it to lowercase(no capitalization)
export const PascalizeHeading = (phrase) => {
  const PhraseArray = phrase?.split(" ");
  const categoryHeading = PhraseArray?.map((word) => {
    let isWord;
    if (word?.length > 2) {
      isWord = word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase();
    } else {
      isWord = word?.toLowerCase();
    }
    return isWord;
  });
  const heading = categoryHeading?.join(" ");
  return heading;
};

//this function takes any words or phrase separated by white space and concatenate them as one word
export const ShelfName = (categoryName) => {
  const categoryPhrases = categoryName.split(" ").join("");
  return categoryPhrases;
};

// this function helps to reduce api call for every character.
//Instead it sends on request every timout time we set.
export const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
