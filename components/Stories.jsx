import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Rawezh Hama",
    src: "https://profile-images.xing.com/images/6cd4523cf0e56bc2d7c320c335cae84d-1/rawezh-hama.1024x1024.jpg",
    profile:
      "https://profile-images.xing.com/images/6cd4523cf0e56bc2d7c320c335cae84d-1/rawezh-hama.1024x1024.jpg",
  },
  {
    name: "Elon Mask",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
  },
  {
    name: "Rawezh Hama",
    src: "https://i1.adis.ws/i/canon/canon-ef-85mm-f1.4l-is-usm-sample-031-new-hero_f94a560c4aa4410698177eaa61d696c8?$hero-header-half-16by9-dt-jpg$",
    profile:
      "https://images.squarespace-cdn.com/content/v1/60032e0fcc8a3157fea48fd1/1619511348201-W91Y3B5NQWPXGN7Q0L08/stevenson-creative-portraits-anthony-kurtz-photography_07.jpg",
  },
  {
    name: "Elon Mask",
    src: "https://epicphoto.de/wp-content/uploads/elementor/thumbs/tipps-portrait-fotos-on56uv1sze4ki1fithzs9ccktdsihbxssk3ycn6obm.jpg",
    profile:
      "https://i.pinimg.com/originals/86/08/70/860870066df05a7a29bcb5bb9ea2e9a7.jpg",
  },
];

const Stories = () => {
  return (
    <div
      className="flex justify-center
   space-x-3 mx-auto"
    >
      {stories.map((story) => (
        <StoryCard
          key={story}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
