// app/insert-group-message.js
"use client";

import { useState } from "react";
import { createGroupMessage, getAllMessagesByGroupId } from "../admin/action";

export default function InsertGroupMessage() {
  async function get(id) {
    await getAllMessagesByGroupId(1);
  }
  return (
    <div>
      <button onClick={get}>Check all message</button>
    </div>
  );
}
