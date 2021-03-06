import React, {Component} from 'react';

import './FullPost.css';
import axios from "../../axios";

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !this.state.loadedPost || this.state.loadedPost.id !== nextProps.id;
    }

    componentDidUpdate() {
        if (this.props.id) {
            axios.get("/posts" + this.props.id).then(res => {
                    this.setState({
                        loadedPost: res.data,
                    })
                }
            ).catch(error => {
                console.log(error);
            });
        }
    }

    deletePostHandler = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
            .then(res => console.log(res));
    }

    render() {
        let post = <p style={{textAlign: "center"}}> Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: "center"}}> Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;