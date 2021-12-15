import React, { Fragment } from 'react';


function GifGrid({ item }) {
    async function getGif() {
        const url = "https://api.giphy.com/v1/gifs/search?api_key=F9XVGsO4DCJyBJjgVFJvkgOcVhz9MWVA&limit=10&q=gatitos";
        const resp = await fetch(url);
        const {data} = await resp.json();
        console.log(data);
    }
    getGif()
    return (
        <Fragment>
            <h3>{item}</h3>
        </Fragment>
    );
}

export default GifGrid;