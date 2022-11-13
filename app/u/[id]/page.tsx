import React, { use } from "react";
import notion from "../../../common/lib/notion";
import { NotionRender } from "../../../common/components/NotionRender";
import { NextRouter } from "next/router";
import { getDocs, query, where } from "firebase/firestore";
import { notionCollectionRef } from "../../../common/lib/firebase";
import { ExtendedRecordMap } from "notion-types";

type Props = {
  params: NextRouter["query"];
};

type UserProps = {
  id: string;
  name: string;
  notionId: string;
};

async function getNotionPage(id: string) {
  const q = query(notionCollectionRef, where("name", "==", id));
  const querySnapshot = await getDocs(q);

  const result = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as UserProps[];

  if (result.length === 0) return { error: "Notion page not found", page: "" };

  try {
    const recordMap = await notion.getPage(result[0].notionId);
    return { recordMap, error: "" };
  } catch (error) {
    return { error: "Invalid Notion page ID", page: "" };
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
