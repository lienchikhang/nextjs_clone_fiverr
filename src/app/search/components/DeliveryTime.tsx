"use client";
import React from "react";
import {
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const DeliveryTime = () => {
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
        Delivery time
        {open ? <ExpandLess /> : <ExpandMore />}
      </button>
      <Menu
        className="navbar__menu p-4"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Express 24H"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Up to 3 days"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Up to 7 days"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Anytime"
            />
          </RadioGroup>
        </FormControl>
        <div className="btn-section">
          <button>Cancel</button>
          <button>Apply</button>
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default DeliveryTime;
