export function getDocumentByAuthor(docs, author) {
  return docs.filter((doc) => encodeURI(doc.author) === author);
}
export function getDocumentByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}
export function getDocumentByTag(docs, tag) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}
