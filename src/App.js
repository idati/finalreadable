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
  console.log('+#+#+#',row.id, this);
  // this.all.props.selection=row.id
  console.log(`selected: ${isSelected}`);

   console.log('upupupup',this.state)
    this.setState({
      selectedRows: [...this.props.selectedRows, row.id]
    })
    // this.props.selectedRows={selectedRows: row.id}
   return false
}

// function onRowSelectEx(row, isSelected) {
//   console.log(row.id);
//   console.log(`selected: ${isSelected}`);
// }
 
function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

// function onSelectAllEx(isSelected) {
//   console.log(`is select all: ${isSelected}`);
// }
 
 // editable (id, title, body)
function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  api.editPost(row.id, row.title, row.body)
}

// function onAfterSaveCellEx(row, cellName, cellValue) {
//   console.log(`Save cell ${cellName} with value ${cellValue}`);
//   console.log('The whole row :');
//   console.log(row);
//   // api.editPost(row.id, row.title, row.body)
//   api.editComment(row.id, row.timestamp, row.body)
// }

const cellEditProp= {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
}
 
// const cellEditPropEx= {
//   mode: "click",
//   blurToSave: true,
//   afterSaveCell: onAfterSaveCellEx
// }


function onAfterTableComplete() {
  console.log('Table render complete.');
  // console.log(row, cellName, cellValue, id);
}

// function onAfterTableCompleteEx() {
//   console.log('Table render complete.');
//   // console.log(row, cellName, cellValue, id);
// }
 
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
  // console.log('categ',typeof e)
  return(function go(){return a})
}
 
function getParentId(id){
  return(function go(){return id})
}

function onAfterDeleteRow(rowKeys) {
  console.log('onAfterDeleteRow');
  console.log('deletet',rowKeys, this);
  // api.deletePost("8xf0y6ziyjabvozdd253nd")
  for (var i in rowKeys){
      console.log(rowKeys[i])
      api.deletePost(rowKeys[i])
  }
}

// function onAfterDeleteRowEx(rowKeys) {
//   console.log('onAfterDeleteRow');
//   console.log('deletet',rowKeys);
//   // api.deletePost("8xf0y6ziyjabvozdd253nd")
//   for (var i in rowKeys){
//       console.log(rowKeys[i])
//       // api.deletePost(rowKeys[i])
//       api.deleteComment(rowKeys[i])
//   }
// }

 function getrow(row){
      
      console.log('getrow',row)
      return row
    }


function onAfterInsertRow(row) {
  //id, timestamp, title, body, author, category)
  console.log('onAfterInsertRow');
  console.log('thyson',this);
  console.log(row.id);
  api.newPost(row.id, row.timestamp, row.title, row.body, row.author, row.category)
}


// function onAfterInsertRowEx(row) {
//   //id, timestamp, title, body, author, category)
//   console.log('onAfterInsertRow');
//   console.log(row);
//   console.log(row.id);
//   // api.newPost(row.id, row.timestamp, row.title, row.body, row.author, row.category)
//   console.log('lookForMe',row.id, row.timestamp, row.body, row.author, row.parentId)
//   api.newComment(row.id, row.timestamp, row.body, row.author, row.parentId)
// }


 
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

// class BSTable extends Component {
//   constructor(props) {
//     super(props);
//   }

  
//   render() {
//     console.log("HERE WE GO")
//     console.log('this.props.data',this.props.data)

//     const optionsEx = {
//       paginationShowsTotal: true,
//       sortName: 'timestamp',  // default sort column name
//       sortOrder: 'desc',  // default sort order
//       afterTableComplete: onAfterTableCompleteEx, // A hook for after table render complete.
//       afterDeleteRow: onAfterDeleteRowEx,  // A hook for after droping rows.
//       afterInsertRow: onAfterInsertRowEx,   // A hook for after insert rows
//       // btnGroup: this.createCustomButtonGroup,
//       // expanding: this.expanding,    //<<<< should be this.state.expanding ?
//       // expandRowBgColor: 'rgb(242,255,163)'
//     };
    
//     const selectRowPropEx = {
//       mode: 'checkbox',
//       clickToSelect: true,
//       clickToExpand: true,
//       selected: [], // default select on table
//       bgColor: 'rgb(238, 193, 213)',
//       onSelect: onRowSelectEx,
//       onSelectAll: onSelectAllEx
//     };

//     console.log('importante',this.props)
    
