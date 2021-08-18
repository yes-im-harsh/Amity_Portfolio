import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PhotoPic from "../../assets/photo.jpeg";
import SocialData from "../../components/social/socialData";
import SocialImage from "../../components/social/socialImage";

const HomeContainer = styled.div`
  ${tw`
  w-full
  h-full
    flex
   
`};
`;

const HomeContainerLeft = styled.div`
  ${tw`
 flex
 w-full
 justify-center
 items-center
`};
`;

const IntroContainer = styled.div`
  ${tw`
flex
flex-col
ml-48
`};
`;

const BigText = styled.h1`
  ${tw`
text-white
text-8xl
`};
`;

const MiddleText = styled.h1`
  ${tw`
text-middle-text
text-4xl
`};
`;
const Button = styled.button`
  border: 2px solid #0fd1fc;
  border-radius: 8px;
  ${tw`
text-white
w-32
text-xl
mt-10
`};
`;

const HomeContainerRight = styled.div`
  ${tw`
  flex
  flex-col
 justify-center
 items-center
  w-full
`};
`;
const SocialIconContainer = styled.div`
  ${tw`
flex
justify-center
ml-96
`};
`;

const ProfileImageContainer = styled.img`
  height: 80vh;
  background-blend-mode: screen;
`;
export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <HomeContainerLeft>
          <IntroContainer>
            <BigText className="textBig">I AM HARSH</BigText>
            <BigText>WELCOME TO MY PORTFOLIO</BigText>
            <MiddleText>I am a design thinker and a web developer.</MiddleText>
            <Button className=" animate-pulse">Know more</Button>
          </IntroContainer>
        </HomeContainerLeft>
        <HomeContainerRight>
          <ProfileImageContainer className=" animate-pulse" src={PhotoPic} />
          <SocialIconContainer>
            {SocialData.map((social) => {
              return (
                <SocialImage
                  name={social.name}
                  src={social.src}
                  logo={social.logo}
                />
              );
            })}
          </SocialIconContainer>
        </HomeContainerRight>
      </HomeContainer>
    </>
  );
};
