import React from "react";
import {
  InputStyle,
  Label,
  InputCon,
  InputHintOptional,
  InputIcon,
  InputOptionalCon,
  InputLabel,
  InputSendButton,
  MainInput,
} from "./InputStyle";
import { SearchIcon, BackIcon, OptionalIcon } from "../../../assets/icons";

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
            <InputIcon search src={SearchIcon} />
            <MainInput
              value={value}
              onChange={changeFunction}
              search
              placeholder={placeholder}
            />
          </>
        ) : type === "send" ? (
          <>
            <MainInput
              value={value}
              onChange={changeFunction}
              arrow
              placeholder={placeholder}
            />
            <InputSendButton>
              <BackIcon />
            </InputSendButton>
          </>
        ) : (
          <MainInput
            value={value}
            onChange={changeFunction}
            placeholder={placeholder}
          />
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
};
