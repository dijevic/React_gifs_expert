import  {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGif'



// primer hook
// los hooks no son mas que funciones
export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    useEffect(() =>{
        getGifs(category).then(imgs=>{

            setstate({
                data:imgs,
              loading:false
            })
        }
           )
       
    },[category])



    return state
}
