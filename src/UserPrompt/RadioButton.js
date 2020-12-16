import React from 'react';

function RadioButton(props) {
    return (
        <label htmlFor={props.btn.forValue}>
            <input type={props.btn.type} id={props.btn.id} name={props.btn.id} value={props.btn.value} />
            {props.btn.textToPrint}
        </label>
    )
}

export default RadioButton