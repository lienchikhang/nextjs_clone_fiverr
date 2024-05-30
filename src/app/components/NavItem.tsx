import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
}

const NavItem: React.FC<Props> = ({ text, link }) => {
  return <Link href={link}>{text}</Link>;
};

export default NavItem;
