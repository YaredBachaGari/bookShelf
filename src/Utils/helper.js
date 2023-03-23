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

export const ShelfName = (categoryName) => {
  const categoryPhrases = categoryName.split(" ").join("");
  return categoryPhrases;
};
