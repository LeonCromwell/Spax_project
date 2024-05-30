import React from "react";

import Button from "../../Button";

interface DeleteCommentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleDelete: (commentId: string, parentId: string) => void;
  comment: any;
}

export default function DeleteCommentModal({
  open,
  setOpen,
  handleDelete,
  comment,
}: DeleteCommentModalProps) {
  return open ? (
    <div
      className="fixed top-0 left-0 bg-black bg-opacity-60 w-screen h-screen z-10"
      onClick={(e) => {
        if (e.currentTarget !== e.target) {
          return;
        }
        setOpen(false);
      }}
    >
      <div className="absolute top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4 shadow-md z-20 bg-white rounded-lg sm:max-w-[30rem] w-10/12">
        <div className="flex flex-col py-4 px-7 ">
          <div className="mb-4 font-semibold text-lg">Delete Comment</div>

          <div className="opacity-70 mb-4 text-sm">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </div>

          <div className="flex justify-between">
            <Button
              className="bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm"
              text="NO, CANCEL"
              onClick={() => setOpen(false)}
            />

            <Button
              className="bg-red-400 text-white px-4 py-2 rounded-lg font-semibold text-sm"
              onClick={() => {
                setOpen(false);
                handleDelete(comment.id, comment.parentId);
              }}
              text="YES, DELETE"
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
