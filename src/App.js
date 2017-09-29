import React, { Component } from 'react';
import logo from './logo.svg';
import {render} from 'react-dom'
import './App.css';
import { connect } from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';
import {getAllCommentsFromPost} from './api/index';

 
import { getAllCategory, getAllPosts, getAllComments, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from './actions/index'
import * as api from './api/index'
 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { MuiDataTable } from 'mui-data-table'
import { ReduxTable } from 'redux-data-table';
 
import ReactTable from 'react-table'
// import { TableContainer, Table } from 'react-custom-table';
import 'react-table/react-table.css'
//import {BSTable} from './BSTable'

import { Tabs, Tab } from 'react-bootstrap';
 
import {BootstrapTable, TableHeaderColumn, ButtonGroup} from 'react-bootstrap-table'

var identifier = require('identifier');
 
//--------Advanced Code-----------------
function onRowSelect(row, isSelected){

    this.setState({
      selectedRows: [...this.props.selectedRows, row.id]
    })
   return false
}


 
function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}


 
function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  api.editPost(row.id, row.title, row.body)
}


const cellEditProp= {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
}
 

function onAfterTableComplete() {
  console.log('Table render complete.');

}

 
function getid(){
  return (identifier(21))
 
}
 
export function getvote(){
  return (1)
}
 
function gettime(){
  return(Date.now())
}
 
function getstatus(){
  return(false)
}

var ztemp
 
function getcats(a){
  return(function go(){return a})
}
 
function getParentId(id){
  return(function go(){return id})
}

function onAfterDeleteRow(rowKeys) {
  console.log('onAfterDeleteRow');
  for (var i in rowKeys){
      console.log(rowKeys[i])
      api.deletePost(rowKeys[i])
  }
}


 function getrow(row){
      
      console.log('getrow',row)
      return row
    }


function onAfterInsertRow(row) {
  api.newPost(row.id, row.timestamp, row.title, row.body, row.author, row.category)
}


 
function inserRowProp() {
  return{rowkey:'123456'}
}
 
 
function nameValidator(value) {
  if (!value) {
    return 'Job Name is required!';
  } else if (value.length < 3) {
    return 'Job Name length must great 3 char';
  }
  return true;
}

function getFormattedDate(_date) {

    var date = new Date(_date)

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec;

    /*alert(str);*/
    console.log('newTime',str)
    return str;
}


//----------------------------------EXPANT TABLE -----------------------------------------------

//--------------------------------------STARTEX---------------------------------------------------/
function onAfterSaveCellEx(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  api.editComment(row.id, row.timestamp, row.body)
}

const cellEditPropEx= {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCellEx
}


function onSelectAllEx(isSelected) {
  console.log(`is select all: ${isSelected}`);
}


function onAfterTableCompleteEx() {
  console.log('Table render complete.');
}

function onAfterDeleteRowEx(rowKeys) {
  console.log('onAfterDeleteRow');
  console.log('deletet',rowKeys);
  for (var i in rowKeys){
      console.log(rowKeys[i])
      api.deleteComment(rowKeys[i])
  }
}

