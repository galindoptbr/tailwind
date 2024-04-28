import React from "react";
import Image from "next/image";

import Logo from "@/assets/Logo.svg";
import IconUser from "@/assets/icon-user.svg";

import { ItemMenu } from "./ItemMenu";
import { SearchMenu } from "./SearchMenu";

export const Header = () => {
  return (
    <header className="relative flex items-center w-full h-20 bg-primary-orange">
      <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="flex flex-1 item justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name={"Para voce"} />
              </li>
              <li>
                <ItemMenu name={"Para Empresas"} />
              </li>
              <li>
                <ItemMenu name={"Servicos"} />
              </li>
              <li>
                <ItemMenu name={"Ajuda"} />
              </li>
            </ul>
          </div>
          <div className="flex">
            <SearchMenu />
          </div>
        </div>
        <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 pr-10 z-0">
          <Image src={IconUser} alt="icon user"/>
          <span className="text-white font-bold">Acessar Conta</span>
        </button>
      </div>
    </header>
  );
};
