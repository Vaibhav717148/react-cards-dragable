import React, { useRef } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Vaibhav Bhosale, Web-Developer",
      filesize: "220kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Resume",
        tagColor: "green",
        pdfLink: "./pdfs/web-developer.pdf", 
      },
    },
    {
      desc: "MCA Degree",
      filesize: "240kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "View",
        tagColor: "blue",
        pdfLink: "path/to/mca-degree.pdf", 
      },
    },
    {
      desc: "BCA Degree",
      filesize: "180kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "View",
        tagColor: "green",
        pdfLink: "path/to/bca-degree.pdf", 
      },
    },
    {
      desc: "Work Experience",
      filesize: "100kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
        pdfLink: "path/to/work-experience.pdf", 
      },
    },
    {
      desc: "Skills",
      filesize: "250kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
        pdfLink: "path/to/skills.pdf", 
      },
    },
    {
      desc: "Certifications",
      filesize: "600kb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
        pdfLink: "path/to/certifications.pdf", 
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;
