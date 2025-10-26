import type { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "danger" | "success";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
