"use client";
import React, { useState } from "react";
import { loginInputs, socials } from "@/data";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { authApi } from "@/services/dataService";
const Login = (p0: { email: any; password: any }) => {
  const router = useRouter();
  const [eyeCheck, setEyeCheck] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { useLoginMutation } = authApi;
  const [login, { isLoading, error }] = useLoginMutation();
  const handleLogin = async () => {
    try {
      const res = await login({
        email: form.email,
        password: form.password,
      }).unwrap();
      console.log("logged in", res);
      router.push("/");
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className="w-[100vw] bg-white h-[100vh] flex flex-col fixed left-0 z-1000 items-center justify-center ">
      <div className="font-bold py-4">Sign In With Email</div>
      <form className="lg:w-[30%] w-[50%]">
        {loginInputs.map((input, idx) => (
          <div key={idx}>
            <InputGroup mb="3">
              <InputLeftElement color="gray" py="6">
                <div className="flex ">
                  {input.icons.slice(0, 1).map((icon, iconIdx) => (
                    <div key={iconIdx}>{icon}</div>
                  ))}
                </div>
              </InputLeftElement>
              <InputRightElement h="100%" color="gray">
                <div className="h-full flex items-center justify-center">
                  {eyeCheck === false &&
                    input.icons.slice(2, 3).map((icon, iconIdx) => (
                      <div
                        className=""
                        key={iconIdx}
                        onClick={() => {
                          setEyeCheck(true);
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  {eyeCheck === true &&
                    input.icons.slice(1, 2).map((icon, iconIdx) => (
                      <div
                        className=""
                        key={iconIdx}
                        onClick={() => {
                          setEyeCheck(false);
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                </div>
              </InputRightElement>
              <Input
                borderRadius="10"
                value={form[input.name]}
                placeholder={input.placeholder}
                colorScheme="gray"
                size="sm"
                py="6"
                pl="10"
                type={
                  input.name === "password"
                    ? eyeCheck === false
                      ? "password"
                      : "text"
                    : "text"
                }
                onChange={(e) => {
                  const updatedForm = {
                    ...form,
                    [input.name]: e.target.value,
                  };
                  console.log("form values: ", form.email, form.password);
                  setForm(updatedForm);
                }}
              />
            </InputGroup>
          </div>
        ))}
        <div className="text-right text-sm text-neutral-600 underline">
          Forgot Password?
        </div>
        <Button
          onClick={handleLogin}
          isLoading={isLoading}
          className="w-full"
          marginY="4"
          bg="black"
          colorScheme="green"
        >
          Sign In
        </Button>
      </form>

      <div className="text-sm text-neutral-500">Or login in with</div>
      <div className="my-4 flex flex-row justify-between gap-2 w-[10%] text-lg items-center justify-center">
        {socials.map((social, index) => (
          <div
            className="text-xl px-4 py-2 bg-neutral-100 rounded-sm"
            key={index}
          >
            {social.icon}
          </div>
        ))}
      </div>
      <div className="text-sm text-neutral-500">
        {`Don't have an account?`}{" "}
        <span
          className="text-green-600 cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
