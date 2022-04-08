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
        f_size="sm"
        width="137"
        height="48"
        f_weight="500"
        l_spacing="1.25"
        b_radius="3"
      >
        SUBSCRIBE
      </Button>
    </Subscription>
  );
};

export default Subscribe;
