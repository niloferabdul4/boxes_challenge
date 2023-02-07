
import React from "react";
import  ReactDOM  from "react-dom";


import data from './box_data';

import './styles.css';

export default function Box(){

    const [arr,setArr]=React.useState(data)

    const styles={
        backgroundColor: arr.length%2===0 ? "black" :"green"

   }
   
    const res=arr.map(
        n=>(<div className="container" style={styles} key={n.id}></div>))

        
    
    return(
        <>
          
           {res}
        
        </>
    )
}

ReactDOM.render(<Box />,document.getElementById('root'))




