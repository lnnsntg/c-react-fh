import { nanoid } from "nanoid"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {
    getGifs(category)

    return (
        <>
            <h4>{category}</h4>
        </>
    )
}
