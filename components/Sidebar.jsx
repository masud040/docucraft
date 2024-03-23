import Link from "next/link";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent);
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {roots?.map((rootNode) => (
          <li key={rootNode.id} className="relative">
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-900 dark:text-white"
              href={`/docs/${rootNode.id}`}
            >
              <span className="truncate">{rootNode?.title}</span>
            </Link>
            {nonRoots[rootNode.id] && (
              <ul role="list">
                {nonRoots[rootNode.id].map((subRootNode) => (
                  <li key={subRootNode.id}>
                    <Link
                      className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href={`/docs/${rootNode.id}/${subRootNode.id}`}
                    >
                      <span className="truncate">{subRootNode.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
