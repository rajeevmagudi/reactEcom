
import React from 'react';


function Button(props){
   return (<button onClick={props.eventListner} className="btn btn-primary">{props.children} </button>);
}

export default Button;