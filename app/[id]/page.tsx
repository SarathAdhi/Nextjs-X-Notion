import React, { use } from "react";
import notion from "../../common/lib/notion";
import { NotionRender } from "../../common/components/NotionRender";
import { NextRouter } from "next/router";
import { ExtendedRecordMap } from "notion-types";

type Props = {
  params: NextRouter["query"];
};

async function getNotionPage(id: string) {
  try {
    const recordMap = await notion.getPage(id);
    return { recordMap, error: "" };
  } catch (error) {
    return { error: "Notion page not found", page: "" };
  }
}

const ViewPage = ({ params }: Props) => {
  const id = params.id;

  const result = use(getNotionPage(id as string));

  console.log(result);

  if (result.error || !result.recordMap)
    return (
      <h1 className="mt-10 w-full font-semibold text-xl dark:text-white text-center">
        {result.error}
      </h1>
    );

  return <NotionRender recordMap={result.recordMap as ExtendedRecordMap} />;
};

export default ViewPage;
