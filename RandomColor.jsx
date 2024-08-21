import React, { useState } from "react";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    //${} -> for inserting variable,function calls inside string
    // `` are used for inserting expressions (i.e, ${} ) inside strings
  }

  return (
    <div
      style={{ background: color }}
      className="w-screen h-screen text-center pt-1"
    >
      <button
        onClick={
          type == "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        className="bg-red-700 hover:bg-red-600 text-white px-3 py-2 mx-1 rounded"
      >
        Generate random color
      </button>
      <button
        onClick={() => setType("hex")}
        className="bg-red-700 hover:bg-red-600 text-white px-3 py-2 mx-1 rounded"
      >
        Generate Hex Color
      </button>
      <button
        onClick={() => setType("rgb")}
        className="bg-red-700 hover:bg-red-600 text-white px-3 py-2 mx-1 rounded"
      >
        Generate rgb color
      </button>
      <div className="flex flex-col gap-2 justify-center  h-5/6  text-white text-6xl ">
        <h3 className="text-4xl">
          {type == "hex" ? "Hex Color" : "Rgb Color"}
        </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
