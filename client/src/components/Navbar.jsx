import React from "react";

const Navbar = () => {
  return (
    <>
      {/* create  a button with tailwindcss and jsx */}
      <div className="mx-auto">
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </>
  );
};

export default Navbar;
