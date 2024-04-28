import React from "react";
import Image from "next/image";

import SearchIcon from "@/assets/icon-search.svg";

export const SearchMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src={SearchIcon} alt="search" />
      <input type="text" className="bg-transparent outline-none text-white items-center placeholder:text-white pr-5"  placeholder="Buscar"/>
    </div>
  );
};
