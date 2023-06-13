import axios from "axios";
import React, { Component } from "react";

export class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = ((data)=> {
        this.setState({[data.target.name]: data.target.value})
    })

    SubmitHandler = ((data)=> {
        data.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then((response)=> {
            console.log("response:::", response)
        }).catch((error)=> {
            console.log("Error::::", error)
        })
    })

    render() {
        const { userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <div>
                        <input type="text" name= "userId" value={userId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name= "title" value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name= "body" value={body} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}