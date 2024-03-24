import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils";

const AuthorDetailPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const authorDocument = getDocumentByAuthor(docs, name);

  return <ContentDisplay id={authorDocument[0].id} />;
};

export default AuthorDetailPage;
