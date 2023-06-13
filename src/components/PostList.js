import React, {Component} from "react";
import axios from "axios";

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.response = {"data:::": "manikandan"}
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=> {
            console.log("response:::", response)
        }).catch((error)=> {
            console.log("error:::", error)
        })
    }

    render() {
        return (
            <div>
                Hi manikandan.....
            </div>
        )
    }
}

export default PostList