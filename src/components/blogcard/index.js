import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const BlogCardContainer = styled.div`
  background: linear-gradient(
      154.49deg,
      rgba(121, 117, 131, 0.2) 128.84%,
      rgba(54, 53, 103, 0.2) 207.34%
    ),
    rgba(49, 48, 54, 0.3);
  ${tw`
flex
flex-col
justify-center
items-center
w-72
h-72
px-5
text-white
transition
border-2
rounded-xl
border-gray-400
hover:border-white
mx-8
mb-5
`}
`;
const BlogTitle = styled.h2`
  ${tw`
text-xl
text-white
flex
flex-wrap
`}
`;
const BlogMainImage = styled.img`
  ${tw`
  mt-3
rounded-md
w-full
`}
`;

export const BlogCard = ({ link, imageSrc, imageAlt, title }) => {
  return (
    <Link to={`/blog/${link}`}>
      {" "}
      <BlogCardContainer>
        <BlogTitle>{title}</BlogTitle>
        <BlogMainImage src={imageSrc} alt={imageAlt} />
      </BlogCardContainer>
    </Link>
  );
};
