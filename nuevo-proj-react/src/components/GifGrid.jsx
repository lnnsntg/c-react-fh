import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import GifGridItem from './GifGridItem'

import { getGifs } from '../helpers/getGifs'


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h4>{category}</h4>
            <div className='card-grid'>
                {images.map((image) => (
                    <GifGridItem key={nanoid()} {...image} />
                ))}
            </div>

        </>
    )
}
