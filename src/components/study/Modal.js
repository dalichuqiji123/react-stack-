import React from 'react'
export default function Modal(props) {
    return (
        <div>
            <div className='composition' style={{display:props.show?'block':'none'}}>
                <div className='tip'>
                    {props.tip}
                    <span className='cuo' onClick={props.onClose}>X</span>
                </div>
                <div className='main'>
                    {props.main}
                </div>
                <div className='btn'>
                    {props.btn}
                </div>
            </div>
        </div>
    )
}