import React from "react";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <nav>
        <div>PORTFOLIOJESSY</div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>MyBlog</li>
          <li>Gallery</li>
          <li>Store</li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
