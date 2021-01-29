import { useState,useEffect } from "react";


const useFetch = (url)=>{

 const [data, setdata] = useState(null);
 const [isLoading, setisLoading] = useState(true)
 const [error, seterror] = useState(null)


 useEffect(() => {
  const abortCont = new AbortController();
// abortcontroller可停止fetch這個動作
  fetch(url,{ signal: abortCont.signal })
  .then(res=>{
    if(!res.ok){
      throw Error('could gget fetch the data from that resource');
    }
    return res.json()
  })
  .then((data)=>{
    setdata(data)
    seterror(null)
    setisLoading(false)
  })
  .catch(err=>{
    if(err.name ==="AbortError"){
      console.log('fetch aborted');
    }else{
      seterror(err.message);
    setisLoading(false)
    }
    
  })
  return ()=>{
    abortCont.abort()
  }
}, [url]);
  
return { data,isLoading,error}

}

export default useFetch;