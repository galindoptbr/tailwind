import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
      {children}
    </div>
  );
};
