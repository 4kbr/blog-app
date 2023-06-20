import React from "react";

const LayoutPortfolio = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <h1 className="mainTitle text-8xl font-bold">Our Works</h1>
      {children}
    </div>
  );
};

export default LayoutPortfolio;
