
import { useState } from "react";
import React from "react";
import flag from "../../assets/flag.gif"
export function MouseMove ( ) {
const [style0bj, setStyle0bject] = useState ({position: 'fixed', top:'0px', left:'0px' });
function handleMouseMove (e){
        setStyle0bject ({position: 'fixed', top:`${e.clientY}px`, left:`${e.clientX}px`});
}
return(
<div onMouseMove={handleMouseMove}>
<div style={{height:'1000px'}}>
<p className="fs-2">Move mouse pointer to test</p>
</div>
<img src={flag} style={style0bj} width="50" height="50"/>
</div>


)
}


