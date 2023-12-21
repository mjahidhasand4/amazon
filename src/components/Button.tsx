"use client";

const Button = ({
  variant = "primary",
  _class,
  type = "button",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        variant === "primary" &&
        "border border-[#FCD200] bg-[#FFD814] hover:border-[#F2C200] hover:bg-[#F7CA00]"
      }  ${
        variant !== "text" &&
        "rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)] focus:border-[#008296] focus:bg-[#F0B800] focus:shadow-[0_0_0_3px_#c8f3fa,_inset_0_0_0_2px_#fff]"
      } ${_class}`}
      {...rest}
    >
      <div
        className={`${
          variant !== "text" && "text-[#0F1111]"
        } text-[13px] font-ember ${
          variant === "text" &&
          "text-[#0066c0] text-[12px] font-ember hover:text-[#c45500] hover:underline"
        } h-[29px] pr-[10px] pl-[11px] rounded-[7px] flex items-center justify-center`}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  _class?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
