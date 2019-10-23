import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import './Blog.css';
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "../../axios";

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postClickedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    componentDidMount() {
        axios.get('/posts')
            .then((res) => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            })
    }

    render() {

        let posts = <p>Error fetching posts</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => {
                    this.postClickedHandler(post.id)
                }}/>
            });
        }

        return (

            <div>
                <section
                    className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        )
            ;
    }
}

export default Blog;