import React from "react";
import Image from "next/image";

import Logo from "@/assets/Logo.svg";
import IconUser from "@/assets/icon-user.svg";

import { ItemMenu } from "./ItemMenu";
import { SearchMenu } from "./SearchMenu";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="relative flex items-center w-full h-20 bg-primary-orange">
      <Container>
        <div className="flex flex-1 item justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name={"Para você"} />
              </li>
              <li>
                <ItemMenu name={"Para Empresas"} />
              </li>
              <li>
                <ItemMenu name={"Serviços"} />
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
      </Container>
    </header>
  );
};
