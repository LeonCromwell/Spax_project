import { Card, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Image from "../../component/Image";
import Button from "../../component/Button";
import * as videoService from "../../services/videoService";

const UploadVideo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setLoading(true);
      videoService
        .uploadVideo(file, "title")
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log("data", data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleClick = (
    event?: React.MouseEvent<HTMLButtonElement> | undefined
  ) => {
    // Ngăn chặn hành vi mặc định của sự kiện
    event?.preventDefault();

    // Gọi hàm xử lý sự kiện nếu đã được cung cấp
    handleUpload();
  };

  useEffect(() => {
    console.log("file", file);
  }, [file]);
  return (
    <Card
      placeholder={false}
      className=" w-full p-10 bg-white rounded-xl z-10 mt-10"
    >
      <div className="text-center">
        {loading ? (
          <Spinner color="red" />
        ) : (
          <>
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              File Upload!
            </h2>
            <p className="mt-2 text-2xl text-gray-400">
              Lorem ipsum is placeholder text.
            </p>
          </>
        )}
      </div>
      <form className="mt-8 space-y-3" action="#" method="POST">
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-2xl font-bold text-gray-500 tracking-wide">
            Title
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="mail@gmail.com"
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-2xl font-bold text-gray-500 tracking-wide">
            Attach Document
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-96 p-10 group text-center">
              <div className="h-full w-full text-center flex flex-col items-center justify-center  ">
                -
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <Image
                    className="w-full h-full object-cover rounded-lg has-mask-2 "
                    src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                    alt="upload"
                  />
                </div>
                <p className="pointer-none text-gray-500 ">
                  <span className="text-sm">Drag and drop</span> files here
                  <br /> or{" "}
                  <Link
                    to="/test"
                    id=""
                    className="text-blue-600 hover:underline"
                  >
                    select a file
                  </Link>{" "}
                  from your computer
                </p>
              </div>
              <input
                accept="video/mp4, video/mov"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        {file && (
          <video
            className="h-full w-full rounded-lg aspect-video"
            autoPlay
            src={URL.createObjectURL(file)}
            controls
          />
        )}
        <p className="text-sm text-gray-900">
          <span>File type: mp4</span>
        </p>
        <div className="w-full flex justify-center">
          <Button onClick={handleClick} text="Upload" primary />
        </div>
      </form>
    </Card>
  );
};

export default UploadVideo;
