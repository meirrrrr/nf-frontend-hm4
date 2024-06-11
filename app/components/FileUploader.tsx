"use client";
import React, { useState, ChangeEvent } from "react";
import { postAxiosInstance } from "../lib/apiClient";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [loadedBytes, setLoadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);
      postAxiosInstance
        .post("files/upload", formData, {
          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total || 0;
            setLoadedBytes(progressEvent.loaded);
            setTotalBytes(total);
            setUploadProgress(Math.round((progressEvent.loaded * 100) / total));
          },
        })
        .then((response) => {
          setStatus("Upload successful!");
        })
        .catch((error) => {
          setStatus("Upload failed.");
        });
    }
  };

  return (
    <div className="flex justify-start pt-5">
      <div className="flex flex-col gap-5 rounded-xlpy-8 w-[300px]">
        <input type="file" onChange={uploadFile} />
        {status && <p>{status}</p>}
        {file && <p>Uploading: {file.name}</p>}
        <progress value={uploadProgress} max="100">
          {uploadProgress}%
        </progress>
        <p>
          {loadedBytes} / {totalBytes} bytes
        </p>
      </div>
    </div>
  );
};

export default FileUploader;
