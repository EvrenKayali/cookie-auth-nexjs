"use client";

import { Button, ButtonProps } from "./button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const SubmitButton: React.FC<ButtonProps> = ({ disabled, ...props }) => {
  const { pending } = useFormStatus();
  return <Button disabled={pending} {...props}></Button>;
};
