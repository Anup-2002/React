import axios from "axios";
import { useState,useEffect } from "react";
import React from "react";
import './mouse-demo.css';
export function MouseDemo(){
const [mobileName, setMobileName] = useState([{image:null}]);
const [previewImage, setPreviewImage] = useState('mobile-1.png');

function loadMobile(){
    axios.get('mobile.json')
    .then((response)=>{
        setMobileName(response.data);
    })
}
function handleMouseOver(e){
    setPreviewImage(e.target.src);
}
useEffect(()=>{
    loadMobile();
},[]);

return(
        <div className="container-fluid p-3">
            <h2 className="text-center">Mouse Demo Component</h2>
            <div className="row mt-4">
                <div className=" col-2 ">
                    {
                        mobileName.map(mobile=>
                        <div key={mobile.image} className="mobile-container my-4" style={{width:'100px'}}>
                        <img src={mobile.image} onMouseOver={handleMouseOver} width="100" height="100" />
                        </div>

                        )

                        }
                </div>
                <div className="col-10 image-preview text-center">
                    <img src={previewImage} width="400" height="400"/>
                </div>
            </div>
        </div>
)
}