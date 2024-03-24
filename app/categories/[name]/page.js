import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const authorDocument = getDocumentByCategory(docs, name);

  return <ContentDisplay id={authorDocument[0].id} />;
};

export default CategoryPage;
