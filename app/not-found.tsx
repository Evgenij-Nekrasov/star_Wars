"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
   text-align: center;
   padding: 50px;
`;

const Custom404: React.FC = () => (
   <Container>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
   </Container>
);

export default Custom404;
