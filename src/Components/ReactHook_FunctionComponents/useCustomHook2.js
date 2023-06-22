import { useEffect } from 'react'

function useCustomHook2(count) {
   useEffect(()=>
   {
    document.title=`count--${count}`

   },[count])
 
}

export default useCustomHook2