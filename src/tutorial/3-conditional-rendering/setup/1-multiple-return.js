import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  
  const[isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
setIsLoading(false)
  }, [])
  if(isLoading){
    return <h2>Error...</h2>
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
