import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { app, database, storage } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { v4 } from "uuid";
import {
  serverTimestamp,
  collection,
  addDoc,
  updateDoc,
  doc as uploadedDocument,
} from "firebase/firestore";
import {
  ref as storeRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setimageToPost] = useState(null);
  const [prog, setprog] = useState(0);
  const [imageUpload, setimageUpload] = useState(null);

  const metadata = {
    contentType: "image/jpeg",
  };

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) returne;

    const collRef = collection(database, "posts");

    addDoc(collRef, {
      message: inputRef.current.value,
      username: session.user.name,
      email: session.user.email,
      profile_picture: session.user.image,
      timestamp: serverTimestamp(),
    }).then((doc) => {
      if (imageToPost) {
        console.log(imageToPost);
        const storageRef = storeRef(storage, `posts/${doc.id}`);
        const uploadTask = uploadBytesResumable(storageRef, imageUpload);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            setprog(prog);
          },
          (err) => console.log(err),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              const docRef = uploadedDocument(database, "posts", doc.id);
              updateDoc(docRef, {
                postUrl: url,
              });
            });
          }
        );
      }
    });

    inputRef.current.value = "";
    filePickerRef.current.value = null;
  };

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setimageToPost(readerEvent.target.result);
    };

    setimageUpload(e.target.files[0]);
  };

  const removeImage = () => {
    setimageToPost(null);
    setimageUpload(null);
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md
    text-gray-500 mt-6 font-medium"
    >
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={session.user.image}
          className="rounded-full cursor-pointer"
          width="40"
          height="40"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            className="rounded-full h-12 bg-gray-100
             flex-grow px-5 focus:outline-none"
            ref={inputRef}
            placeholder={`What't is in your mind, ${session.user.name}`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>

          {imageToPost && (
            <div
              onClick={removeImage}
              className="flex flex-col filter 
            hover:brightness-100 transition duration-150
            hover:scale-105 transform
            cursor-pointer"
            >
              <img src={imageToPost} alt="" className="h-10 object-contain" />
              <p className="text-xs text-red-500 text-center">Remove</p>
            </div>
          )}
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Aktivity</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} onChange={addImage} type="file" hidden />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
