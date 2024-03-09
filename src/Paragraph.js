import React, { useState } from "react";
import para from "./ParaData";

const Paragraph = () => {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);

  function generateParagraphs(e) {
    e.preventDefault();

    if (isNaN(count) || count <= 0) {
      alert("Bhai ek to lik de generate ke liye");
      return;
    }

    let totalCharacters = 0;
    const generatedParagraphs = [];
    const limit = Math.min(count, 15);

    for (let i = 0; i < limit; i++) {
      const currentParagraph = para[i % para.length];
      generatedParagraphs.push(currentParagraph);
      totalCharacters += currentParagraph.length;
    }

    setCount(limit);
    setParagraph(generatedParagraphs);

    alert(
      `Total Generated Paragraphs: ${limit}\nTotal Characters in Generated Paragraphs: ${totalCharacters}`
    );
  }
  return (
    <div className="flex flex-col mt-8 gap-4 justify-center items-center">
      <h1 className="text-gray-500 text-3xl uppercase underline">
        Paragraph Generator!!!
      </h1>

      <form className="mt-8">
        <label for="value" className="uppercase">
          Paragraph:
        </label>
        <input
          type="number"
          min={1}
          max={15}
          placeholder="1-15"
          className="mx-4 border rounded-xl"
          name="value"
          id="value"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="uppercase rounded-xl text-white bg-green-500 py-2 px-4 hover:bg-green-950"
          onClick={generateParagraphs}
        >
          Generate
        </button>
      </form>

      <div className="flex justify-center items-center  flex-col mb-8">
        {paragraph.map((p, index) => {
          return (
            <p className="text-blue-700 mt-4 w-2/5" key={index}>
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Paragraph;
