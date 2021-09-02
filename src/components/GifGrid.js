import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    // custom hook
    const {loading,data} = useFetchGifs(category)

    return (
        <>
          <h3>{category}</h3> 
             {loading && <p className="center">loading...</p>}
          <div className="card-grid">
              {
                  data.map(img=>{
                     return <GifGridItem
                      key={img.id}
                      {...img}

                     />
                  })
              }
          </div>
        </>
    )
}
