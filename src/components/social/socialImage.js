import React from "react";
import styled from "styled-components";

const SocialLinkContainer = styled.img`
  width: 25px;
  height: 25px;
  margin: 15px;
`;

const SocialImage = ({ src, name, logo }) => {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <SocialLinkContainer className="animate-spin" src={logo} alt={name} />
    </a>
  );
};

export default SocialImage;
