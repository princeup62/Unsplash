import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';




 

function Images() {


const [urlData,setUrlData]=useState("");
const[isHowering,setIsHowering]=useState(-1);
const [ImgSrc,setImageSrc]=useState([ "https://images.unsplash.com/photo-1536662788222-6927ce05daea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
"https://images.unsplash.com/photo-1552993906-7131796c7310?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
"https://images.unsplash.com/photo-1610219789009-7bfbca2d8af7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1552327803-2c89bc3e1483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
"https://images.unsplash.com/photo-1494245829061-728222e74963?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=307&q=80",
"https://images.unsplash.com/photo-1560272197-6eed4801462f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
"https://images.unsplash.com/photo-1565286364541-5f0326e869ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
"https://images.unsplash.com/photo-1600250410329-f8ea0894b24f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
"https://images.unsplash.com/photo-1516373829531-29d21ac7f9d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80"
])

  const  handleInputChange=(e)=>
  {
    setUrlData(e.target.value);
    console.log(e.target.value);
   
  }

  const handleUrlBtn=()=>
  {
      if(urlData.trim() !=="")
      {
        setImageSrc([...ImgSrc,urlData]);
        setUrlData("");
      }
      
  }


    return (

        <>
       
        <div className="input-wrapper">
        <input type="text" placeholder="Enter the URL of Image" className="input-URL" value={urlData} onChange={handleInputChange} />
        <button  className={`input-btn  ${urlData==""?'disabled-opacity':null}`} disabled={urlData==""} onClick={handleUrlBtn}>Submit</button>

        </div>
        
        <div className="images-row-wrapper">
            {ImgSrc.map((data,index)=>
            <div className="image-section-outer-wrapper" onMouseEnter={(e)=>setIsHowering(index) } onMouseLeave={(e)=>setIsHowering(-1)}>

           <CancelIcon className={`float-cut-btn ${isHowering==index?null:'hidden-cut'}`}  onClick={(e)=>
            {
            let virtualArray=  ImgSrc.filter((element,mic)=>mic!=e.target.id);
            setImageSrc([...virtualArray])
            }
            } />
           

            <img src={data} key={index} id={index} 
             />

             </div>)}
        </div>

        </>
    )
}

export default Images
