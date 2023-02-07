import React from "react";
import  ReactDOM from "react-dom";

import './styles.css'

import './box_inside'
import Boxinside from "./box_inside";


export default function Box2(){

    const [arr,setArr]=React.useState([{id:1,on:true},
                                        {id:2,on:false},
                                        {id:3,on:false},
                                        {id:4,on:true},
                                        {id:5,on:false},
                                        {id:6,on:true}
                                    ])
    

    
 
   
    const res = arr.map(n=>{return <Boxinside key={n.id}
                                              on={n.on}
                                                 
                                                    
                                                    />})


    
                                                       

    return(
        <div>
           {res}
        </div>
    )
}

ReactDOM.render(<Box2 />, document.getElementById('root'))


