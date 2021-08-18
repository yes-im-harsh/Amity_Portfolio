import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import EnvelopeGif from "../../assets/envelope.gif";
const ContactPageContainer = styled.div`
  ${tw`
  
  flex
  w-full
  h-full
  justify-center
  items-center
  
  `}
`;

const ContactPageLeft = styled.div`
  ${tw`

`}
`;

const ContactPageLeftGif = styled.img`
  ${tw`
w-96
`}
`;

const ContactPageRight = styled.div`
  ${tw`
flex
flex-col
`}
`;

const Input = styled.input`
  ${tw`
  w-96
  mb-7
  text-3xl
  outline-none
  px-3
  `}
`;

const Label = styled.label`
  ${tw`
text-white
text-2xl
`}
`;

const TextArea = styled.textarea`
  ${tw`
  outline-none
  px-3
  text-dark-blue
  text-3xl
  `}
`;

const Button = styled.button`
  border: 2px solid #0fd1fc;
  border-radius: 8px;
  ${tw`
text-white
w-32
text-4xl
mt-10
`};
`;

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    if (name && subject && message) {
      window.location.href = `mailto:harshchauhan.cse279@gmail.com?subject=${subject}&body=Hello Harsh, I am ${name}%0d%0d${message}`;
    } else {
      alert("Please enter all the field");
    }
  };

  return (
    <>
      <ContactPageContainer>
        <ContactPageLeft>
          <ContactPageLeftGif src={EnvelopeGif} />
        </ContactPageLeft>
        <ContactPageRight>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Label htmlFor="message">Message</Label>
          <TextArea
            type="text"
            value={message}
            rows="5"
            cols="30"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={sendMail}>Send</Button>
        </ContactPageRight>
      </ContactPageContainer>
    </>
  );
};
