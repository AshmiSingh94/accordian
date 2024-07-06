import { useEffect, useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const utilityColor = (currentLength) => {
    return Math.floor(Math.random() * currentLength);
  };
  const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += utilityColor([hex.length]);
    }
    setColor(hexColor);
    console.log(hexColor);
  };
  const handleCreateRGBColor = () => {
    const r = utilityColor(256);
    const g = utilityColor(256);
    const b = utilityColor(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    console.log(rgbColor);
  };
  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateHexColor();
    } else {
      handleCreateRGBColor();
    }
  }, [typeOfColor]);
  return (
    <div style={{ backgroundColor: color, display: "flex", flexDirection: "column", height: "100vh", width: "100vw" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button
          onClick={() => {
            setTypeOfColor("hex");
          }}
        >
          Create Hex Color
        </button>
        <button
          onClick={() => {
            setTypeOfColor("rgb");
          }}
        >
          Create RGB Color
        </button>
        <button onClick={typeOfColor === "hex" ? handleCreateHexColor : handleCreateRGBColor}>
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop:"20%",
          color:"#ffffff",
          fontWeight:"600"
        }}
      >
        <div>{typeOfColor === "hex" ? "Hex Color" : "RGB Color"}</div>
        <div>{color}</div>
      </div>
    </div>
  );
};

