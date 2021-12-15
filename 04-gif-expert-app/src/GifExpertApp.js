import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


function GifExpertApp() {
    const [categories, setCategories] = useState(["One"]);
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <br />
            <ol>{
                categories.map(item => {
                    return <GifGrid key={item} item={item} />;
                })
            }
            </ol>
        </div>
    );
}
export default GifExpertApp;
