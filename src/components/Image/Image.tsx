import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  transition: 0.3s ease flex;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.show {
    flex: 8;
  }

  .caption {
    position: absolute;
    left: 0px;
    bottom: 50px;
    color: black;
    opacity: 0;
    transition: 0.3s ease opacity;
    background-color: rgba(255, 255, 255, 0.404);
    padding: 30px;
    margin: 20px;
    border-radius: 8px;
  }
`;

export interface ImageInterface {
  show?: boolean;
  src: string;
  idx: number;
  setItemShow: (idx: number) => void;
}

const Image: React.FC<ImageInterface> = React.memo((props) => {
  console.log("me pinte");
  return (
    <ImageContainer className={`${props.show ? "show" : ""}`}>
      <img
        src={props.src}
        alt=""
        onClick={() => props.setItemShow(props.idx)}
      ></img>
    </ImageContainer>
  );
});

export default Image;
