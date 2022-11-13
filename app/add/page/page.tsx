"use client";

import React, { useState } from "react";
import { addDoc, query, where, getDocs } from "firebase/firestore";
import { notionCollectionRef } from "../../../common/lib/firebase";
import { toast } from "react-hot-toast";

const AddNotion = () => {
  const [values, setValues] = useState({ name: "", notionId: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, notionId } = values;
    if (!name || !notionId) return;

    const q = query(notionCollectionRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    const result = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (result.length > 0) {
      toast.error("Name already exists");
      return;
    }

    if (/[A-Z]/.test(name)) {
      toast.error("Name must be in lowercase");
      return;
    }

    await addDoc(notionCollectionRef, values);
    toast.success("Added successfully");
  }

  return (
    <div className="p-2 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 mt-40 max-w-full w-[500px]  bg-black/50 dark:bg-white/20 rounded-md grid place-items-center gap-4"
      >
        <input
          type="text"
          className="w-full p-2 rounded-md font-medium appearance-none focus:outline-none"
          placeholder="Enter your name"
          value={values.name}
          onChange={({ target }) =>
            setValues({ ...values, name: target.value })
          }
          onKeyDown={({ key }) => {
            if (key === "Enter") handleSubmit;
          }}
          required
        />

        <input
          type="text"
          className="w-full p-2 rounded-md font-medium appearance-none focus:outline-none"
          placeholder="Enter your Notion ID"
          value={values.notionId}
          onChange={({ target }) =>
            setValues({ ...values, notionId: target.value })
          }
          onKeyUp={({ key }) => {
            if (key === "Enter") handleSubmit;
          }}
          required
        />

        <button className="px-2 py-1 bg-[#6ce975] font-bold rounded-md tracking-wide">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNotion;
