export const request = async ({ path, method = "GET", body }) => {
    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;
    const options = {
        method,
        headers: {
            'X-RapidAPI-Key': '45915a3c4cmsh7902de0ac06729dp18f933jsn7c881618b426',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    if(body) options.body = body;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

export const formatCompactNum = (num) => {
    const formatter = Intl.NumberFormat("en", {
        notation: "compact",
    })
    return formatter.format(num)
}

export const replaceWithBr = (str = "") => str.replace(/\n/g, "<br />")