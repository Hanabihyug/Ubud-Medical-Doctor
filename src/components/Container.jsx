import React from "react";

function Container({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 2xl:w-[1440px]">{children}</div>
    </div>
  );
}

export default Container;
