import ContentDisplay from "@/components/ContentDisplay";

const SubcontentPage = ({ params: { subcontentId } }) => {
  return <ContentDisplay id={subcontentId} />;
};

export default SubcontentPage;
