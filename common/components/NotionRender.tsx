"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { zustantStore } from "../utils/store";
import Link from "next/link";
import Image from "next/image";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

type Props = {
  recordMap: ExtendedRecordMap;
};

export const NotionRender: React.FC<Props> = ({ recordMap }) => {
  const { isDark } = zustantStore();

  return (
    <NotionRenderer
      components={{
        nextImage: Image,
        nextLink: Link,
      }}
      rootPageId={"f78b320626ed4bb2bc9dac09e9795df8"}
      recordMap={recordMap}
      fullPage={true}
      darkMode={isDark}
    />
  );
};
