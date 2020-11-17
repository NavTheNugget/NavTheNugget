import React, { FunctionComponent } from 'react';
import './modal.scss';

interface ModalProps { show: boolean; closeCallback: Function };
const Modal: FunctionComponent<ModalProps> = (props) => {
    const className: string = props.show ? 'modal-wrapper-show' : 'modal-wrapper-hidden';
    
    return (
        <div className={className}>
            <div className="modal">
                <div className="cross-button">
                    <svg width="20" height="20" onClick={() => { props.closeCallback(); }}>
                        <line x1="0" y1="0" x2="20" y2="20" strokeWidth="2px"></line>
                        <line x1="20" y1="0" x2="0" y2="20" strokeWidth="2px"></line>
                    </svg>
                </div>
                { props.children }
            </div>
        </div>
    );
};
export default Modal;