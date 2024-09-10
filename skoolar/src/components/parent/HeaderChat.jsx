import React from "react";
import { groupId } from "../../app/dashboard/parent/chat/[slug]/action";
const HeaderChat = async ({ slug }) => {
  const { data } = await groupId(slug);
  return (
    <div className="flex flex-col">
      <p className="ml-5  text-black font-medium text-lg">Class {data.name}</p>
      <p className="ml-5 text-neutral-400 font-normal text-sm">
        {data.parent_id.length} participant
      </p>
    </div>
  );
};

export default HeaderChat;
