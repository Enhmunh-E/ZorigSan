import React from "react";
import {
  InputStyle,
  Label,
  InputCon,
  InputHintOptional,
  InputOptionalCon,
  InputLabel,
  InputSendButton,
  MainInput,
} from ".";
import { SearchIcon, BackIcon, OptionalIcon } from "../../assets/icons";

export function Input({ type, label, hint, placeholder, optional, border }) {
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
            <SearchIcon />
            <MainInput search placeholder={placeholder} />
          </>
        ) : type === "send" ? (
          <>
            <MainInput arrow placeholder={placeholder} />
            <InputSendButton>
              <BackIcon />
            </InputSendButton>
          </>
        ) : (
          <InputS placeholder={placeholder} />
        )}
      </InputStyle>
      {optional && (
        <InputOptionalCon>
          <OptionalIcon />
          <InputHintOptional>{optional}</InputHintOptional>
        </InputOptionalCon>
      )}
    </InputCon>
  );
}