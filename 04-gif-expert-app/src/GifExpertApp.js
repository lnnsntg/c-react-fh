import React, { useState } from "react";
import AddCategory from "./AddCategory";
// import PropTypes from 'prop-types'

function GifExpertApp(props) {
    // const categories = ["One punch", "Samuray", "Dragon"];
    const [categories, setCategories] = useState(["One punch", "Samuray", "Dragon",]);
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {categories.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ol>
        </div>
    );
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp;
