import ImageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import DotLoader from "react-spinners/DotLoader";

const ImageBuilder = ImageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return ImageBuilder.image(source);
};
const SingleBlogContainer = styled.div`
  ${tw`

flex
items-center
w-full
h-full
`}
`;
const SingleBlogComponent = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px solid #ffffff;
  box-sizing: border-box;

  ${tw`
  flex
  flex-col
  mx-24
h-4/5
w-full
rounded-2xl
`}
`;
const SingleBlogHeader = styled.div`
  ${tw`
  relative
  h-72
  border-white
  rounded-2xl
border-b-4
`}
`;

const SingleBlogHeaderImage = styled.img`
  ${tw`
  absolute
w-full
h-full
object-cover
rounded-2xl
z-0
`}
`;

const SingleBlogTitleContainer = styled.h1`
  ${tw`
  absolute
  flex
  flex-col
  justify-center
  items-center
  text-4xl
z-10
bg-gray-200
w-1/2
h-1/2
top-16
left-1/4
opacity-80
rounded-md
`}
`;
const SingleBlogHeaderTitle = styled.h1`
  ${tw`
  text-5xl
  mb-5
  `}
`;
const SingleBlogAuthorDataContainer = styled.div`
  ${tw`
flex
justify-center
items-center
`}
`;
const SingleBlogHeaderAuthorName = styled.h3`
  ${tw`
text-lg
ml-3
`}
`;

const SingleBlogHeaderAuthorImage = styled.img`
  ${tw`
  
  w-12
  h-12
  rounded-full

  `}
`;

const SingleBlogDataContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  px-16 
  lg:px-48 py-12
   lg:py-20 
   font-serif
   max-w-full
  w-full
text-white
  `}
`;

const Loader = styled.div`
  ${tw`
  w-full
  h-full
 flex
 justify-center
 items-center
`}
`;
export const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
           title,
           _id,
           slug,
           mainImage{
               asset->{
                   _id,
                   url
               }
           },
           body,
           "name": author->name,
           "authorImage": author->image,
       }`
      )
      .then((data) => {
        console.log(data);
        setSingleBlog(data[0]);
      })
      .catch(console.error);
  }, []);

  if (!singleBlog) {
    return (
      <Loader>
        <DotLoader color="#3fc2ca" />
      </Loader>
    );
  }
  return (
    <>
      <SingleBlogContainer>
        <SingleBlogComponent>
          <SingleBlogHeader>
            <SingleBlogHeaderImage src={singleBlog.mainImage.asset.url} />
            <SingleBlogTitleContainer>
              <SingleBlogHeaderTitle>{singleBlog.title}</SingleBlogHeaderTitle>{" "}
              <SingleBlogAuthorDataContainer>
                {" "}
                <SingleBlogHeaderAuthorImage
                  alt={singleBlog.name}
                  src={urlFor(singleBlog.authorImage).url()}
                />
                <SingleBlogHeaderAuthorName>
                  {singleBlog.name}
                </SingleBlogHeaderAuthorName>
              </SingleBlogAuthorDataContainer>
            </SingleBlogTitleContainer>
          </SingleBlogHeader>
          <SingleBlogDataContainer>
            <BlockContent
              blocks={singleBlog.body}
              projectId="q65kvegd"
              dataset="production"
            />
          </SingleBlogDataContainer>
        </SingleBlogComponent>
      </SingleBlogContainer>
    </>
  );
};
