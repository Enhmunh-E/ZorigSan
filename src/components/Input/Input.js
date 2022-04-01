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

export const Input = ({ type, label, hint, placeholder, optional, border, value, setValue }) => {
  const changeFunction = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  
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
            <InputS  value={value} onChange={changeFunction} search placeholder={placeholder} />
          </>
        ) : type === "send" ? (
          <>
            <InputS  value={value} onChange={changeFunction} arrow placeholder={placeholder} />
            <InputSendButton>
              <BackIcon />
            </InputSendButton>
          </>
        ) : (
          <InputS  value={value} onChange={changeFunction} placeholder={placeholder} />
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