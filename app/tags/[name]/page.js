import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils";

const TagDetails = ({ params: { name } }) => {
  const docs = getDocuments();
  const authorDocument = getDocumentByTag(docs, name);

  return <ContentDisplay id={authorDocument[0].id} />;
};

export default TagDetails;
