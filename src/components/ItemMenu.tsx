import React from "react";
import Image from "next/image";

import Arrow from "@/assets/arrow-down.svg";

type Props = {
  name: string;
};

export const ItemMenu = ({ name }: Props) => {
  return (
    <div>
      <button className="flex items-center gap-3">
        <span className="text-white font-bold ">{name}</span>
        <Image src={Arrow} alt="arrow-down" />
      </button>
    </div>
  );
};
