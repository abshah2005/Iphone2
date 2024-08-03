import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousal from "./VideoCarousal";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <div>
      <section
        id="#highlights"
        className="w-screen overflow-hidden h-full common-padding bg-zinc "
      >
        <div className="screen-max-width">
          <div className="mb-12 w-full md:flex items-end justify-between">
            <h1 id="title" className="section-heading">
              Get the highlights
            </h1>

            <div className="flex gap-5 flex-wrap items-end">
              <div className="link flex hello">
                <p className="">Watch the film</p>
                <img className="ml-2" src={watchImg} alt="watch" />
              </div>

              <div className=" link flex hello">
              <p className="">Watch the event</p>
              <img className="ml-2" src={rightImg} alt="right" />
              </div>

            </div>
          </div>

            <VideoCarousal />

        </div>
      </section>
    </div>
  );
};

export default Highlights;
