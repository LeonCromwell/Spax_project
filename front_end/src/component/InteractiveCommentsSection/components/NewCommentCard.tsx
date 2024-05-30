import React, { useState } from "react";

import images from "../../../assets/images";
import Button from "../../Button";

interface NewCommentCardProps {
  currentUser: any;
  onAdd: (text: string) => void;
}

export default function NewCommentCard({
  currentUser,
  onAdd,
}: NewCommentCardProps) {
  const [text, setText] = useState<string>("");

  return (
    <>
      {/* Desktop View */}
      <div className="sm:block hidden">
        <div className="flex bg-white p-6 rounded-md">
          <img
            alt="avatar"
            className="w-10 h-10 rounded-full mr-4"
            src={images.avatar}
          />
          <textarea
            autoFocus
            value={text}
            className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mr-4"
            placeholder="Add a comment..."
            onChange={(e) => setText(e.target.value)}
            onFocus={function (e) {
              var val = e.target.value;
              e.target.value = "";
              e.target.value = val;
            }}
          />
          <Button
            className="bg-red-400 text-white w-36 h-12 rounded-lg hover:opacity-50"
            onClick={() => {
              onAdd(text);
              setText("");
            }}
            text="SEND"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden block">
        <div className="flex flex-col bg-white p-4 rounded-md">
          <textarea
            value={text}
            className="border-[1px] h-24 rounded-md resize-none w-full px-4 py-2 mb-4"
            placeholder="Add a comment..."
            onChange={(e) => setText(e.target.value)}
            onFocus={function (e) {
              var val = e.target.value;
              e.target.value = "";
              e.target.value = val;
            }}
          />
          <div className="flex justify-between">
            <img
              alt="avatar"
              className="w-10 h-10 rounded-full mr-4"
              src={images.avatar}
            />

            <Button
              className="bg-red-400 text-white w-28 h-12 rounded-lg"
              onClick={() => {
                onAdd(text);
                setText("");
              }}
              text="SEND"
            />
          </div>
        </div>
      </div>
    </>
  );
}
