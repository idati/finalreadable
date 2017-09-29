import React, { Component } from 'react';
import logo from './logo.svg';
import {render} from 'react-dom'
import './App.css';
import { connect } from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';
import {getAllCommentsFromPost} from './api/index';
import { getAllCategory, getAllPosts, getAllComments, getCommente, createNewComment, upVoteComment, downVoteComment } from './actions/index'
import * as api from './api/index'
 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { MuiDataTable } from 'mui-data-table'
import { ReduxTable } from 'redux-data-table';
import * as App from './App.js'
import ReactTable from 'react-table'
// import { TableContainer, Table } from 'react-custom-table';
import 'react-table/react-table.css'
import { Tabs, Tab } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn, ButtonGroup} from 'react-bootstrap-table'

function onAfterSaveCellEx(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  // api.editPost(row.id, row.title, row.body)
  api.editComment(row.id, row.timestamp, row.body)
}

function onSelectAllEx(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

// function onRowSelectEx(row, isSelected) {
//   console.log(row.id);
//   console.log(`selected: ${isSelected}`);
// }
 
const cellEditPropEx= {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCellEx
}

function onAfterTableCompleteEx() {
  console.log('Table render complete.');
  // console.log(row, cellName, cellValue, id);
}

function getid(){
  return (identifier(16))
 
}

 
function gettime(){
  return(Date.now())
}

function getParentId(id){
  return(function go(){return id})
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

  // createNewComment(row.body, row.author, row.parentId)
  // App.mapStateToProps
}

var identifier = require('identifier');
console.log('bstable', this)
 
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
      // console.log('lölölölö', this, this.getSelectedRowKeys, this.props.data)
      // console.log('jettzzzzzt',this.props.upVoteComment(this.state.selectedRows[0]))
      // const selected = this.refs.table.state.selectedRowKeys
    return (
      <ButtonGroup className='my-custom-class' sizeClass='btn-group-md'>
        { props.showSelectedOnlyBtn }
        { props.exportCSVBtn }
        { props.insertBtn }
        { props.deleteBtn }


      </ButtonGroup>
    );

        // <button type='button'
        //  className={ `btn btn-primary` }
        //   onClick={() => this.props.upVoteComment(this.state.selectedRows[0])}>
        //  upVote
        // </button>
        // <button type='button'
        //  className={ `btn btn-primary` }
        //  onClick={() => downVoteComment(this.state.selectedRows[0])}>
        //  downVote
        // </button>
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
          <TableHeaderColumn dataField='voteScore' autoValue={App.getvote} dataSort>Vote Score</TableHeaderColumn>
          <TableHeaderColumn dataField='timestamp' autoValue={gettime} dataSort={true}>Timestamp</TableHeaderColumn>
        </BootstrapTable>
        </div>)
    } else {
      return (<p>?</p>);
    }
  }
}

export function mapStateToProps (state, ownProps) {
    const {categories, posts, comments} = state
    console.log('789456123',ownProps)
    return {
        commente: comments[ownProps.post.id],
        categories,
        posts,
        comments

    }
}

export function mapDispatchToProps(dispatch) {
  return {
    posts: dispatch(getAllPosts()),
    categories: dispatch(getAllCategory()),
    getCommente: (id) => dispatch(getCommente(id)),
    createNewComment: (comment) => dispatch(createNewComment(comment)),
    // upVoteComment: (id) => dispatch(upVoteComment(id)),
    // downVoteComment: (id) => dispatch(downVoteComment(id)),
    
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(BSTable);