function onAfterInsertRowEx(row) {
  //id, timestamp, title, body, author, category)
  console.log('onAfterInsertRow');
  api.newComment(row.id, row.timestamp, row.body, row.author, row.parentId)
}
//---------------------------------------START----------------------------------------------------/
export class BSTable extends Component {
    constructor(props, context){
      super(props);
      this.state = {
        selectedRows: []
    }

  };

  
  onRowSelectEx = ({id}, isSelected) => {
    console.log(`selected: ${isSelected}`);
    this.setState({
      selectedRows: [...this.state.selectedRows, id]
    })
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentDidMount() {
    const { post: {id}, commente, createNewComment, upVoteComment, downVoteComment} = this.props;

  }

    createCustomButtonGroup = props => {
    return (
      <ButtonGroup className='my-custom-class' sizeClass='btn-group-md'>
        { props.showSelectedOnlyBtn }
        { props.exportCSVBtn }
        { props.insertBtn }
        { props.deleteBtn }
        <button type='button'
         className={ `btn btn-primary` }
          onClick={() => this.props.upVoteComment(this.state.selectedRows[0])}>
         upVote
        </button>
        <button type='button'
         className={ `btn btn-primary` }
         onClick={() => this.props.downVoteComment(this.state.selectedRows[0])}>
         downVote
        </button>


      </ButtonGroup>
    );


  }

  render() {

    const optionsEx = {
      paginationShowsTotal: true,
      sortName: 'timestamp',  // default sort column name
      sortOrder: 'desc',  // default sort order
      afterTableComplete: onAfterTableCompleteEx, // A hook for after table render complete.
      afterDeleteRow: onAfterDeleteRowEx,  // A hook for after droping rows.
      afterInsertRow: onAfterInsertRowEx,   // A hook for after insert rows
      btnGroup: this.createCustomButtonGroup,
      // btnGroup: this.createCustomButtonGroup,
      // expanding: this.expanding,    //<<<< should be this.state.expanding ?
      // expandRowBgColor: 'rgb(242,255,163)'
      all: this
    };
    
    const selectRowPropEx = {
      mode: 'checkbox',
      clickToSelect: true,
      clickToExpand: true,
      selected: [], // default select on table
      bgColor: 'rgb(238, 193, 213)',
      onSelect: this.onRowSelectEx,
      onSelectAll: onSelectAllEx,
      selected: this.state.selectedRows,
      all: this
    };
 
    if (this.props.data) {
      {this.forceUpdateHandler}

      return (

        <div className="container" key={1}>Comments
        <BootstrapTable 
          data={ this.props.data[0] }
          options={ optionsEx }
          selectRow={ selectRowPropEx }
          search 
          insertRow 
          deleteRow
          hover 
          cellEdit={ cellEditPropEx } 
          >
          <TableHeaderColumn dataField='id' autoValue={getid} isKey={ true } dataSort={true} hidden={true}>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='parentId' autoValue={getParentId(this.props.data[1])} dataSort={true} hidden={true}>ParentId</TableHeaderColumn>
          <TableHeaderColumn dataField='body' dataSort={true}>Body</TableHeaderColumn>
          <TableHeaderColumn dataField='author' dataSort={true}>Author</TableHeaderColumn>
          <TableHeaderColumn dataField='voteScore' autoValue={getvote} dataSort>Vote Score</TableHeaderColumn>
          <TableHeaderColumn dataField='timestamp' autoValue={gettime} dataSort={true}>Timestamp</TableHeaderColumn>
        </BootstrapTable>
        </div>)
    } else {
      return (<p>?</p>);
    }
  }
}

//---------------------------------------THE END------------------------------------------------/
// #export class App extends Component {


export class App extends Component {
  getSelectedRowKeys() {
    console.log(this)
  }

   constructor(props, context){
    super(props);
    this.state = {
      selectedRows: []
    }

  };


onRowSelect = ({id}, isSelected) => {

  console.log(`selected: ${isSelected}`);

    this.setState({
      selectedRows: [...this.props.selectedRows, id]
    })

}

  
  forceUpdateHandler(){
    this.forceUpdate();
    
  };

    state={commm:[]}

  onClickProductSelected(cell, row, enumObject, rowIndex){

  }
  cellButton(cell, row, enumObject, rowIndex) {
    return (this.props.upVote(row.id))

  }

  componentDidMount() {
    const {posts, post, getCommente, createNewComment} = this.props

      

    return {
    post2: posts.then((data)=> data.posts.map((a)=> {getCommente(a.id)}))
    }


    // var z=['8xf0y6ziyjabvozdd253nd', '6ni6ok3ym7mf1p33lnez']

}

  isExpandableRow(row) {
    return true
  }


  expandComponent = (row, props) => {

    getCommente(row.id)
    var resu=[]
    
   var result=api.getAllCommentsFromPost(row.id).then(function(d){
            return(d)
        })

   const zu=[]
   result.then((a)=>zu.push(a))
    if(row.expand){
    return (<BSTable post={row.id} upVoteComment={this.props.upVoteComment} downVoteComment={this.props.downVoteComment} data={ [row.expand.filter((a)=> a.parentId==row.id), row.id] } />);//[row.expand, row.id] } />);
    } else {
      return (<BSTable post={row.id} data={ [[], row.id] } />);
    }

  }


    createCustomButtonGroup = props => {

    return (
      <ButtonGroup className='my-custom-class' sizeClass='btn-group-md'>
        { props.showSelectedOnlyBtn }
        { props.exportCSVBtn }
        { props.insertBtn }
        { props.deleteBtn }
        <button type='button'
         className={ `btn btn-primary` }
          onClick={() => this.props.upVote(this.state.selectedRows[0])}>
         upVote
        </button>
        <button type='button'
         className={ `btn btn-primary` }
         onClick={() => this.props.downVote(this.state.selectedRows[0])}>
         downVote
        </button>

      </ButtonGroup>
    );
  }


  render() {

    const options = {
      all: this,
      paginationShowsTotal: true,
      sortName: 'title',  // default sort column name
      sortOrder: 'desc',  // default sort order
      afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
      afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
      afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
      // getrow: getrow,
      btnGroup: this.createCustomButtonGroup,
      //expanding: this.expanding,    //<<<< should be this.state.expanding ?
      expandRowBgColor: 'rgb(242,255,163)',
      expandBy: 'column',
      // selectRowProp: selectRowProp,
    };

    

  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true,
    selected: [], // default select on table
    bgColor: 'rgb(238, 193, 213)',
    // onSelect: onRowSelect,
    onSelectAll: onSelectAll, 
    onSelect: this.onRowSelect,
    selected: this.state.selectedRows
    // unselectable:this.state.selectedRows
    // all:this
  };

 
 
