import Link from "next/link";

const A = ({
  href,
  _class = "",
  variant = "primary",
  children,
  ...rest
}: AProps) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`${
        variant === "primary" && "text-[#0066c0] text-[12px] font-ember hover:text-[#c45500] hover:underline"
      } ${_class}`}
    >
      {children}
    </Link>
  );
};

export default A;

interface AProps {
  href: string;
  _class?: string;
  variant?: "primary";
  children: React.ReactNode;
}
