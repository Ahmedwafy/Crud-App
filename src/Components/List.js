import React , {Component} from "react";
import "./List.css";


class List extends Component {       

    state = {
        isEdit : false,
    }

    // render_Course
    render_Course = () => {
        return (
            <li>
                <span> {this.props.Data.name} </span>
                <button onClick = { () => this.toggle_State()} >Edit Course</button>
                <button onClick = {this.props.Delete_Course} >Delete</button>
            </li>
        )
    }

    // Now i need to make a Condition
    // IF Press on - Edit Course button - the Edit_Course function works
    // IF NOT press on - Edit Course button - the Edit_Course function WILL NOT works 

    // 1 - Make State => If isEdit true .. the Edit_Course function works
    // -------------- => If isEdit false .. the render_Course function works

    // toggle_State
    toggle_State = () => {
        let {isEdit} = this.state;
        this.setState ({
            isEdit : !isEdit // If isEdit = false .. Make it true & Vice Versa
        })
    }

    Update_Course_Step2 = (e) => {
        e.preventDefault();
        this.props.Update_Course(this.props.index, this.input.value);
        this.toggle_State();
    }

    // Edit_Course  .. Works when Click on Edit button
    Edit_Course = () => {
        return (
            <form onSubmit={this.Update_Course_Step2}>
                <input type="text" ref={(value)=>{this.input = value}} defaultValue={this.props.Data.name}/>
                <button>Update Course</button>
            </form>
        );
    };

    render () {
        let {isEdit} = this.state;  
        return (
            <div>
                {isEdit ? this.Edit_Course() : this.render_Course()}
            </div>
            
        )
    }


}
    
export default List;