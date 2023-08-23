import { Component } from "react";

class SinglePost extends Component {
    render() {

        return <div className='m-4 p-3 border border-gray-400 shadow'>
            <div className="text-2xl font-bold">{this.props.title}</div>
            <div>{this.props.description}</div>
        </div>
        // return <h1 className="text-3xl font-bold underline">
        //     Hello world!
        // </h1>
    }
}

export default SinglePost;