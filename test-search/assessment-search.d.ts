declare module "@assessment-search" {
  import React from "react";

  interface Items {
    id: string;
    value: string;
  }

  interface SearchProps {
    width?: number;
    items: Items[];
    color?: string;
  }

  const Search: React.FC<SearchProps>;

  export default Search;
}
