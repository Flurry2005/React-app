import type { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "danger" | "success";
  outline?: true | false;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ color = "primary", children, outline, onClick }: Props) => {
  return (
    <button
      className={"btn btn-" + (outline ? "outline-" : "") + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
