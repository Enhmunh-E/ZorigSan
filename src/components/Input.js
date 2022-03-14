import React from "react";
import {
  InputStyle,
  InputS,
  InputIcon,
  Label,
  InputCon,
  InputHintOptional,
  InputOptionalCon,
  InputLabel,
  InputSendButton,
} from "./Index";
import SearchIcon from "../assets/Union.svg";
import SendIcon from "../assets/Vector (Stroke).svg";
import OptionalIcon from "../assets/optional.svg";

const Input = ({ type, label, hint, placeholder, optional, border }) => {
  return (
    <InputCon>
      {label && hint !== "" && (
        <Label>
          <InputLabel>{label}</InputLabel>
          <InputHintOptional>{hint}</InputHintOptional>
        </Label>
      )}
      <InputStyle border={border}>
        {type === "search" ? (
          <>
            <InputIcon search src={SearchIcon} />
            <InputS search placeholder={placeholder} />
          </>
        ) : type === "send" ? (
          <>
            <InputS arrow placeholder={placeholder} />
            <InputSendButton>
              <InputIcon arrow src={SendIcon} />
            </InputSendButton>
          </>
        ) : (
          <>
            <InputS placeholder={placeholder} />
          </>
        )}
      </InputStyle>
      {optional && (
        <InputOptionalCon>
          <img src={OptionalIcon} />
          <InputHintOptional>{optional}</InputHintOptional>
        </InputOptionalCon>
      )}
    </InputCon>
  );
};

export { Input };