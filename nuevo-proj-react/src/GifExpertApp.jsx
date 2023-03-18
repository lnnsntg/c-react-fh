import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import "./styles.css";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Robert Baratheon",
    "Rhaegar Targaryen",
  ]);

  const onAddCategory = () => {
    setCategories([...categories, "hola"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory />

      <button onClick={onAddCategory} style={{ marginTop: "20px" }}>AGREGAR</button>

      <ol>
        {categories.map((category) => {
          return <li key={Math.random(Date.now())}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
