import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import sanityClient from "../../client";
import { BlogCard } from "../../components/blogcard";

const BlogsContainer = styled.div`
  max-height: 88vh;
  ${tw`

mt-10
  items-center
  flex
  flex-col
  w-full
  h-full
`}
`;

const BlogHeading = styled.div`
  ${tw`
flex
flex-col
`}
`;

const BlogHeader = styled.h1`
  ${tw`
  text-6xl
tracking-wider
text-white
`}
`;

const BlogDescription = styled.p`
  ${tw`
font-mono
text-xl
text-white
mt-4
mb-10
`}
`;

const BlogCardsContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  ${tw`
  flex
  flex-wrap
  m-auto
  items-center
  justify-start
self-center
  overflow-scroll
  `}
`;

export const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  console.log(blogs);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
         title,
         slug,
         mainImage{
             asset->{
                 _id,
                 url
             },
             alt
         }
     }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <BlogsContainer>
        <BlogHeading>
          <BlogHeader className="animate-pulse">Hi! Welcome to my blogs.</BlogHeader>
          <BlogDescription>I share my blogs here.</BlogDescription>
        </BlogHeading>
        <BlogCardsContainer>
          {blogs &&
            blogs.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  link={blog.slug.current}
                  imageSrc={blog.mainImage.asset.url}
                  imageAlt={blog.mainImage.alt}
                  title={blog.title}
                />
              );
            })}
        </BlogCardsContainer>
      </BlogsContainer>
    </>
  );
};
