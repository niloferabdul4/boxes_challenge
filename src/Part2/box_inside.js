import React from "react";

export default function Boxinside({on}){
  const [status,setStatus]=React.useState(on);     // local state ////

    const styles={
        backgroundColor: status===true ? "red"  :"transparent"
    }
   

    function handleClick(){
        setStatus(!status)

    }
    return(
        <div className ="container"  style={styles} onClick={handleClick}>
           
        </div>
    )
}
