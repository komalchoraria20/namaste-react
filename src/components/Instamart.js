import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  sectionName,
}) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <div>
          <button
            onClick={() => setIsVisible("")}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      ) : (
        <button
          onClick={() => setIsVisible(sectionName)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        sectionName="about"
        isVisible={visibleSection === "about"}
        setIsVisible={setIsVisibleSection}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        sectionName="team"
        isVisible={visibleSection === "team"}
        setIsVisible={setIsVisibleSection}
      />

      <Section
        title={"Careers"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        sectionName="career"
        isVisible={visibleSection === "career"}
        setIsVisible={setIsVisibleSection}
      />
    </div>
  );
};
export default Instamart;
