import React from "react";

import NavBar from "../NavBar";
import ContentWrapper from "../ContentWrapper";

const index = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default index;
