"use client";
import { A, Button, Input } from "@/components";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const VerifyOTP = () => {
  const router = useRouter();

  const [info, setInfo] = useState({
    contact: "",
    type: "",
  });

  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/verify-otp');
        const result = await response.json();
        setInfo(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const onClick = async (event: any) => {
    event.preventDefault();

    const response = await fetch("/api/verify-otp", {
      method: "PUT",
    });

    if (response.ok)
      setSuccess(
        `A new code has been sent to your ${
          info.type === "mobile_phone_number" ? "mobile number" : "email"
        }.`
      );
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const otp = (event.currentTarget[0] as HTMLInputElement).value;

    const response = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ otp }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) router.replace("/");
    else router.replace("register");
  };

  return (
    <main>
      <form
        className="w-[350px] mt-8 py-[14px] px-[17px] mx-auto border border-[#ddd] rounded-lg flex flex-col items-center"
        onSubmit={onSubmit}
      >
        <h1 className="text-[#0f1111] text-[28px] font-ember w-full">
          {info.type === "mobile_phone_number"
            ? "Verify mobile number"
            : "Verify email address"}
        </h1>
        <p className="text-[#0f1111] text-[14px] font-ember pb-[14px]">
          To verify your{" "}
          {info.type === "mobile_phone_number" ? "mobile number" : "email"},
          we&apos;ve sent a One Time Password (OTP) to {info.contact}{" "}
          <A href="register" _class="text-[14px]">
            (Change)
          </A>
        </p>
        <Input name="otp" title="Enter OTP" _class="w-full" success={success} />
        <Button type="submit" _class="w-full">Create your Amazon account</Button>
        <p className="text-[12px] my-[18px]">
          By creating an account, you agree to Amazon&apos;s &nbsp;
          <A href="">Conditions of Use</A> and <A href="">Privacy Notice</A>.
        </p>
        <Button variant="text" onClick={onClick}>
          Resend OTP
        </Button>

        {success && (
          <div>
            <p className="text-[#0f1111] text-[12px]">
              Note: If you didn&apos;t receive our verification{" "}
              {info.type === "mobile_phone_number" ? "code" : "email"}:
            </p>
            <ul className="pl-4">
              <li className="text-[#0f1111] text-[12px] list-disc">
                Confirm that your{" "}
                {info.type === "mobile_phone_number"
                  ? "mobile number"
                  : "email address"}{" "}
                was entered correctly above.
              </li>
              {info.type === "email" && (
                <li className="text-[#0f1111] text-[12px] list-disc">
                  Check your spam or junk email folder.
                </li>
              )}
            </ul>
          </div>
        )}
      </form>
    </main>
  );
};

export default VerifyOTP;
