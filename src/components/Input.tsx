import { Children } from "react";

const Input = ({
  name,
  title,
  placeholder,
  value,
  info,
  type = "text",
  error,
  _error,
  success,
  _class,
  inputStyle,
  children,
  ...rest
}: InputProps) => {
  return (
    <div className={`flex flex-col mb-[14px] ${_class}`}>
      <label
        htmlFor={name}
        className="text-[#111] text-[13px] font-ember font-bold pb-0.5"
      >
        {title}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        style={inputStyle}
        placeholder={placeholder}
        {...rest}
        className={`text-[#0F1111] text-[13px] font-ember outline-none h-[31px] py-[3px] px-[7px] border rounded-[3px] ${
          !error &&
          "border-[#a6a6a6] border-t-[#949494] shadow-[0_1px_0_rgba(255,255,255,.5),_0_1px_0_rgba(0,0,0,.07)_inset] focus:bg-[#F7FEFF] focus:border-[#007185] focus:shadow-[0_0_0_3px_#c8f3fa,_0_1px_2px_rgba(15,17,17,.15)_inset]"
        } ${
          error &&
          "border-[#CC0C39] shadow-[0_0_0_1px_#cc0c39_inset] focus:shadow-[0_0_0_1px_#cc0c39_inset,_0_0_0_3px_#ffe3e3]"
        }`}
      />
      {Children.toArray(children)[0]}
      {info && !error && !success && (
        <div className="mt-[6px] flex items-center">
          <i
            style={{ backgroundPosition: "-166px -130px" }}
            className="icons w-[14px] h-[13px]"
          />
          <span className="text-[#2b2b2b] text-[12px] font-ember">{info}</span>
        </div>
      )}

      {success && (
        <div className="flex items-centr gap-1 mt-[6px]">
          <i
            style={{ backgroundPosition: "-457px -144px" }}
            className="_icons w-[18px] h-[18px]"
          />
          <span className="text-[#067D62] text-[12px] font-ember">
            {success}
          </span>
        </div>
      )}

      {error && (
        <div className="flex items-centr mt-[6px]">
          <i
            style={{ backgroundPosition: "-141px -130px" }}
            className="icons w-[14px] h-[13px]"
          />
          <span className="text-[#c40000] text-[12px] font-ember">{error}</span>
        </div>
      )}

      {Children.toArray(children)[1]}
    </div>
  );
};

export default Input;

interface InputProps {
  name: string;
  type?: string;
  title: string;
  value?: string;
  info?: string;
  error?: string;
  success?: string;
  placeholder?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  _error?: string;
  _class?: string;
  inputStyle?: React.CSSProperties | undefined;
  children?: React.ReactNode;
}
