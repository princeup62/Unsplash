

import React,{useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

 function Image({imageSource,handleDelete,index}) {

let [isHovering,setIsHovering]  =useState(-1)

    return (
        <div className="image-outer-cover"  onMouseEnter={()=>setIsHovering(index)}
         onMouseLeave={()=>setIsHovering(-1)} >

        <img src={imageSource} alt=""/>
         <CancelIcon className={`cancel-float-btn ${isHovering===index?null:'hide-close-btn'} `} 
         onClick={()=>handleDelete(index)}/>
        </div>
    )
}

export default Image;
