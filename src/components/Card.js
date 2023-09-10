import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import comments from "../images/comments.png";
import download from "../images/download.png";
import whastapp from "../images/whastapp.jpeg";
import play from "../images/icons8-play-100.png";

const Card = ({ videoData }) => {
  const navigate = useNavigate();
  const { description, thumbnail ,mediaUrl} = videoData.submission;
  const { reaction } = videoData;
  const { comment } = videoData;
  const { pic, name } = videoData.creator;
  const [follow, setFollow] = useState("Follow");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(reaction.count);

  const handleFollow = () => {
    setFollow((prevFollow) =>
      prevFollow === "Follow" ? "Following" : "Follow"
    );
  };

  const playVideo = () => {
    navigate("/video", { state: { videoData } });
  };

  const toggleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const shareOnWhatsApp = () => {
    const message = `Check out this video: ${description} - ${mediaUrl}`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="w-full md:w-3/6 mx-auto my-8 relative bg-slate-50 shadow-lg">
      <img src={play} className="absolute top-[50%] left-[35%]" onClick={playVideo} alt="play"/>
      <div className="flex  md:flex-row justify-between items-center gap-2 my-2 p-3">
        <div className="flex gap-4 items-center">
          <img src={pic} className="w-10 h-10 rounded-full" alt="pic" />
          <h6 className="text-lg font-bold">{name}</h6>
        </div>
        <div>
          <h3
            id="follow"
            className="px-6 text-sky-400 font-bold border-solid border-2 border-sky-600 cursor-pointer"
            onClick={handleFollow}
          >
            {follow}
          </h3>
        </div>
      </div>

      <p className="w-[80%] p-2 font-sans">
        {description.split(" ").slice(0, 20).join(" ")}
      </p>

      <div className="w-full md:w-[80%] flex justify-center">
        <img
          src={thumbnail}
          className="w-full md:w-[100%] h-[300px] md:h-[500px] object-cover"
          onClick={playVideo}
          alt={thumbnail}
        />
        <div className="flex flex-col gap-14 absolute bottom-2 right-8">
          <div>
            <img src={whastapp} alt="whatsapp" className="w-8 cursor-pointer" onClick={shareOnWhatsApp} />
          </div>
          <div className="relative flex flex-col items-center ">
            <i
              className={`${
                liked
                  ? "ri-heart-fill text-[28px] text-red-500"
                  : "ri-heart-line text-[28px]"
              }`}
              onClick={toggleLike}
            ></i>
            <p className="text-center">{likeCount}</p>
          </div>
          <div>
            <img src={comments} alt="comments" className="w-8 cursor-pointer"/>
            <p className="text-center">{comment.count}</p>
          </div>
          <div className="mb-5">
            <img src={download} alt="download" className="w-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
