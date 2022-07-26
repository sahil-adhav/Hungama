import React from "react";
import Link from "next/link";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

const List = ({ items, mt } :  {items: string[], mt : boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-gray-400 text-sm hover:underline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return( 
    <div className="mt-6 hidden xl:block">
        <List items={footerList1} mt={false}/>
        <List items={footerList2} mt/>
        <List items={footerList3} mt/>
        <p className="text-gray-400 text-sm mt-5">2022 Hungama</p>
        <p className="text-gray-400 text-sm mt-5">
            Made with 💖
            <span className="text-gray-400 text-sm mt-5 hover:underline cursor-pointer ml-1">
                <Link href="https://github.com/sahil-adhav">
                     Sahil
                </Link>
            </span>
        </p>
    </div>
  );
};
export default Footer;
