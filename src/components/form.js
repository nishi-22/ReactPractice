import React from "react";

class Form extends React.Component {

    constructor(){
        super();
        this.state={
            name: 'nihsi'
        }
    }
  handleInputChange=(e)=> {
    this.setState({
        [e.target.name]:e.target.value 
    })
  }
  handleOnSubmit=(e)=>{
     console.log(this.state);
  }
  render() {
    return (
      <div className="myform">
        <form>
          <label htmlFor="name">
            UserName:
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleInputChange}
            />
          </label>
          <button type='button' onClick={this.handleOnSubmit}>Submit</button>
        </form>
    {this.state.name}
      </div>
    );
  }
}
export default Form;



/* constructor(){
    super();
    this.state={
      items:[
        {id:1, name: 'Nishi'},
        {id:2,name:'hardik'},
        {id:3,name:'Smit'}
      ]
    }
  }
  componentWillMount() {
    console.log('Component will mount!')
 }
componentDidMount() {
    console.log('Component did mount!')
    this.getList();
 }
getList=()=>{
  this.setState({
    items: this.state.items.push({id:4,name:'Anil'})
  })

}

  render(){
    return (
      <div className="App">
        <h1>component life</h1>
       {/*  < DisplayItems items={this.state.items}/>
        <Form/>  */
         
      /* </div>
    );
  } */ 