import React, { Fragment, useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

function GifGrid({ category }) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGif();
    }, []);

    async function getGif() {
        const url = "https://api.giphy.com/v1/gifs/search?api_key=F9XVGsO4DCJyBJjgVFJvkgOcVhz9MWVA&limit=10&q=gatitos";
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            };
        });
        console.log(gifs);
        setImages(gifs);
    }

    return (
        <Fragment>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img =>
                        (<GifGridItem key={img.id} {...img} />)
                    )
                }
            </div>
        </Fragment>
    );
}

export default GifGrid;