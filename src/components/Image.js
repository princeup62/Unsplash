import React from 'react'

function Image() {
    return (
       <>
       <div className="image-section-outer-wrapper" onMouseEnter={(e)=>setIsHowering(index) } onMouseLeave={(e)=>setIsHowering(-1)}>

<CancelIcon className={`float-cut-btn ${isHowering==index?null:'hidden-cut'}`}  onClick={(e)=>
 {
 let virtualArray=  ImgSrc.filter((element,mic)=>mic!=e.target.id);
 setImageSrc([...virtualArray])
 }
 } />


 <img src={data} key={index} id={index} 
  />

  </div>


       </>
    )
}

export default Image
