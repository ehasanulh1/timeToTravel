import React from 'react';

const SolidButton = ({ children }) => {
    return (
        <button className="px-9 py-4 uppercase font-bold text-sm text-white bg-yellow-500 tracking-widest rounded-[3px] hover:bg-yellow-600">{children}</button>
    );
};

export default SolidButton;