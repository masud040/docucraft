"use client";
import useDebouce from "@/hooks/useDebouce";
import Image from "next/image";
import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const doSearch = useDebouce((term) => {
    const results = docs.filter((doc) =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResult([...results]);
  }, 500);
  function handleSearch(e) {
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  }

  return (
    <>
      <div className="hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image
            src="/search.svg"
            width={50}
            height={50}
            alt="searchImage"
            className="w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search..."
            value={term}
            onChange={handleSearch}
            className="flex-1 focus:border-none focus:outline-none"
          />
          <kbd className="w-auto ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
            <kbd className="font-sans">Ctrl </kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        </button>
      </div>
      {term.trim().length > 0 && <SearchResult />}
    </>
  );
};

export default Search;
