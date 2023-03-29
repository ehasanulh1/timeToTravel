import React from 'react';

const OutlineButton = ({ children }) => {
    return (
        <button className="px-9 py-4 uppercase font-bold text-sm tracking-widest text-yellow-500 rounded-[3px] border border-yellow-500 hover:text-white hover:bg-yellow-500">{children}</button>
    );
};

export default OutlineButton;