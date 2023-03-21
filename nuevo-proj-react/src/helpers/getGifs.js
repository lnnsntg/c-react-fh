
export const getGifs = async (category) => {
   const url=`https://api.giphy.com/v1/gifs/search?api_key=F9XVGsO4DCJyBJjgVFJvkgOcVhz9MWVA&q=${category}&limit=5`

    const res = await fetch(url)

    const { data } = await res.json()

    const gifs = data.map((item) => ({
        title: item.title,
        id: item.id,
        url: item.images.downsized_medium.url
    }))
    // console.log(gifs)
    return gifs
}
 