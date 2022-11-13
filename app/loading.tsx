"use client";

import Image from "next/image";
import React from "react";
import { zustantStore } from "../common/utils/store";

const Loading = () => {
  if (typeof window === "undefined") return <></>;

  const { isDark } = zustantStore();
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <Image
        src={isDark ? "/assets/loading-dark.svg" : "/assets/loading-light.svg"}
        width={50}
        height={50}
        alt="loading-svg"
      />
    </div>
  );
};

export default Loading;
