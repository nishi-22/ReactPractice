import React,{Component} from "react";
import axios from 'axios';

class Api extends Component{

constructor(){
    super();
    this.state={
        posts:[]
    }
}
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        this.setState({
            posts: response.data
        })
    })
}
render(){
    return(
        <div className="api">
        {this.state.posts.map(post =>{
            return(
                <h2>{post.title}</h2>
            )
        } )}
        </div>
    
    );
}
}
export default Api;
