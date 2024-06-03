"use client";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Listbox, ListboxOption, ListboxOptions } from "@headlessui/react";

const Budget = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [open, setOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <button className="navbar__btn" onClick={handleClick}>
        Budget
        {open ? <ExpandLess /> : <ExpandMore />}
      </button>
      <Menu
        className="navbar__menu p-4"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <input type="text" placeholder="Enter budget" className="input-price" />
        <div className="btn-section">
          <button>Cancel</button>
          <button>Apply</button>
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default Budget;
