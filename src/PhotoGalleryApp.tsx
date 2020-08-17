import React, { useState, useCallback } from "react";
import { GlobalStyles } from "./globalStyles";
import Image from "./components/Image";
import styled from "styled-components";
import { IMAGES } from "./data/images.data";

const ProtoGalleryAppContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const PhotoGalleryApp: React.FC = () => {
  const [itemShow, setItemShow] = useState(0);

  const setImage = useCallback(
    (idx: number) => {
      setItemShow(idx);
    },
    [setItemShow]
  );
  return (
    <>
      <GlobalStyles />
      <ProtoGalleryAppContainer>
        {IMAGES.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            show={idx === itemShow}
            idx={idx}
            setItemShow={setImage}
          />
        ))}
      </ProtoGalleryAppContainer>
    </>
  );
};

export default PhotoGalleryApp;
