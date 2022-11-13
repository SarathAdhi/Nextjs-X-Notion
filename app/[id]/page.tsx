import React, { use } from "react";
import notion from "../../common/lib/notion";
import { NotionRender } from "../../common/components/NotionRender";
import { NextRouter } from "next/router";

type Props = {
  params: NextRouter["query"];
};

async function getNotionPage(id: string) {
  const page = await notion.getPage(id);
  return page;
}

const ViewPage = ({ params }: Props) => {
  const id = params.id;

  console.log(id);

  const recordMap = use(getNotionPage(id as string));

  return <NotionRender recordMap={recordMap} />;
};

export default ViewPage;
