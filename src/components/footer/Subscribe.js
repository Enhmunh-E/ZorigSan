import { addEmail } from "../../Firebase";
import React, { useState } from "react";
import { Button } from "../core";
import { Input } from "../body";
import styled from "styled-components";

const Subscription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 934px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Subscribe = () => {
  const [value, setValue] = useState("");
  return (
    <Subscription>
      <Input
        w="320"
        value={value}
        setValue={setValue}
        placeholder={`📩  Email Address`}
      ></Input>
      <Button
        onClick={async () => {
          await addEmail(value);
          setValue("");
        }}
        title={"SUBSCRIBE"}
        width={134}
        bgColor={"primary-light-blue"}
        f_size={"T3"}
        color={"primary-white"}
      />
    </Subscription>
  );
};

export default Subscribe;