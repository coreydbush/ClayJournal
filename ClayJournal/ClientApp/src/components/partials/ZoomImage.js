import React, { useState, useEffect } from 'react';
import PlaceholderPotImage from '../../Images/pottery-bowls-1.png';

function ZoomImage(props) {
    const [image, setImage] = useState(props.potImage);
    const [state, setState] = useState({
        backgroundImage: `url(${PlaceholderPotImage})`,
        backgroundPosition: '0% 0%'
    });

    function handleMouseMove(e) {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setState({...state, backgroundPosition: `${x}% ${y}%`});
    }

  return (
    <div className="zoomImage" onMouseMove={handleMouseMove} style={state}>
      <img src={props.potImage} />
    </div>
  );
}

export default ZoomImage;
