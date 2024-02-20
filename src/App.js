import React from 'react';
import logo from './logo.svg';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

class App extends React.Component {
  state = {
    showBlogs: true,

    blogArr: [
      {
        id: 1,
        title: 'Blog Title 1',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0,
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0,
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0,
      }
    ]
  }

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr: updatedBlogList});

    // console.log(updatedBlogObj);
  }

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((preState, preProps) => {
      return {showBlogs: !preState.showBlogs}
    });

    console.log(this.showBlogs);
  }

  render() {
    console.log('Render Called');
    console.log(this.state);

    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {

      return (
        <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={()=> this.onLikeBtnClick(pos)} />
        // <div className="BlogCard" key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>
        // </div> 
      )
    })

    return(
      <div className={"App"}>
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {
          this.state.showBlogs ? blogCards : null
        }
      </div>
    );
  }

}

export default App;