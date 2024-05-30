import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  text: string;
  link: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const titles = [
  { title: "Explore", desc: "" },
  {
    title: "Discover",
    desc: "Inspiring projects made on Fiverr",
  },
  {
    title: "Discover",
    desc: "Inspiring projects made on Fiverr",
  },
  {
    title: "Discover",
    desc: "Inspiring projects made on Fiverr",
  },
  {
    title: "Discover",
    desc: "Inspiring projects made on Fiverr",
  },
  {
    title: "Discover",
    desc: "Inspiring projects made on Fiverr",
  },
];

const NavItemSelect: React.FC<Props> = ({ text, link }) => {
  return (
    <Link href={link}>
      {text}
      <KeyboardArrowDownIcon />
    </Link>
    // <select>
    //   {titles.map((title) => {
    //     return (
    //       <option value="">
    //         <div>
    //           <p>{title.title}</p>
    //           <p>{title.desc}</p>
    //         </div>
    //       </option>
    //     );
    //   })}
    //   {/* <option value="">
    //     <Link href={link}>
    //       {text}
    //       <KeyboardArrowDownIcon />
    //     </Link>
    //   </option> */}
    // </select>
  );
};

export default NavItemSelect;
