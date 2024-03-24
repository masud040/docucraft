import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="p-1 mr-2 text-xs bg-gray-200 rounded-md"
    >
      {tag}
    </Link>
  );
};

export default Tag;
