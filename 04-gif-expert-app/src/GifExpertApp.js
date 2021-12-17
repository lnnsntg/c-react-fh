import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
    const [categories, setCategories] = useState(["One"]);
    return (
        <Fragment>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories} />
            <br />
            {
                categories.map(category => {
                    return <GifGrid key={category} category={category} />;
                })
            }
        </Fragment>
    );
}
export default GifExpertApp;;;