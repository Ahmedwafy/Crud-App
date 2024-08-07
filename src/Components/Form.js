import React from "react";


// write props to recieve .. props Update_Value .. from App.js
const Form = (props) => {
    return (
        <form onSubmit={props.Add_Course}>
            <input type="text" onChange={props.Update_Value} value={props.new_current}/>
            <button type="submit">Add Course</button>
        </form>
        
    )
}

export default Form;

