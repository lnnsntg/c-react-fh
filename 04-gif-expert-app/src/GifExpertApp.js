import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



function GifExpertApp() {
    const [categories, setCategories] = useState(["One"]);
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <br />
            <ol>{
                categories.map(item => {
                    return <GifGrid key={item} item={item} />;
                })
            }
            </ol>
        </Fragment>
    );
}
export default GifExpertApp;
