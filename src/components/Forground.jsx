import React, { useRef } from "react";
import Card from "./Card";

function Forground() {

const ref = useRef(null);

  const data = [
    {
      desc: "Vaibhav Bhosale, Web-Developer",
      filesize: ".220kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Resume", tagColor: "green" },
    },
    {
      desc: "MCA Degree",
      filesize: ".240kb",
      close: true,
      tag: { isOpen: true, tagTitle: "View", tagColor: "blue" },
    },
    {
      desc: "BCA Degree",
      filesize: ".180kb",
      close: true,
      tag: { isOpen: true, tagTitle: "View", tagColor: "green" },
    },
    {
      desc: "Work Experience",
      filesize: ".100kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Skills",
      filesize: ".250kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Certifications",
      filesize: ".600kb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;
