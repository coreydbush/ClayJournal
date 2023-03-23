import React, { useState } from 'react';

function ZoomImage(props) {
    const [state, setState] = useState({
        backgroundImage: `url(${props.src})`,
        backgroundPosition: '0% 0%'
    })

    function handleMouseMove(e) {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setState({...state, backgroundPosition: `${x}% ${y}%`});
        console.log(state);
    }

  return (
    <div className="zoomImage" onMouseMove={handleMouseMove} style={state}>
      <img src={props.src} />
    </div>
  );
}

export default ZoomImage;
