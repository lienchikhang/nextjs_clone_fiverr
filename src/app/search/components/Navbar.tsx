"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Budget from "./Budget";
import DeliveryTime from "./DeliveryTime";

const Navbar = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("name"));
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (searchParams.get("name")) {
      setQuery(searchParams.get("name") as string);
    }
  }, []);

  return (
    <section className="search__navbar">
      <h2>
        Results for <strong>{query}</strong>
      </h2>
      <div className="search__menu">
        <Budget />
        <DeliveryTime />
      </div>
    </section>
  );
};

export default Navbar;
