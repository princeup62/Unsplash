
import React,{useEffect, useState,useRef} from 'react'
import Image from './Image';

 function Images() {

  const [ImgSrc,setImageSrc]=useState([
   "https://images.unsplash.com/photo-1536662788222-6927ce05daea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1552993906-7131796c7310?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1610219789009-7bfbca2d8af7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1552327803-2c89bc3e1483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1494245829061-728222e74963?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=307&q=80",
  "https://images.unsplash.com/photo-1560272197-6eed4801462f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1565286364541-5f0326e869ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1600250410329-f8ea0894b24f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1516373829531-29d21ac7f9d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80"
  ]);
  const [inputData,setInputData]=useState("");

  useEffect (()=>{
 
// const inputBox =document.getElementById('inputbox');
// inputBox.focus();
console.log(inputRef);

inputRef.current.focus();

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
      {ImgSrc.map((data,index)=> <Image imageSource={data} 
      handleDelete={handleDelete} key={index} id={index} index={index} />)}
      </section>
      
    </div>
    </>
  )
}


export default Images;
