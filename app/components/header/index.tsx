import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
   padding: 20px;
   background-color: #20232a;
   color: white;
   text-align: center;
`;

const Header = () => (
   <HeaderContainer>
      <Link href="/">Home</Link>
   </HeaderContainer>
);

export default Header;
