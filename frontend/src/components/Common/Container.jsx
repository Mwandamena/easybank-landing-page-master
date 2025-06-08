import React from "react";

const Container = ({ children }) => {
  return (
    <section className="max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </section>
  );
};

export default Container;
