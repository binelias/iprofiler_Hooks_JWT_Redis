import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
            <div>
                <p className='f3'>
                    {'This is an image face detection app. Give it a go.'}
                </p>
                <p className='f3'>
                    {'Sample url: https://portal.clarifai.com/cms-assets/20180320221615/face-001.jpg'}
                </p>
                <div className="center"> 
                    <div className="form center pa4 b--white-20 shadow-2 br2">
                    <input 
                    type="text" 
                    className="f4 pa2 w-70 center b--white-20 shadow-2 br2" 
                    onChange={onInputChange}
                    />
                    <button 
                    className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue b--white-20 shadow-2 br2" 
                    onClick={onButtonSubmit}>Go</button>
                    </div>
                </div>
            </div>
    );
}

export default ImageLinkForm;