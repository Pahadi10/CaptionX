"use client";
import axios, { Axios } from "axios";
import UploadIcon from "./UploadIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm("/api/upload", { file });

      setIsUploading(false);
      const newName = res.data.newName;
      router.push('/' + newName);
    }
  }
  return (
    <>
      {isUploading && (
        <div className="bg-black/80 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2  cursor-pointer">
        <UploadIcon />
        <span>Choose File</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
}
