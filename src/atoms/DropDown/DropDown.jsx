import React from 'react'

const DropDown = () => {

    return (
    <div className= "drop-down-list">
        
<label htmlFor={props.name}>{props.title}</label>

    <select
        id= {props.name}
        name = {props.name}
        value = {props.value}
        onChange={props.handleChange}
        className="drop-down-control">
           <option value="" disabled>{props.placeholder}</option>
		      {props.options.map(option => {
		        return (
		          <option
		            key={option}
		            value={option}
		            label={option}>{option}</option>
		        );
		      })}
    </select>
    </div>
    )
}

export default DropDown;