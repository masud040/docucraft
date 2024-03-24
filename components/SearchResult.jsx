import Link from "next/link";

const SearchResult = ({ result, term, closeSearchResult }) => {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p className="!text-lg">
        Showing results for
        <span className="font-semibold">"{term}":</span>
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {result?.map((data) => (
          <li key={data.id}>
            <Link
              className="transition-all hover:text-emerald-600"
              href={`/docs/${data.id}`}
              onClick={(e) => closeSearchResult(e)}
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
