import { Component } from "react";
import SinglePost from "../SinglePost.js/SinglePost";

class Posts extends Component {
    state = {
        dataContent: [
            { title: 'Prabhu', description: 'Software Engineer' },
            { title: 'Sanmuga', description: 'Civil Engineer' },
        ],
        title: 'Canada',
        isToggle: false
    };
    updateTitleHandler = (e) => {
        e.preventDefault();
        console.log('title');
        this.setState({
            title: 'USA'
        })
    }

    toggleHeaderHandler = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    returnCont() {
        if (this.state.isToggle) {
            return (
                <div>
                    <div>{this.state.title}</div>
                    <button onClick={this.updateTitleHandler}>Click Me</button>
                    <SinglePost title={this.state.dataContent[0].title} description={this.state.dataContent[0].description} />
                    <SinglePost title={this.state.dataContent[1].title} description={this.state.dataContent[1].description} />
                </div>
            )
        }
    }


    render() {
        // setTimeout(() => {
        //     console.log('modifying');
        //     const dataContent = [...this.state.dataContent]
        //     dataContent[0].title = 'Test1';
        //     dataContent[0].description = 'Test2';
        //     this.setState({ dataContent });
        // }, 3000);

        let showContent = null;
        if (this.state.isToggle) {
            showContent = (
                <div>

                </div>
            );
        }
        return <div>
            <button onClick={this.toggleHeaderHandler}>{this.state.isToggle ? 'Hide' : 'Show'}</button>
            {/* {showContent} */}
            {this.state.isToggle && (
                <div>
                    <div>{this.state.title}</div>
                    <button onClick={this.updateTitleHandler}>Click Me</button>
                    <SinglePost title={this.state.dataContent[0].title} description={this.state.dataContent[0].description} />
                    <SinglePost title={this.state.dataContent[1].title} description={this.state.dataContent[1].description} />
                </div>
            )}
             {/* {this.returnCont()} */}
        </div>
    }
}

export default Posts;