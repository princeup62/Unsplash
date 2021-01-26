
import axios from 'axios';
import React,{useEffect, useState,useRef} from 'react'
import Image from './Image';

 function Images() {

  const [ImgSrc,setImageSrc]=useState([]);

  const [inputData,setInputData]=useState("");

  useEffect (()=>{
 
// const inputBox =document.getElementById('inputbox');
// inputBox.focus();
console.log(inputRef);

inputRef.current.focus();
axios.get('https://api.unsplash.com/photos/?client_id=iGcQJSuPPSJt4UBbnoPi5lE8op8FM88oUeEn8mdxGkM')
.then((res)=>setImageSrc(res.data))
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
     let virtualArray= ImgSrc.filter((element,mic)=>mic!=index);
    setImageSrc([...virtualArray]);
  }

  return (



  <>
    <section className="input-section-wrapper">

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
    </>
  )
}


export default Images;
