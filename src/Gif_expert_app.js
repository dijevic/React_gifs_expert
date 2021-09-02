import React , {useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
import { Footer } from './components/Footer';

export const GifExpertApp = ()=>{
    // no olvidar que al setear un estado , no modificarlo directamente, y setarlo en la parte del html a cambiar con el nombre del estado
    const [categories, setCategorie] = useState(['one punch'])

 

    return( 
        <>
        <h1 className="center">Gif expert APP</h1>
        <hr />
        <AddCategory setCategories={setCategorie}/>
        <ol>
            {/* no olvidar agregar los corchetes para usar js inside html */}
        {
        
        
            categories.map((categ) =><GifGrid key={categ} category={categ}/>)
        
        }
        </ol>
        <Footer/>
        </>
    )
}