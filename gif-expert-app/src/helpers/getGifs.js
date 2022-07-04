export const getGifs = async (category) => {//cambiar q= ${ category }
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Au9GbD9D58c1xLCmhPHDnHrXmmJ5tQUq&q=${category}&limit=10`
    const resp = await fetch(url);
    //restructuro la data
    const { data } = await resp.json();
    //extraigo la ifo que necesito
    //retorno un nuevo objeto con las propiedades que me interesan
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

