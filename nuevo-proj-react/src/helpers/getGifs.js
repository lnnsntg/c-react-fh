
export const getGifs = async (category) => {


    const res = await fetch(url)

    const { data } = await res.json()

    const gifs = data.map((item) => ({
        title: item.title,
        id: item.id,
        url: item.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs

}
