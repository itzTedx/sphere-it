"use client";

import Lottie from "react-lottie";

import logo from "@/assets/lottie/logo.json";

export const Logo = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie height={42} options={defaultOptions} width={138} />;
};