//     if (this.props.data) {
//       return (
//         <BootstrapTable 
//           data={ this.props.data[0] }
//           options={ optionsEx }
//           selectRow={ selectRowPropEx }
//           search 
//           insertRow 
//           deleteRow
//           hover 
//           cellEdit={ cellEditPropEx } 
//           >
//           <TableHeaderColumn dataField='id' autoValue={getid} isKey={ true } dataSort={true}>Id</TableHeaderColumn>
//           <TableHeaderColumn dataField='parentId' autoValue={getParentId(this.props.data[1])} dataSort={true}>ParentId</TableHeaderColumn>
//           <TableHeaderColumn dataField='timestamp' autoValue={gettime} dataSort={true}>Timestamp</TableHeaderColumn>
//           <TableHeaderColumn dataField='body' dataSort={true}>Body</TableHeaderColumn>
//           <TableHeaderColumn dataField='author' dataSort={true}>Author</TableHeaderColumn>
//         </BootstrapTable>);
//     } else {
//       return (<p>?</p>);
//     }
//   }
// }
//--------------------------------------STARTEX---------------------------------------------------/
function onAfterSaveCellEx(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  // api.editPost(row.id, row.title, row.body)
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
  // console.log(row, cellName, cellValue, id);
}

function onAfterDeleteRowEx(rowKeys) {
  console.log('onAfterDeleteRow');
  console.log('deletet',rowKeys);
  // api.deletePost("8xf0y6ziyjabvozdd253nd")
  for (var i in rowKeys){
      console.log(rowKeys[i])
      // api.deletePost(rowKeys[i])
      api.deleteComment(rowKeys[i])
  }
}

function onAfterInsertRowEx(row) {
  //id, timestamp, title, body, author, category)
  console.log('onAfterInsertRow');
  console.log(row);
  console.log(row.id);
  // api.newPost(row.id, row.timestamp, row.title, row.body, row.author, row.category)
  console.log('lookForMe',row.id, row.timestamp, row.body, row.author, row.parentId)
  api.newComment(row.id, row.timestamp, row.body, row.author, row.parentId)
  console.log('ttttt',this)
}
//---------------------------------------START----------------------------------------------------/
export class BSTable extends Component {
    constructor(props, context){
      super(props);
      // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.state = {
        selectedRows: []
    }

  };

  // constructor(){
  //   super();
  //   this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  // };
  
  onRowSelectEx = ({id}, isSelected) => {
    console.log('+#+#+#',id, this);
    // this.all.props.selection=row.id
    console.log(`selected: ${isSelected}`);
    // if (isSelected) {
    //   this.setState({ selectedRows: [...this.state.selectedRows, id] });
    // } else {
    //   this.setState({ selectedRows: this.state.selectedRows.filter(it => it !== id) });
    // }
   // this.setState({
   //    key: row.id
   //  })
   console.log('upupupup',this)
    this.setState({
      selectedRows: [...this.state.selectedRows, id]
    })
    // this.props.selectedRows={selectedRows: row.id}
   // return id
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentDidMount() {
    const { post: {id}, commente, createNewComment, upVoteComment, downVoteComment} = this.props;
    console.log('Appppo',App)
    // getCommente(id);

  }

    createCustomButtonGroup = props => {
    //createCustomButtonGroup(row){ 
      console.log('lölölölö', this)
      // console.log('jettzzzzzt',this.props.upVoteComment(this.state.selectedRows[0]))
      // const selected = this.refs.table.state.selectedRowKeys
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
    console.log('Apppp',this)
    console.log("HERE WE GO")
    console.log('this.props.data',this.props.data)

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

    console.log('importante',this.props.data[0])
    
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
    //Here is your answer
    console.log('yoyoyDieter',this)
  }

   constructor(props, context){
    super(props);
    // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      selectedRows: []
    }

  };


