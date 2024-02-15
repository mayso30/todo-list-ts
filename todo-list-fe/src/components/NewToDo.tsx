import React from "react";
import {
  FormControl,
  FormLabel,
  FormHint,
  FormError,
  Input,
} from "@passfort/castle";

const InputBox = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Enter a Todo</FormLabel>
        <Input />
      </FormControl>
    </div>
  );
};

export default InputBox;
