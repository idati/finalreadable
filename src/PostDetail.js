import React, { Component } from 'react';
import * as App from './App'
import {Link} from 'react-router-dom';


class PostDetail extends Component { 
    constructor(){
      super();
      this.state = {}

  };
 

    render(){
    
        return(
              <div key={Date.now()}>
              {Object.keys(this.props.pro.post).map((e,ind)=>{ 
                if(this.props.pro.location.pathname.substr(this.props.pro.location.pathname.indexOf("/",2)+1)===this.props.pro.post[e].id){
                return(
                <div key={Date.now()+4}>
                  <div key={Date.now()+ind+5}><h3>Post:</h3></div>
                  <div className="absolute"><Link to='/' >back</Link></div>
                  <div className="post-title" key={Date.now()+ind}>{'Title: '+this.props.pro.post[e].title}</div>
                  <div className="post-author" key={Date.now()+ind+1}>{'Author: '+this.props.pro.post[e].author}</div>
                  <div className="post-time" key={Date.now()+ind+2}>{'TimeStamp: '+App.getFormattedDate(this.props.pro.post[e].timestamp)}</div>
                  <div className="post-time" key={Date.now()+ind+6}>{'VoteScore: '+this.props.pro.post[e].voteScore}</div>  
                  <div className="post-body" key={Date.now()+ind+3}>{'Body: '+this.props.pro.post[e].body}</div>  
                 </div>
                )
              } else {
                return(
                false)
              }
              })}
                {Object.keys(this.props.pro.comments).map((e,ind)=>{ 
                var z=[]
                for(var u=0; u<this.props.pro.comments[e].length;u++){
                  if(e===this.props.pro.location.pathname.substr(this.props.pro.location.pathname.indexOf("/",2)+1)){
                    z.push(
                      <div key={Date.now()+u}>
                      <h3>Comment {u+1}:</h3>
                      <div className="post-title" key={Date.now()+u+1}>{"Body: "+this.props.pro.comments[e][u].body+" Author: "+this.props.pro.comments[e][u].author+" TimeStamp: "+App.getFormattedDate(this.props.pro.comments[e][u].timestamp)+" VoteScore: "+this.props.pro.comments[e][u].voteScore}</div>
                      </div>)

                  }
                }
                    if(z.length > 0){
                      return(
                        <div className="container" key={Date.now()+2}><h1>{z}</h1>
                        </div>
                      )
                    } else {
                      return(false)
                    }
              })}
              </div>
            )

    }

    getPostRoute(){
        const {match} = this.props
        if (match && match.params && match.params.category ) {
            return match.params.category;
        }
        return null;
    }

}

export default PostDetail