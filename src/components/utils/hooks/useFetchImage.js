import axios from 'axios'
import React, { useState,useEffect } from 'react'

export default function useFetchImage(page) {


    const URL = process.env.REACT_APP_UNSPLASH_URL;

    const secret = process.env.REACT_APP_UNSPLASH_KEY;

    const [ImgSrc,setImageSrc]=useState([]);
    const [isloading, setIsLoading] = useState(false)


   useEffect(() => {

    setIsLoading(true) 
    axios.get(`${URL}/?client_id=${secret}&page=${page}`)
    .then((res)=>{
        setImageSrc([...ImgSrc,...res.data]);
        setIsLoading(false)
    }).catch(e=>{console.log(`------------------error----------${e}`);
    setIsLoading(false)
})
    
   }, [page])

    return [ImgSrc,setImageSrc,isloading]; 
}
