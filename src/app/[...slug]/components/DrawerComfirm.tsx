"use client";
import { Drawer, Skeleton, SwipeableDrawer, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Context } from "@/app/redux";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DrawerComfirm = () => {
  const [state, dispatch] = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter()

  console.log({ state });

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

      dispatch({
        type: 'change::open::confirm',
        payload: open,
      })
    };

  useEffect(() => {
    setQuantity(state.infoOrder.quantity);
  }, [quantity])

  const handleClick = (num: number) => {
    if (quantity + num <= 0) return;
    dispatch({
      type: 'update::quantity::order',
      payload: quantity + num
    })
    setQuantity(prev => prev + num);
  }

  const handleClose = () => {
    dispatch({
      type: 'change::open::confirm',
      payload: false,
    });
  }

  const handleConfirm = () => {
    router.push(`/payment/${state.infoOrder.desc}`, {
      scroll: true,
    })
  }

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={state.drawerConfirm.isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div className="drawer__title">
        <h2>Order options</h2>
        <button onClick={handleClose}>
          <ClearIcon />
        </button>
      </div>
      <div className="drawer__content">
        <div className="hiredType">
          <h2>Basic</h2>
          {state?.infoOrder?.price ? <p>{(state.infoOrder.price).toLocaleString()}</p> : <Typography variant="h6">
            <Skeleton />
          </Typography>}
        </div>
        {state.infoOrder.desc ? <p className="desc">
          {state.infoOrder.desc}
        </p> : <Typography className="desc" variant="h6">
          <Skeleton />
        </Typography>}
        <div className="quantity">
          <h2>How often do you need this order?</h2>
          <div className="quantity__wrapper">
            <div className="quantity__price">
              <h2>Single order</h2>
              {state?.infoOrder?.price ? <p>{(state.infoOrder.price * quantity).toLocaleString()}</p> : <Typography variant="h6">
                <Skeleton />
              </Typography>}
            </div>
            <div className="quantity__action">
              <p>Gig Quantity</p>
              <div className="action__wrapper">
                <button onClick={() => handleClick(-1)}>
                  <RemoveIcon />
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleClick(1)}>
                  <AddIcon />
                </button>
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
        <button className="btn" onClick={handleConfirm}>
          Continue ({(state.infoOrder.price * quantity).toLocaleString()})
        </button>
        <p>You won’t be charged yet</p>
      </div>
    </SwipeableDrawer>
  );
};

export default DrawerComfirm;
