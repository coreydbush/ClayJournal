import React from 'react';
import ReactDOM from 'react-dom';
import TallLogo from '../../Images/clayjournal-logo-short.svg';

function Modal(props) {
    
    

    if (props.isShowingLogOut) {
    return (
        <div className="modal-wrapper">
        <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modalComp">
                    <div className="modal-header">
                        <img src={TallLogo}/>
                    </div>
                    <div>
                        Are you sure you want to logout?
                    </div>
                    <div className="modalButtons">
                        <button className="button">Confirm</button><button className="button" data-dismiss="modal" aria-label="Close" onClick={props.toggleLogOut}><span aria-hidden="true">Cancel</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
    } else {
        return ('');
    }
}

export default Modal;