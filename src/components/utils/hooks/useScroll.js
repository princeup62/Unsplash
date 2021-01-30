import { useEffect, useState } from 'react'

export default function useScroll() {
    const [scrollPosition, setScrollPosition] = useState(null);

function handleScroll()
{
    // setScrollPosition(window.sc);
    setScrollPosition(window.scrollY);
    console.log(scrollPosition);
    
}


    useEffect(() => {
      document.addEventListener('scroll',handleScroll) ;

      return  ()=> document.removeEventListener('scroll',handleScroll);
    }, []);


    return scrollPosition;

}
