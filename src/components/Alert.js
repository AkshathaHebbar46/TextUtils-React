import React from 'react'

export default function Alert(props) {
    const capitilize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    } //function to capitalize the first letter of the alert message
  return (
    props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitilize(props.alert.type)}</strong>: {props.alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>  
    
  )
}
