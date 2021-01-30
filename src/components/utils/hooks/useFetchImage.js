
import axios from 'axios'
import React, { useState,useEffect } from 'react'


export default function useFetchImage(page) {


    const URL = process.env.REACT_APP_UNSPLASH_URL;

    const secret = process.env.REACT_APP_UNSPLASH_KEY;

    const [ImgSrc,setImageSrc]=useState([]);


   useEffect(() => {
       
    axios.get(`${URL}/?client_id=${secret}&page=${page}`)
    .then((res)=>setImageSrc([...ImgSrc,...res.data]))
   }, [page])
    



    return [ImgSrc,setImageSrc];

    
}
