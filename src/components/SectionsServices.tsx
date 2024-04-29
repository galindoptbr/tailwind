import React from "react";
import Image from "next/image";

import { Container } from "./Container";

import PhoneIcon from "@/assets/icon-phone.svg";
import SoluctionIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

import ImagePhone from "@/assets/phone.png";

export const SectionsServices = () => {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            servicos excluisivos
          </span>
          <h1 className="text-primary-gray text-[56px] font-bold leading-tight mb-6 ">
            Gerencie suas financas sem sair de casa
          </h1>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Ceja como voce pode cuidar das suas financas pelo app Itau de forma
            segura, rapida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={PhoneIcon} alt="icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhar sua conta, fazer transferencias e pagamentos de onde
                estiver
              </p>
            </li>
            <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={SoluctionIcon} alt="icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Solucoes de emprestimos e renegociacao para organizar suas
                financas
              </p>
            </li>
            <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={OptionsIcon} alt="icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Diversas opcoes de investimentos, de acordo com o seu perfil de
                investidor
              </p>
            </li>
            <li className="flex gap-9 items-center">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={CardIcon} alt="icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhe a fatura do seu cartao de credito e faca compras
                online com ser cartao virtual
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="flex items-center absolute top-0 right-0 w-[32%] h-full bg-gray-phone ">
        <Image
          src={ImagePhone}
          alt="image phone"
          className="translate-x-[-50%]"
        />
      </div>
    </section>
  );
};
