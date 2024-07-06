import React from "react";
import "./Project.css";

function Project() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzM3wwfDF8c2VhcmNofDF8fGVsZWdhbnQlMjByb29tfGVufDB8fHx8MTYxOTkzNDkwOQ&ixlib=rb-1.2.1&q=80&w=400",
      text: "Haray",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzM3wwfDF8c2VhcmNofDF8fGVsZWdhbnQlMjByb29tfGVufDB8fHx8MTYxOTkzNDkwOQ&ixlib=rb-1.2.1&q=80&w=400",
      text: "Muruments/ Parker",
    },
    {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Freeman/ Bunk/ Carport",
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Jeffery/Sehl",
    },
    {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Freeman",
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Moose",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzM3wwfDF8c2VhcmNofDF8fGVsZWdhbnQlMjByb29tfGVufDB8fHx8MTYxOTkzNDkwOQ&ixlib=rb-1.2.1&q=80&w=400",
      text: "Grober/Roth",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzM3wwfDF8c2VhcmNofDF8fGVsZWdhbnQlMjByb29tfGVufDB8fHx8MTYxOTkzNDkwOQ&ixlib=rb-1.2.1&q=80&w=400",
      text: "Sportum/woodbury",
    },
    {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Hartley/Tanner",
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Case",
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Meisner",
    },
    {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Chapman/Kanee",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzM3wwfDF8c2VhcmNofDF8fGVsZWdhbnQlMjByb29tfGVufDB8fHx8MTYxOTkzNDkwOQ&ixlib=rb-1.2.1&q=80&w=400",
      text: "Angus/Abelsohn",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzAzM3wwfDF8c2VhcmNofDF8fGVsZWdhbnQlMjByb29tfGVufDB8fHx8MTYxOTkzNDkwOQ&ixlib=rb-1.2.1&q=80&w=400",
      text: "Deuchers",
    },
    {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      text: "Castor",
    },
  ];

  return (
    <div className="project-container">
      <h1>
        At Home <br /> with Nature
      </h1>

      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.text} />
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
