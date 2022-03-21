import React from 'react';
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
} from '.';
import {  SearchIcon , BackIcon, OptionalIcon} from '../../assets/icons'

export function Input({
  type, label, hint, placeholder, optional, border,
}) {
  return (
    <InputCon>
      {label && hint !== '' && (
        <Label>
          <InputLabel>{label}</InputLabel>
          <InputHintOptional>{hint}</InputHintOptional>
        </Label>
      )}
      <InputStyle border={border}>
        {type === 'search' ? (
          <>
            <SearchIcon/>
            <InputS search placeholder={placeholder} />
          </>
        ) : type === 'send' ? (
          <>
            <InputS arrow placeholder={placeholder} />
            <InputSendButton>
              <BackIcon/>
            </InputSendButton>
          </>
        ) : (
          <InputS placeholder={placeholder} />
        )}
      </InputStyle>
      {optional && (
        <InputOptionalCon>
          <OptionalIcon/>
          <InputHintOptional>{optional}</InputHintOptional>
        </InputOptionalCon>
      )}
    </InputCon>
  );
}
