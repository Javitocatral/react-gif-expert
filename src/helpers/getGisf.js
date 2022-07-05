


export const getGifs =async (cadacategoria) => {

    const url=`https://api.giphy.com/v1/gifs/search?api_key=7jXG3OdynDNQMn90crxYO7TQN6685YYW&q=${cadacategoria}&limit=10`
    const resp = await fetch( url);
    const{ data } = await resp.json();
    const gifts = data.map( img =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    console.log(gifts)
    return gifts; 
}
