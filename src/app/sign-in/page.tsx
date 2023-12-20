"use client";
import { A, Button, Input } from "@/components";
import { useClickOutside } from "@/hooks";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import countries from "../../../database/country.json";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileReg = /^\d+$/;

  const [data, setData] = useState({
    contact: "",
    countryCode: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    contact: "",
    password: "",
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isOpenCountryList, setIsOpenCountryList] = useState(false);
  const [callingCode, setCallingCode] = useState("US +1");
  const [width, setWidth] = useState(36);

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
      contact: "",
      password: "",
    });

    const { contact, password, countryCode } = data;

    setErrors({
      password: password.length >= 6 ? "" : "Minimum 6 characters required",
      contact: !contact
        ? "Enter your mobile number or email"
        : emailReg.test(contact) || mobileReg.test(contact)
        ? ""
        : "Wrong or Invalid email address or mobile phone number. Please correct and try again",
    });

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      try {
        const response = await fetch("/api/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contact, password, countryCode }),
        });

        if (response.ok) router.replace("/");
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
  };

  const [isOpenMore, setIsOpenMore] = useState(false);
  const toggleOpenMore = () => setIsOpenMore((prev) => !prev);
  return (
    <main>
      <form
        className="w-[350px] mt-8 py-[14px] px-[18px] mx-auto border border-[#ddd] rounded-lg"
        onSubmit={onSubmit}
      >
        <h1 className="text-[#0f1111] text-[28px] font-ember">Sign in</h1>
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
        <Button type="submit" _class="w-full">
          Continue
        </Button>
        <p className="text-[12px] my-[18px]">
          By creating an account, you agree to Amazon's &nbsp;
          <A href="">Conditions of Use</A> and <A href="">Privacy Notice</A>.
        </p>
        <Button
          type="button"
          variant="text"
          _class="flex items-center gap-1"
          onClick={toggleOpenMore}
        >
          <i
            className={`mt-1 mr-1 border-4 border-transparent ${
              isOpenMore ? "border-b-[#111] mb-2" : "border-t-[#111] "
            }`}
          />
          <span>Need help?</span>
        </Button>
        {isOpenMore && (
          <div className="flex flex-col items-start ml-6">
            <A href="forgot-password" _class="text-[13px]">
              Forgot your password?
            </A>
            <A href="sign-in-issues" _class="text-[13px]">
              Other issues with Sign-In
            </A>
          </div>
        )}
      </form>
    </main>
  );
};

export default SignIn;
