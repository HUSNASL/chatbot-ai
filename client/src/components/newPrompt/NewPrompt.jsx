import React, { useState,useRef, useEffect } from "react";
import { IKImage } from 'imagekitio-react';
import "./newPrompt.css";
import Upload from "../upload/Upload";

const NewPrompt = () => {
  const [img,setImg] = useState({
    isLoading: false,
    error:"",
    dbData:{}
  })
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      {/* ADD NEW CHAT */}
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData?.filePath ? (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          width="380"
          transformation={[{width:200}]}
        />
      ) : null}
      <div className="endChat" ref={endRef}></div>
      <form action="" className="newForm">
        <Upload setImg={setImg}/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
