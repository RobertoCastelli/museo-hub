export function getEventInitials(title) {
  const ignoreWords = ["and", "of", "the", "for", "in"];

  return title
    .split(" ")
    .filter((word) => !ignoreWords.includes(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
