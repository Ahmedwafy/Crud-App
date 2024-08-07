import React , {Component} from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import "./index.css";

class App extends Component {

  state = {
    Details : [
      {name : "Html"},
      {name : "Css"},
      {name : "Java Script"},
      {name : "C#"},
      {name : "php"},
    ] ,
    current : ''
  }
  

// Update_Value .. Catch the new value wrote in input field & Add it in current
  Update_Value = (Ele) => {
    this.setState ({
      current : Ele.target.value
    })
    // (Ele.target.value)

  }

  
// Add_Course ..  add to the list
Add_Course = (e) => {
  e.preventDefault();
  
    let {current} = this.state;  
    const input_length = current.length;

    if (input_length > 0) {
      let current = this.state.current;
      let ALL_Details = this.state.Details;
      ALL_Details.push({name : current})
      this.setState ({
        Details : ALL_Details,
        current : ''
      })
    } else { }
  };

  // Delete_Course onClick from List
  Delete_Course = (index) => {
    let Courses = this.state.Details;
    Courses.splice(index , 1)
    this.setState ({
      Details : Courses
    })
  }


  // Update_Course ... Works onClick [ Update Course Button ] 
  Update_Course = (index,value) => {
    let Courses = this.state.Details;
    let Course = Courses[index];
    Course['name'] = value;
    this.setState ({
      Details : Courses
    })
  }


  render () {

    const {Details} = this.state; 
    let Details_List;
    if (Details.length > 0) {
    Details_List = Details.map( (Element, index) => {
      return <List Data={Element} key={index}  index={index} Delete_Course={this.Delete_Course} Update_Course={this.Update_Course}/>
    }) } else { Details_List = <p>No Courses To Show</p> }

    return (
      <div className="App">
        <h1>Add Course</h1>
        <Form Update_Value={this.Update_Value} Add_Course={this.Add_Course} new_current={this.state.current}/>
        <ul> {Details_List} </ul>
      </div>
    )
  }
}
export default App;

