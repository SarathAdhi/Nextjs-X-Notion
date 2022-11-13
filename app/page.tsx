import React from "react";
import { NotionRender } from "../common/components/NotionRender";
import notion from "../common/lib/notion";
import { use } from "react";
import config from "../site.config";

async function getNotionPage() {
  const page = await notion.getPage(config.notionPageId);
  return page;
}

const Home = () => {
  const page = use(getNotionPage());

  return <NotionRender recordMap={page} />;
};

export default Home;