onRowSelect = ({id}, isSelected) => {
  console.log('+#+#+#',id, this);
  // this.all.props.selection=row.id
  console.log(`selected: ${isSelected}`);
    // if (isSelected) {
    //   this.setState({ selectedRows: [...this.state.selectedRows, id] });
    // } else {
    //   this.setState({ selectedRows: this.state.selectedRows.filter(it => it !== id) });
    // }
   // this.setState({
   //    key: row.id
   //  })
   console.log('upupupup',this.state)
    this.setState({
      selectedRows: [...this.props.selectedRows, id]
    })
    // this.props.selectedRows={selectedRows: row.id}
   // return id
}

  
  forceUpdateHandler(){
    console.log('force!!',this)
    this.forceUpdate();
    
  };

    state={commm:[]}
    // this.setState(this.props.getCommente('8xf0y6ziyjabvozdd253nd'))
    // console.log('this',this.props.getCommente('8xf0y6ziyjabvozdd253nd').then((data)=>data.comments))

  onClickProductSelected(cell, row, enumObject, rowIndex){
    //api.votePost(row.id, "upVote")
    console.log('watchMe',this.props.upVote(row.id))
    // onClick={() => upVote(row.id)}
    // this.props.upVote(row.id)
   console.log('Product #', rowIndex);
  }
  cellButton(cell, row, enumObject, rowIndex) {
    return (this.props.upVote(row.id))
    // return (
    //    <button 
    //       type="button" 
    //       onClick={() => this.props.upVote(row.id)}//this.onClickProductSelected(cell, row, rowIndex)}
    //    >
    //    upVote
    //    </button>
    // )
  }

  componentDidMount() {
    const {posts, post, getCommente, createNewComment} = this.props
    // var tmp = this
    console.log('why Iam empty?',posts)
    // createNewComment()
      

    return {
    post2: posts.then((data)=> data.posts.map((a)=> {getCommente(a.id)}))
    }
    // getCommente('8xf0y6ziyjabvozdd253nd').then((data)=>this.setState(data))
    // getCommente('8xf0y6ziyjabvozdd253nd').then((data)=>console.log('yoyoyo',data.comments))
    // posts.map((i)=> console.log(i)
    console.log('////',post)
    // posts.map((data) => getCommente(data.id))
    var z=['8xf0y6ziyjabvozdd253nd', '6ni6ok3ym7mf1p33lnez']
    console.log('/*-/*-',posts)
    // for(var i in post){
    //   console.log('!!!!',post.id)
    //   getCommente(post[i])
    // }
}

  isExpandableRow(row) {
    return true
    // console.log('1010', row)
    // if (row.id < 3) return true;
    // else return false;
    //row.expand
  }


  expandComponent = (row, props) => {

        console.log('4711',row, this)
    // console.log('row.expand',getCommente(row.id))
    // console.log('commentaa',this.props.getCommente(row.id))
    //<BSTable data={ [row.expand, row.id] } />
    getCommente(row.id)
    var resu=[]
    // api.getAllCommentsFromPost(row.id)
    // .then((data)=>{
    //   console.log('yahooooo', data);
    //   resu.push({id: 1})
    // })
    
   var result=api.getAllCommentsFromPost(row.id).then(function(d){
            // console.log('11111',d);
            // resu.push(d);
            return(d)
            // return (<BSTable data={ [d, row.id] } />);
        })

   const zu=[]
   result.then((a)=>zu.push(a))
    // var keys = Object.keys(resu);
    // console.log('keys',keys)
    // this.mapState()
    // this.props.selection=row.id
    console.log('forceUpdate',this, this.props)
    if(row.expand){
    return (<BSTable post={row.id} upVoteComment={this.props.upVoteComment} downVoteComment={this.props.downVoteComment} data={ [row.expand.filter((a)=> a.parentId==row.id), row.id] } />);//[row.expand, row.id] } />);
    } else {
      return (<BSTable post={row.id} data={ [[], row.id] } />);
    }

  }

  // upVoteComment={this.props.upVoteComment}

  // expandComponent(row, props) {
  //   console.log('4711',row, props)
  //   // console.log('row.expand',getCommente(row.id))
  //   // console.log('commentaa',this.props.getCommente(row.id))
  //   //<BSTable data={ [row.expand, row.id] } />
  //   getCommente(row.id)
  //   var resu=[]
  //   // api.getAllCommentsFromPost(row.id)
  //   // .then((data)=>{
  //   //   console.log('yahooooo', data);
  //   //   resu.push({id: 1})
  //   // })
    
  //  var result=api.getAllCommentsFromPost(row.id).then(function(d){
  //           // console.log('11111',d);
  //           // resu.push(d);
  //           return(d)
  //           // return (<BSTable data={ [d, row.id] } />);
  //       })

  //  const zu=[]
  //  result.then((a)=>zu.push(a))
  //   // var keys = Object.keys(resu);
  //   // console.log('keys',keys)
  //   // this.mapState()
  //   // this.props.selection=row.id
  //   console.log('forceUpdate',this, this.props)
  //   if(row.expand){
  //   return (<BSTable post={row.id} data={ [row.expand.filter((a)=> a.parentId==row.id), row.id] } />);//[row.expand, row.id] } />);
  //   } else {
  //     return (<BSTable post={row.id} data={ [[], row.id] } />);
  //   }
  // }
  
  // expandColumnComponent({ isExpandableRow, isExpanded }) {
  //   let content = '';

  //   if (isExpandableRow) {
  //     content = (isExpanded ? '(-)' : '(+)' );
  //   } else {
  //     content = ' ';
  //   }
  //   return (
  //     <div> { content } </div>
  //   );
  // }

  
 
    createCustomButtonGroup = props => {
    //createCustomButtonGroup(row){ 
      console.log('lölölölö', this, this.getSelectedRowKeys)
      // const selected = this.refs.table.state.selectedRowKeys
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
          // onClick={() => this.props.upVote(onRowSelect)}>
         //<button type='button'
        //  className={ `btn btn-primary` }>
        //  View/Edit
        //</button>
    // console.log('App',this)

  render() {

    // console.log('vj',api.voteComment('8tu4bsun805n8un48ve89', "upVote"))
    // console.log('aj',api.votePost('8xf0y6ziyjabvozdd253nd', "upVote"))

    console.log('App',this)
    // console.log('commente',this.props.getCommente('8xf0y6ziyjabvozdd253nd'))

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

    // console.log('....',getCommente('6ni6ok3ym7mf1p33lnez')) 
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
 // <TableHeaderColumn dataField='button' dataFormat={this.cellButton.bind(this)} isKey expandable={ false }/>
// <TableHeaderColumn dataField='button' autoValue={this.cellButton.bind(this)} dataFormat={this.cellButton.bind(this) } isKey expandable={ false }/>
export function mapDispatchToProps(dispatch) {
  console.log('dispatch',dispatch)
  //   var getpost=[]
  //   var y=Array()
  //    dispatch(getAllPosts()).then((d) => d.posts.map((a)=> y.append(a)))
  //   console.log('öäü',y[0])
  // for(var p in y){
  //   getpost.push({id: p})

  // }
  return {
    posts: dispatch(getAllPosts()),
    categories: dispatch(getAllCategory()),
    // comments: dispatch(getAllCategory()),
    getCommente: (id) => dispatch(getCommente(id)),
    createNewComment: (comments) => dispatch(createNewComment(comments)),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),

    upVoteComment: (id) => dispatch(upVoteComment(id)),
    downVoteComment: (id) => dispatch(downVoteComment(id)),
    
    // loadPostForCategory: (category) => dispatch(loadPostForCategory(category))
  }
}
 
export function mapStateToProps(state, ownProps, dispatch) {
  // console.log('789456123!!',this)
  const {categories, posts, comments} = state
  var expands=[]

  console.log('Rayon',comments)
  if(posts.posts){
    // this.setState({key: posts.posts.id})
    console.log('voteScore',state)
    console.log('voteScore',posts[posts.posts.id], posts.posts)
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
  console.log('state', this.props)
  console.log('....',this)//('8xf0y6ziyjabvozdd253nd')
  // dispatch(getCommente('8xf0y6ziyjabvozdd253nd'))
  console.log('....',getCommente('6ni6ok3ym7mf1p33lnez'))  
  // console.log('getCommente', getCommente('8xf0y6ziyjabvozdd253nd'))
  var zu=[]
  var getpost=[]
  for(var p in posts){
    getpost.push({id: posts[p][0]})

  api.getAllCommentsFromPost(posts[p][0]).then((a)=> zu.push(a))
  }
  console.log('asd', comments)
  for(var z in comments){
    for(var y in comments[z]){
      console.log('f****', comments[z][y])
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
    // expands.push({id:comments[z].id,
    //               parentId:comments[z].parentId,
    //               timestamp:comments[z].timestamp,
    //               body:comments[z].body,
    //               author:comments[z].author,
    //               voteScore:comments[z].voteScore,
    //               deleted:comments[z].deleted,
    //               parentDeleted:comments[z].parentDeleted,
    // })
  }
  var defa = {}
  for(var c in categories){
    defa[c]=[]
    for(var i in posts){
      // expands=[]
      // console.log('ids',i)
      // api.getAllCommentsFromPost(i).then((data)=>{expands.push(data)})//{expands.push(data)})
      // console.log('expands',expands)
      for(var o in comments){
        console.log('commentsss',o, comments[o])
        // if(o!='comment'){
        if(comments[o][1]==i){
              console.log('wow',comments[o][2])
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
  console.log('789456123',ownProps)

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