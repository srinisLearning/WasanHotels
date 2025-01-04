import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around bg-primary text-white min-h-16 items-center">
        <div className="flex flex-row">
          <h3 className="text-2xl">Wasan Hotels</h3>
        </div>
        <div className="flex flex-row">
          <div className="px-4 py-2">Login</div>
          <div className="px-4 py-2">Register</div>
        </div>
        {/* end of column */}
      </div>{" "}
      {/*end of row */}
    </>
  );
};

export default Navbar;
