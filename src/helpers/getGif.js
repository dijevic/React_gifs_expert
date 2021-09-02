export const getGifs = async(category)=>{

    try{
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category )}&api_key=UIu9Y60JBJMJggRmYEbpqjWDiVcXoTTv&limit=10`

        const resp = await fetch(url);
        const {data , meta} = await resp.json()


        if(meta.status === 200){
    
           const gifs = data.map(({images,id,title})=>{
                return {
                    id ,
                    img: images.downsized_medium.url ,
                    title 
                    
                }
            })
           return gifs

          


        }
    }catch(e){
        console.error(e)
    }
}