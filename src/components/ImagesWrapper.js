import React from "react";
import Card from "./Card";
import ImageDeepDesk from "../assets/desktop/image-deep-earth.jpg";
import ImageDeepMobile from "../assets/mobile/image-deep-earth.jpg";
import NightArcadeDesk from "../assets/desktop/image-night-arcade.jpg";
import NightArcadeMobile from "../assets/mobile/image-night-arcade.jpg";
import SoccerDesk from "../assets/desktop/image-soccer-team.jpg";
import SoccerMobile from "../assets/mobile/image-soccer-team.jpg";
import GridDesk from "../assets/desktop/image-grid.jpg";
import GridMobile from "../assets/mobile/image-grid.jpg";
import AboveDesk from "../assets/desktop/image-from-above.jpg";
import AboveMobile from "../assets/mobile/image-from-above.jpg";

const ImagesWrapper = () => {
  const data = [
    { id: 1, name: "Deep Earth", img1: ImageDeepDesk, img2: ImageDeepMobile },
    {
      id: 2,
      name: "Night Arcade",
      img1: NightArcadeDesk,
      img2: NightArcadeMobile,
    },
    {
      id: 3,
      name: "Soccer Team VR",
      img1: SoccerDesk,
      img2: SoccerMobile,
    },
    { id: 4, name: "The Grid", img1: GridDesk, img2: GridMobile },
    {
      id: 5,
      name: "From Up Above VR",
      img1: AboveDesk,
      img2: AboveMobile,
    },
  ];
  return (
    <section
      id="creations"
      className="flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-500 md:px-0"
    >
      <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase  md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button className="hidden btn md:block">See All</button>
      </div>

      <div className="flex flex-wrap w-full gap-5 justify-center hover:cursor-pointer text-white text-2xl md:justify-between">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default ImagesWrapper;
