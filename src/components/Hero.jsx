import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta",{
     opacity:1,
     y:-50,delay:2,
    })
  }, []);

  const handleSrc = () => {
    if (window.innerWidth < 750) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleSrc);
    return () => {
        removeEventListener("resize",handleSrc);
    };

   
  }, []);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 750 ? smallHeroVideo : heroVideo
  );
  return (
    <div>
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">
            Iphone 15 pro
          </p>

          <div className="md:w-10/12 w-9/12 pointer-events-none">
            <video autoPlay muted playsInline={true} key={videoSrc}>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 ">
            <a href="#highlights" className="btn">Buy</a>
            <p>From $199/month or $999</p>

        </div>

      </section>
    </div>
  );
};

export default Hero;
