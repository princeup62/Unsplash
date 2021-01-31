
import axios from 'axios';
import React,{useEffect, useState,useRef} from 'react'
import Image from './Image';
import useFetchImage from './utils/hooks/useFetchImage';
import useScroll from './utils/hooks/useScroll';
import Spinner from '../assets/spinner.gif';

 function Images() {


  console.log(process.env.REACT_APP_UNSPLASH_KEY);
  // const [ImgSrc,setImageSrc]=useState([]);

 

  const [inputData,setInputData]=useState("");

  const [page, setPage] = useState(201);

  const [ImgSrc,setImageSrc,isLoading] =useFetchImage(page);

  const scrollPosition = useScroll();

  useEffect (()=>{
 
// const inputBox =document.getElementById('inputbox');
// inputBox.focus();
console.log(inputRef);

inputRef.current.focus();
// axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&page=1`)
// .then((res)=>setImageSrc(res.data))
  },[]);

  const inputRef = useRef(null);


  function handleInputChange (e)
  {
    setInputData(e.target.value);
  }

  function handleSubmit()
  {
    if(inputData.trim()!=="")
    {
      setImageSrc([inputData,...ImgSrc]);
      setInputData("");
    }
  
  }

  function handleDelete(index)
  {
     let virtualArray= ImgSrc.filter((element,mic)=>mic!==index);
    setImageSrc([...virtualArray]);
  }

  return (



  <>

  {
    isLoading?<div className="loading-outer-wrapper"><img src={Spinner}/></div>
    :
    <><section className="input-section-wrapper">
    
    
    <input type="text"
    ref={inputRef}
    placeholder="enter the URL of the images"
    value={inputData}
    onChange={handleInputChange}/>
   <button onClick={handleSubmit}>Submit</button>
   </section>
   <div className="all-content-cover">  

      <section className="Image-map-wrapper">
      {ImgSrc.map((data,index)=> <Image imageSource={data.urls.regular} 
      handleDelete={handleDelete} key={index} id={index} index={index} />)}
      </section>
    
    </div>
    <button onClick={()=>setPage(page+1)}>Load more...</button>
    </>
  }
      
    </>
  )
}


export default Images;
