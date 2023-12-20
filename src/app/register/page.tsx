"use client";
import { A, Button, Input } from "@/components";
import { useClickOutside } from "@/hooks";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import countries from "../../../database/country.json";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileReg = /^\d+$/;

  const [data, setData] = useState({
    name: "",
    contact: "",
    countryCode: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isOpenCountryList, setIsOpenCountryList] = useState(false);
  const [callingCode, setCallingCode] = useState("US +1");
  const [width, setWidth] = useState(36);
  const [accountError, setAccountError] = useState("");

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ref = useClickOutside(() => setIsOpenCountryList(false));

  useEffect(() => {
    const updateButtonWidth = () => {
      const width = buttonRef.current?.getBoundingClientRect().width;
      if (width) setWidth(width!);
    };

    updateButtonWidth();
  }, [data.countryCode]);

  const handleOpenCountryList = () => setIsOpenCountryList(true);

  const setCountryCode = (code: string, country_code: string) => {
    setData((prev) => ({ ...prev, countryCode: code }));
    setCallingCode(`${country_code} ${code}`);
    setIsOpenCountryList(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "contact") {
      const isMobile = mobileReg.test(value);
      setIsMobile(isMobile);
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({
      name: "",
      contact: "",
      password: "",
      confirmPassword: "",
    });

    const { name, contact, password, confirmPassword, countryCode } = data;

    setErrors({
      name: name ? "" : "Enter your name",
      password: password.length >= 6 ? "" : "Minimum 6 characters required",
      confirmPassword:
        password && !confirmPassword
          ? "Type your password again"
          : password !== confirmPassword
          ? "Passwords must match"
          : "",
      contact: !contact
        ? "Enter your mobile number or email"
        : emailReg.test(contact) || mobileReg.test(contact)
        ? ""
        : "Wrong or Invalid email address or mobile phone number. Please correct and try again",
    });

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      try {
        const response = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, contact, password, countryCode }),
        });

        if (response.ok) router.replace("verify-otp");

        const { message } = await response.json();
        setAccountError(message);
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
  };

  return (
    <main>
      <form
        className="w-[350px] mt-8 py-[14px] px-[18px] mx-auto border border-[#ddd] rounded-lg"
        onSubmit={onSubmit}
      >
        <h1 className="text-[#0f1111] text-[28px] font-ember">
          Create account
        </h1>
        <Input
          name="name"
          title="Your name"
          placeholder="First and last name"
          value={data.name}
          error={errors.name}
          onChange={onChange}
        />
        <Input
          name="contact"
          title="Mobile number or email"
          value={data.contact}
          error={errors.contact}
          onChange={onChange}
          _class="relative"
          inputStyle={isMobile ? { paddingLeft: `${width + 12}px` } : undefined}
        >
          {isMobile && (
            <div>
              <button
                ref={buttonRef}
                onClick={handleOpenCountryList}
                className="text-[#0066c0] text-[13px] font-ember absolute top-[28px] left-2 cursor-text"
              >
                {callingCode}
              </button>
              {isOpenCountryList && (
                <div
                  ref={ref}
                  className="w-[221px] h-[211.4px] rounded border border-[rgba(0,0,0,0.2)] bg-white shadow-[0_2px_4px_rgba(0,0,0,.13)] flex flex-col items-start absolute overflow-y-scroll overflow-x-hidden"
                >
                  {countries.map(
                    ({ country_name, code, country_code }, index) => (
                      <button
                        className="text-[#111] text-[13px] font-ember w-full pt-0.5 pr-3 pb-[1px] pl-[13px] flex items-center gap-2 border border-transparent hover:border-[#a6a6a6] hover:bg-[#f3f3f3] border-l-[#e77600]"
                        onClick={() => setCountryCode(code, country_code)}
                        key={index}
                      >
                        {country_name} {code}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          )}

          {accountError && (
            <div className="flex items-centr mt-[6px]">
              <i
                style={{ backgroundPosition: "-141px -130px" }}
                className="icons w-[14px] h-[13px]"
              />
              <p className="text-[#c40000] text-[12px] font-ember">
                {accountError} {" "}
                <A href="sign-in">Sign in</A> and{" "}
                <A href="learn-more">learn more</A>
              </p>
            </div>
          )}
        </Input>
        <Input
          name="password"
          type="password"
          title="Password"
          placeholder="At least 6 characters"
          value={data.password}
          info="Passwords must be at least 6 characters."
          error={errors.password}
          onChange={onChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          title="Re-enter password"
          value={data.confirmPassword}
          error={errors.confirmPassword}
          onChange={onChange}
        />
        <Button _class="w-full">Continue</Button>

        <p className="text-[12px] my-[18px]">
          By creating an account, you agree to Amazon's &nbsp;
          <A href="">Conditions of Use</A> and <A href="">Privacy Notice</A>.
        </p>
        <hr />
        <p className="text-[13px] font-ember mt-[14px]">
          Already have an account?{" "}
          <A href="sign-in" _class="text-[13px]">
            Sign in
          </A>
        </p>
      </form>
    </main>
  );
};

export default Register;
