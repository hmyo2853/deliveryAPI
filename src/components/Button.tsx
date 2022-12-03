import React, { MouseEventHandler } from "react";

interface Props extends React.PropsWithChildren {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
