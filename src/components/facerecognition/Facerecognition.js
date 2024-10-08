import React from "react";
import './Facerecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className=" center ma">

            <div className="absolute mt4">
                <img className="o-90" alt= "" id="inputimage" src={imageUrl} width={'400px'} height={'auto'} />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}


export default FaceRecognition;