    const {categories, posts, defaul, comments, getCommente, createNewComment, upVote} = this.props

    const data2=defaul.react
    const data3=defaul


     
    return (
      <div key={Date.now()}>
      {Object.keys(data3).map((e,ind)=>{
        { 
          console.log(e, ind)
          ztemp=e
        }

      return(

      <div className="container" key={ind}><h1>{e}</h1>

      <BootstrapTable 
        data={data3[e]}
        // data={products} 
        //keyField='id'  
        options={ options }   
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        expandColumnOptions={ { expandColumnVisible: true, expandColumnBeforeSelectColumn: false } }
        selectRow={ selectRowProp }
        search 
        insertRow 
        deleteRow 
        hover 
        pagination ={true}
        cellEdit={ cellEditProp } 
        >
        <TableHeaderColumn dataField='id' autoValue={getid} dataSort isKey hidden={true}>Id</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort editable={ { type: 'textarea' , validator: nameValidator } } expandable={ false }>Title</TableHeaderColumn>
        <TableHeaderColumn dataField='body' dataSort editable={ { type: 'textarea' , validator: nameValidator } } expandable={ false }>Body</TableHeaderColumn>
        <TableHeaderColumn dataField='author' dataSort editable={ { type: 'textarea' , validator: nameValidator } } expandable={ false }>Author</TableHeaderColumn>
        <TableHeaderColumn dataField='voteScore' autoValue={getvote} dataSort expandable={ false }>Vote Score</TableHeaderColumn>
        <TableHeaderColumn dataField='timestamp' autoValue={gettime} dataSort expandable={ false }>Timestamp</TableHeaderColumn>
        <TableHeaderColumn dataField='deleted' autoValue={getstatus} dataSort hidden={true} expandable={ false }>Deleted</TableHeaderColumn>
        <TableHeaderColumn dataField='category' autoValue={getcats(e)} dataSort hidden={true} expandable={ false }>Category</TableHeaderColumn>
      </BootstrapTable><hr width="110%"/>

      </div>
      )
      })}
      </div>
      )
  }
}
export function mapDispatchToProps(dispatch) {
  console.log('dispatch',dispatch)

  return {
    posts: dispatch(getAllPosts()),
    categories: dispatch(getAllCategory()),

    getCommente: (id) => dispatch(getCommente(id)),
    createNewComment: (comments) => dispatch(createNewComment(comments)),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),

    upVoteComment: (id) => dispatch(upVoteComment(id)),
    downVoteComment: (id) => dispatch(downVoteComment(id)),
    
  }
}
 
export function mapStateToProps(state, ownProps, dispatch) {

  const {categories, posts, comments} = state
  var expands=[]

  if(posts.posts){

    posts[posts.posts.id]= [
                            posts.posts.id, 
                            posts.posts.timestamp,
                            posts.posts.title,
                            posts.posts.body,
                            posts.posts.author, 
                            posts.posts.voteScore, 
                            posts.posts.category,
                            posts.posts.deleted
                          ] 
  }


  var zu=[]
  var getpost=[]
  for(var p in posts){
    getpost.push({id: posts[p][0]})

  api.getAllCommentsFromPost(posts[p][0]).then((a)=> zu.push(a))
  }
  for(var z in comments){
    for(var y in comments[z]){
      expands.push({id:comments[z][y].id,
              parentId:comments[z][y].parentId,
              timestamp:getFormattedDate(comments[z][y].timestamp),
              body:comments[z][y].body,
              author:comments[z][y].author,
              voteScore:comments[z][y].voteScore,
              deleted:comments[z][y].deleted,
              parentDeleted:comments[z][y].parentDeleted,
    })
    }
  }
  var defa = {}
  for(var c in categories){
    defa[c]=[]
    for(var i in posts){
      for(var o in comments){
        if(comments[o][1]==i){
              expands.push({id:comments[o][0],
                  parentId:comments[o][1],
                  timestamp:getFormattedDate(comments[o][2]),
                  body:comments[o][3],
                  author:comments[o][4],
                  voteScore:comments[o][5],
                  deleted:comments[o][6],
                  parentDeleted:comments[o][7],
            })
        }
      // }
      }
     

      if(c==posts[i][6] && posts[i][7]==false){
        defa[c].push({
          id:posts[i][0],
          timestamp:getFormattedDate(posts[i][1]),
          title:posts[i][2],
          body:posts[i][3],
          author:posts[i][4],
          voteScore:posts[i][5],
          category:posts[i][6],
          deleted:posts[i][7],
          expand: expands
      })
    }


  }
  }

  var sortable=[]
  for(var p in posts){
    sortable.push([p, posts[p][0], posts[p][1], posts[p][2], posts[p][3]])
  }
  return {
    categories,
    post: getpost,
    posts: posts,
    comments: comments,
    defaul: defa,
    expand: expands,
    selection: 1,
    selectedRows: []
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))