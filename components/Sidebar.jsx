"use client";
import {
  getDocumentByAuthor,
  getDocumentByCategory,
  getDocumentByTag,
} from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ docs }) => {
  const pathName = usePathname();
  const [rootNodes, setRootNodes] = useState([]);
  const [subRootNodes, setSubRootNodes] = useState({});
  useEffect(() => {
    let matched = docs;
    if (pathName.includes("/tags")) {
      const tag = pathName.split("/")[2];
      matched = getDocumentByTag(docs, tag);
    } else if (pathName.includes("/author")) {
      const author = pathName.split("/")[2];
      matched = getDocumentByAuthor(docs, author);
    } else if (pathName.includes("/categories")) {
      const category = pathName.split("/")[2];
      matched = getDocumentByCategory(docs, category);
    }
    const roots = matched.filter((doc) => !doc.parent);
    const nonRoots = Object.groupBy(
      matched.filter((doc) => doc.parent),
      ({ parent }) => parent
    );

    const nonRootsKeys = Reflect.ownKeys(nonRoots);

    nonRootsKeys.forEach((key) => {
      const foundInRoots = roots.find((root) => root.id === key);
      if (!foundInRoots) {
        const foundInDocs = docs.find((doc) => doc.id === key);
        roots.push(foundInDocs);
      }
    });
    roots.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    });

    setRootNodes([...roots]);
    setSubRootNodes({ ...nonRoots });
  }, [pathName]);

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {rootNodes?.map((rootNode) => (
          <li key={rootNode.id} className="relative">
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-900 dark:text-white"
              href={`/docs/${rootNode.id}`}
            >
              <span className="truncate">{rootNode?.title}</span>
            </Link>
            {subRootNodes[rootNode.id] && (
              <ul role="list">
                {subRootNodes[rootNode.id].map((subRootNode) => (
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
