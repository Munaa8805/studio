import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const Footer = () => {
  const shareUrl = `https://studio-seven-opal.vercel.app/`;
  return (
    <footer className="container  mx-auto max-w-6xl py-10 flex flex-col items-center mb-8 space-y-6 md:flex-row md:justify-between ">
      <div className="text-bold text-3xl text-green-500"> loopstudios</div>
      <div className="flex flex-col items-start justify-between space-y-4 text-gray-400">
        <div className="flex items-start justify-center mx-auto space-x-4 md:justify-end md:mx-0">
          <TwitterShareButton
            url={shareUrl}
            quote="loopstudios"
            hashtag="#Loopstudios"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton
            url={shareUrl}
            quote="loopstudios"
            hashtag="#Loopstudios"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="font-bold">
          {" "}
          &copy; 2024 Loopstudios. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
