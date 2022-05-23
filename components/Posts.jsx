import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { database } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [value, loading, error] = useCollection(collection(database, "posts"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div>
      {value &&
        value.docs.map((doc) => (
          <div key={doc.id}>
            <Post
              key={doc.id}
              name={doc.data().username}
              email={doc.data().email}
              image={doc.data().profile_picture}
              message={doc.data().message}
              postImage={doc.data().postUrl}
              timeStamp={doc.data().timeStamp}
            />
          </div>
        ))}
    </div>
  );
};

export default Posts;
