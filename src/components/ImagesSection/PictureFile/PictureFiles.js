import React from "react";

import File from "../../../assets/images/gallerystore/project-1h.jpg";
import { Container } from "./styles";

function PictureFile() {
  return (
    <Container>
      <img src={File} alt="" />
    </Container>
  );
}

export default PictureFile;
