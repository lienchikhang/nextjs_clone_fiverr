"use client";
import { Drawer, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const DrawerComfirm = () => {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={true}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div className="drawer__title">
        <h2>Order options</h2>
        <button>
          <ClearIcon />
        </button>
      </div>
      <div className="drawer__content">
        <div className="hiredType">
          <h2>Basic</h2>
          <p>1.450.000</p>
        </div>
        <p className="desc">
          I will design a cartoon, mascot or vector logo or illustration
        </p>
        <div className="quantity">
          <h2>How often do you need this order?</h2>
          <div className="quantity__wrapper">
            <div className="quantity__price">
              <h2>Single order</h2>
              <p>1.450.000</p>
            </div>
            <div className="quantity__action">
              <p>Gig Quantity</p>
              <div className="action__wrapper">
                <RemoveIcon />
                <span>1</span>
                <AddIcon />
              </div>
            </div>
          </div>
          <div className="subscribe__wrapper">
            <div className="subscribe__title">
              <h2>Subscribe to Save</h2>
              <p>Unlock 10% off from 2nd order</p>
            </div>
            <div className="subscribe__bottom">
              <ul>
                <li>Save time & effort with automatic monthly orders</li>
                <li>No commitment—cancel anytime</li>
                <li>Work long-term with your seller for best results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer__footer">
        <button>Continue (1.450.000)</button>
        <p>You won’t be charged yet</p>
      </div>
    </SwipeableDrawer>
  );
};

export default DrawerComfirm;
