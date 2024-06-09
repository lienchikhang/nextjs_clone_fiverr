'use client';
import React from 'react';

const subHeaders = [
    "Graphics & Design",
    "Programming & Tech",
    "Digital Marketing",
    "Video & Animation",
    "Writing & Translation",
    "Music & Audio",
    "    Business",
    "Consulting",
    "    Business",
    "Consulting",
];

const HeaderSub = () => {
    return (
        <div className="header__sub">
            {subHeaders.map((sub, idx) => {
                return (
                    <div key={idx}>
                        <p>{sub}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default HeaderSub