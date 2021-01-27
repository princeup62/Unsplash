
import axios from 'axios'
import React, { useState,useEffect } from 'react'


export default function useFetchImage() {

    const [ImgSrc,setImageSrc]=useState([]);


   useEffect(() => {
       
    axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&page=1`)
    .then((res)=>setImageSrc(res.data))
   }, [])
    



    return [ImgSrc,setImageSrc];

    
}
