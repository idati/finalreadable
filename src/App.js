// import React, { Component } from 'react';
// import logo from './logo.svg';
// import {render} from 'react-dom'
// import './App.css';
// import { connect } from 'react-redux';
// import {Switch, Route, withRouter, Link} from 'react-router-dom';

// import { getAllCategory, getAllPosts } from './actions/index'
// import * as api from './api/index'

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { MuiDataTable } from 'mui-data-table'
// import { ReduxTable } from 'redux-data-table';

// import ReactTable from 'react-table'
// // import { TableContainer, Table } from 'react-custom-table';
// import 'react-table/react-table.css'

// import {BootstrapTable, TableHeaderColumn, ButtonGroup} from 'react-bootstrap-table'
// // import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
// // import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js"
// // import * as DataStore from '../node_modules/react-bootstrap-table/lib/store/TableDataStore'
// // function BootstrapTable(){
// //   return this.props
// // }


// const products = [];

// function addProducts(quantity) {
//   const startId = products.length;
//   for (let i = 0; i < quantity; i++) {
//     const id = startId + i;
//     products.push({
//       id: id,
//       name: 'Item name ' + id,
//       price: 2100 + i
//     });
//   }
// }

// addProducts(5);

// //--------Advanced Code-----------------
// function onRowSelect(row, isSelected) {
//   console.log(row.id);
//   console.log(`selected: ${isSelected}`);
// }

// function onSelectAll(isSelected) {
//   console.log(`is select all: ${isSelected}`);
// }

// function onAfterSaveCell(row, cellName, cellValue) {
//   console.log(`Save cell ${cellName} with value ${cellValue}`);
//   console.log('The whole row :');
//   console.log(row);
// }

// function onAfterTableComplete() {
//   console.log('Table render complete.');
// }

// function onAfterDeleteRow(rowKeys) {
//   console.log('onAfterDeleteRow');
//   console.log('deletet',rowKeys);
//   // api.deletePost("8xf0y6ziyjabvozdd253nd")
//   for (var i in rowKeys){
//       console.log(rowKeys[i])
//       api.deletePost(rowKeys[i])
//   }
// }

// function onAfterInsertRow(row) {
//   //id, timestamp, title, body, author, category) 
//   console.log('onAfterInsertRow');
//   console.log(row);
//   console.log(row.id);
//   // api.newPost(row.id, timestamp, title, body, author, category)
// }

// const selectRowProp = {
//   mode: 'checkbox',
//   clickToSelect: true,
//   selected: [], // default select on table
//   bgColor: 'rgb(238, 193, 213)',
//   onSelect: onRowSelect,
//   onSelectAll: onSelectAll
// };

// // const options = {
// //   paginationShowsTotal: true,
// //   sortName: 'title',  // default sort column name
// //   sortOrder: 'desc',  // default sort order
// //   afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
// //   afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
// //   afterInsertRow: onAfterInsertRow   // A hook for after insert rows
// // };

// function nameValidator(value) {
//   if (!value) {
//     return 'Job Name is required!';
//   } else if (value.length < 3) {
//     return 'Job Name length must great 3 char';
//   }
//   return true;
// }
// export class App extends Component {

//   componentDidMount() {
//     this.props.dispatch(getAllCategory())
//     this.props.dispatch(getAllPosts())
//     // For Testing
//     // api.newPost('6ni6ok3ym7mf1p33lneÖ', Date.now(), 'Learn Redux in 15 minutes!', 'Just kidding. It takes more than 100 minutes to learn technology.', 'thingthree', 'react')
//   }


//             // return(<p key={index}>{categories[key]}</p>)
//             // Object.keys(posts).map(function(key2, index2) {
//               // return(<p key={index2}>{posts[key2][3]}</p>)

//           // {Object.keys(categories).map(function(key, index) {
//           //   return(<p key={index}>{categories[key]}</p>)
//           // })}
//           // {Object.keys(posts).map(function(key2, index2) {
//           //   return(<p key={index2}>{posts[key2][3]}</p>)
//           // })}

 
//     createCustomButtonGroup = props => {
//     return (
//       <ButtonGroup className='my-custom-class' sizeClass='btn-group-md'>
//         { props.showSelectedOnlyBtn }
//         { props.exportCSVBtn }
//         { props.insertBtn }
//         { props.deleteBtn }
//         <button type='button'
//           className={ `btn btn-primary` }>
//           View/Edit
//         </button>
//       </ButtonGroup>
//     );
//   }



//   render() {

//     // console.log(DataStore.data)

//     // const options = {
//     //   btnGroup: this.createCustomButtonGroup
//     // };

//     const options = {
//       paginationShowsTotal: true,
//       sortName: 'title',  // default sort column name
//       sortOrder: 'desc',  // default sort order
//       afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
//       afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
//       afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
//       btnGroup: this.createCustomButtonGroup
//     };
 

//      const dataX = [{
//     name: 'Tanner Linsley',
//     age: 26,
//     friend: {
//       name: 'Jason Maurer',
//       age: 23,
//     }
//   }]


//     const columns = [{
//     // Header: 'title',
//     // accessor: 'title' // String-based value accessors! 
//   }, {
//     Header: 'timestamp',
//     accessor: 'timestamp',
//     Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
//   }, {
//     id: 'title', // Required because our accessor is not a string 
//     Header: 'Title',
//     accessor: d => d.title // Custom value accessors! 
//   }, {
//     // Header: props => <span>Timestamp</span>, // Custom header components! 
//     // accessor: 'friend.age'
//   }]

// const data = [
//   { title: 'Udacity is the best place to learn React', timestamp: 1467166872634, voteScore: 6},
//   // { title: 'Bamidele Johnson', timestamp: 18, voteScore: 'Anambra'},
//   // { title: 'John Lee', timestamp: 20, voteScore: 'Abuja'},
//   // { title: 'Binta Pelumi', timestamp: 22, voteScore: 'Jos'},
//   // { title: 'Cassidy Ferangamo', timestamp: 30, voteScore: 'Lagos'},
//   // { title: 'Damian Swaggbag', timestamp: 35, voteScore: 'PortHarcourt'},
//   // { title: 'Loveth Sweetstick', timestamp: 20, voteScore: 'Imo'},
//   // { title: 'Zzaz Zuzzi', timestamp: 19, voteScore: 'Bayelsa'},
//   // { title: 'Ian Sweetmouth', timestamp: 18, voteScore: 'Enugu'},
//   // { title: 'Elekun Bayo', timestamp: 21, voteScore: 'Zamfara'}
// ];

//     const {categories, posts, defaul} = this.props
//     console.log(api.fetchAllCategories())
//     console.log(api.getPosts())
//     console.log(this)
//     console.log(data)
    
//     const data2=defaul.react
//     const data3=defaul
//     console.log(data3)
//     // console.log('data',data.react)
//     console.log(defaul)
//     const config = {
//     paginated: false,
//     search: 'title',   
//     data: data3,
//     columns: [
//       { property: 'id', title: 'id'},
//       { property: 'timestamp', title: 'timestamp'},
//       { property: 'voteScore', title: 'voteScore' }
//       // { property: 'age', title: 'Age' },
//       // { property: 'location', title: 'Location' },
//       // { property: 'level', title: 'level' },
//       // { title: 'Mood', renderAs: function (data) {
//       //   return `${data.name} is in a ${data.mood} mood.`;
//       // }},

//             //     {Object.keys(defaul).map(function(i,j){
//             // var res=[]
//             //   res.push(<p>{i}</p>)
              
//             //   {defaul[i].map(function(k){
//             //     // var ts = new Date (k[1]*1000);
//             //     // ts=ts.format("DD-MM-YYYY h:mm:ss")
//             //     res.push(<tr><td>{k[0]}</td><td>{k[1]}</td></tr>)
//             //   })}
              
//             //   return(res)
//             // })}

//                   // <MuiThemeProvider>
//                   // <MuiDataTable config={config} />
//                   // </MuiThemeProvider>
//     ]
//     //   <ReduxTable
//     //     tableName="example"
//     //     data={data2}
//     //     columnKeys={['title', 'timestamp', 'voteScore']}
//     // />

//                   //     {console.log(data2)}
//                   // <MuiThemeProvider>
//                   // <MuiDataTable config={config} />
//                   // </MuiThemeProvider>


//   // <ReactTable
//   //   defaultPageSize={10}
//   //   minRows={3}
//   //   data={data2}
//   //   columns={columns}
//   //   />


//   //   <BootstrapTable data={data2} versin='4'>
//   //     <TableHeaderColumn isKey dataField='timestamp'>Timestamp</TableHeaderColumn>
//   //     <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
//   //     <TableHeaderColumn dataField='voteScore'>Vote Score</TableHeaderColumn>
//   // </BootstrapTable>


//     //   <BootstrapTable data={data2}>
//     //   <TableHeaderColumn isKey dataField='timestamp'>Timestamp</TableHeaderColumn>
//     // </BootstrapTable>

//   };
//   console.log(config)
//   // var bootstrap_enabled = (typeof $().modal == 'function')
//   // console.log(bootstrap_enabled)


//   // cleanSort = () => {
//   //   this.refs.table.cleanSort();
//   // }

//       // <div>
//       // <BootstrapTable data={data2} selectRow={ selectRowProp } options={ options } search columnFilter hover pagination>
//       //   <TableHeaderColumn dataField='timestamp' dataSort isKey >Timestamp</TableHeaderColumn>
//       //   <TableHeaderColumn dataField='title' className='good' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Title</TableHeaderColumn>
//       //   <TableHeaderColumn dataField='voteScore' dataSort>Vote Score</TableHeaderColumn>
//       // </BootstrapTable>
//       // </div>
//       // <h1>Welcome to React</h1>
//      //    const options = {
//      //  firstPage: 'First Page'
//      // };
      
//     return (
//       <div key={Date.now()}>
//       {Object.keys(data3).map((e,ind)=>{
//       return(
//       <div className="container" key={ind}><h1>{e}</h1>
//       <BootstrapTable data={data3[e]} selectRow={ selectRowProp } options={ options } search insertRow deleteRow columnFilter hover pagination >
//         <TableHeaderColumn dataField='id' dataSort isKey >Id</TableHeaderColumn>
//         <TableHeaderColumn dataField='title' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Title</TableHeaderColumn>
//         <TableHeaderColumn dataField='body' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Body</TableHeaderColumn>
//         <TableHeaderColumn dataField='author' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Author</TableHeaderColumn>
//         <TableHeaderColumn dataField='voteScore' dataSort>Vote Score</TableHeaderColumn>
//         <TableHeaderColumn dataField='timestamp' dataSort>Timestamp</TableHeaderColumn>
//         <TableHeaderColumn dataField='deleted' dataSort>Deleted</TableHeaderColumn>
//         <TableHeaderColumn dataField='category' dataSort>Category</TableHeaderColumn>
//       </BootstrapTable><hr width="75%"/>
//       </div>
//       )
//       })}
//       </div>
//       )
//   }
// }

// function mapStateToProps(state) {
//   const {categories, comments, posts} = state
//   var defa = {}
//   for(var c in categories){
//     defa[c]=[]
//     console.log('Here are the posts',posts)
//     for(var i in posts){
//       // console.log(c, posts[i][3])
//       if(c==posts[i][6] && posts[i][7]==false){
//         defa[c].push({
//           id:posts[i][0], 
//           timestamp:posts[i][1],
//           title:posts[i][2],
//           body:posts[i][3],
//           author:posts[i][4], 
//           voteScore:posts[i][5], 
//           category:posts[i][6],
//           deleted:posts[i][7]
//       })
//       // console.log(defa)
//     }
//   }
//   }
//   console.log(defa)
//   var sortable=[]
//   for(var p in posts){
//     sortable.push([p, posts[p][0], posts[p][1], posts[p][2], posts[p][3]])
//   }
//   return {
//     categories,
//     posts,
//     // fposts: sortable.sort(function(a, b) {return a[3] - b[3]}),
//     // defaul: defa.react//posts['6ni6ok3ym7mf1p33lnez']
//     defaul: defa
// //[5,4,3].sort(function(a, b) {return a - b})
//   }
// }

// export default withRouter(connect(mapStateToProps)(App))






import React, { Component } from 'react';
import logo from './logo.svg';
import {render} from 'react-dom'
import './App.css';
import { connect } from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';
 
import { getAllCategory, getAllPosts, getAllComments } from './actions/index'
import * as api from './api/index'
 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { MuiDataTable } from 'mui-data-table'
import { ReduxTable } from 'redux-data-table';
 
import ReactTable from 'react-table'
// import { TableContainer, Table } from 'react-custom-table';
import 'react-table/react-table.css'
 
import {BootstrapTable, TableHeaderColumn, ButtonGroup} from 'react-bootstrap-table'
// import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
// import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js"
// import * as DataStore from '../node_modules/react-bootstrap-table/lib/store/TableDataStore'
// function BootstrapTable(){
//   return this.props
// }
var identifier = require('identifier');
 
 
const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i < 3) {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i,
        expand: [ {
          fieldA: 'test1',
          fieldB: (i + 1) * 99,
          fieldC: (i + 1) * Math.random() * 100,
          fieldD: '123eedd' + i
        }, {
          fieldA: 'test2',
          fieldB: i * 99,
          fieldC: i * Math.random() * 100,
          fieldD: '123eedd' + i
        } ]
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
  }
}
addProducts(5);
 console.log('PRODUCTS',products)
//--------Advanced Code-----------------
function onRowSelect(row, isSelected) {
  console.log(row.id);
  console.log(`selected: ${isSelected}`);
}

function onRowSelectEx(row, isSelected) {
  console.log(row.id);
  console.log(`selected: ${isSelected}`);
}
 
function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

function onSelectAllEx(isSelected) {
  console.log(`is select all: ${isSelected}`);
}
 
 // editable (id, title, body)
function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  api.editPost(row.id, row.title, row.body)
}

function onAfterSaveCellEx(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
  // api.editPost(row.id, row.title, row.body)
  api.editComment(row.id, row.timestamp, row.body)
}

const cellEditProp= {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
}
 
const cellEditPropEx= {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCellEx
}


function onAfterTableComplete() {
  console.log('Table render complete.');
  // console.log(row, cellName, cellValue, id);
}

function onAfterTableCompleteEx() {
  console.log('Table render complete.');
  // console.log(row, cellName, cellValue, id);
}
 
function getid(){
  return (identifier(16))
 
}
 
function getvote(){
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
  console.log('deletet',rowKeys);
  // api.deletePost("8xf0y6ziyjabvozdd253nd")
  for (var i in rowKeys){
      console.log(rowKeys[i])
      api.deletePost(rowKeys[i])
  }
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


function onAfterInsertRow(row) {
  //id, timestamp, title, body, author, category)
  console.log('onAfterInsertRow');
  console.log(row);
  console.log(row.id);
  api.newPost(row.id, row.timestamp, row.title, row.body, row.author, row.category)
}


function onAfterInsertRowEx(row) {
  //id, timestamp, title, body, author, category)
  console.log('onAfterInsertRow');
  console.log(row);
  console.log(row.id);
  // api.newPost(row.id, row.timestamp, row.title, row.body, row.author, row.category)
  console.log('lookForMe',row.id, row.timestamp, row.body, row.author, row.parendId)
  api.newComment(row.id, row.timestamp, row.body, row.author, row.parendId)
}

// function onAfterSaveCell(id, value, name){
//   console.log(id, value, name)
// }
 
 
function inserRowProp() {
  return{rowkey:'123456'}
}
 
// const options = {
//   paginationShowsTotal: true,
//   sortName: 'title',  // default sort column name
//   sortOrder: 'desc',  // default sort order
//   afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
//   afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
//   afterInsertRow: onAfterInsertRow   // A hook for after insert rows
// };
 
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

class BSTable extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    console.log("HERE WE GO")
    console.log('this.props.data',this.props.data)

    const optionsEx = {
      paginationShowsTotal: true,
      sortName: 'timestamp',  // default sort column name
      sortOrder: 'desc',  // default sort order
      afterTableComplete: onAfterTableCompleteEx, // A hook for after table render complete.
      afterDeleteRow: onAfterDeleteRowEx,  // A hook for after droping rows.
      afterInsertRow: onAfterInsertRowEx,   // A hook for after insert rows
      // btnGroup: this.createCustomButtonGroup,
      // expanding: this.expanding,    //<<<< should be this.state.expanding ?
      // expandRowBgColor: 'rgb(242,255,163)'
    };
    
    const selectRowPropEx = {
      mode: 'checkbox',
      clickToSelect: true,
      clickToExpand: true,
      selected: [], // default select on table
      bgColor: 'rgb(238, 193, 213)',
      onSelect: onRowSelectEx,
      onSelectAll: onSelectAllEx
    };

    console.log('importante',this.props)
    
    if (this.props.data) {
      return (
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
          <TableHeaderColumn dataField='id' autoValue={getid} isKey={ true } dataSort={true}>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='parendId' autoValue={getParentId(this.props.data[1])} dataSort={true}>ParendId</TableHeaderColumn>
          <TableHeaderColumn dataField='timestamp' autoValue={gettime} dataSort={true}>Timestamp</TableHeaderColumn>
          <TableHeaderColumn dataField='body' dataSort={true}>Body</TableHeaderColumn>
          <TableHeaderColumn dataField='author' dataSort={true}>Author</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}



//---------------------------------------THE END------------------------------------------------/
// #export class App extends Component {
export class App extends Component {

  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    return true
    // console.log('1010', row)
    // if (row.id < 3) return true;
    // else return false;
  }

  expandComponent(row) {
    console.log('4711',row)
    console.log('row.expand',row.expand, row.id)
    return (
    <BSTable data={ [row.expand, row.id] } />
    );
  }
 
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );
  }


  componentDidMount() {
    this.props.dispatch(getAllCategory())
    console.log('üüü',this.props.dispatch(getAllCategory()))
    this.props.dispatch(getAllPosts())
    //console.log('lengthss', this.props)
    //for(var t=0; t<=)
    this.props.dispatch(getAllComments())
    console.log('Günni',this.props.dispatch(getAllComments()))
    // For Testing
    //console.log('!!!!',api.getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd'))
    // api.newPost('6ni6ok3ym7mf1p33lneÖ', Date.now(), 'Learn Redux in 15 minutes!', 'Just kidding. It takes more than 100 minutes to learn technology.', 'thingthree', 'react')
  }

 
 
 
            // return(<p key={index}>{categories[key]}</p>)
            // Object.keys(posts).map(function(key2, index2) {
              // return(<p key={index2}>{posts[key2][3]}</p>)
 
          // {Object.keys(categories).map(function(key, index) {
          //   return(<p key={index}>{categories[key]}</p>)
          // })}
          // {Object.keys(posts).map(function(key2, index2) {
          //   return(<p key={index2}>{posts[key2][3]}</p>)
          // })}
 
    createCustomButtonGroup = props => {
    return (
      <ButtonGroup className='my-custom-class' sizeClass='btn-group-md'>
        { props.showSelectedOnlyBtn }
        { props.exportCSVBtn }
        { props.insertBtn }
        { props.deleteBtn }

      </ButtonGroup>
    );
  }
 
         //<button type='button'
        //  className={ `btn btn-primary` }>
        //  View/Edit
        //</button>
 
  render() {
    console.log('yoyo',this.props)
    // console.log('getAllComments',api.getAllComments())
    console.log('PRO%',this.props) 
    // console.log(DataStore.data)
 
    // const options = {
    //   btnGroup: this.createCustomButtonGroup
    // };
 
    const options = {
      paginationShowsTotal: true,
      sortName: 'title',  // default sort column name
      sortOrder: 'desc',  // default sort order
      afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
      afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
      afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
      btnGroup: this.createCustomButtonGroup,
      expanding: this.expanding,    //<<<< should be this.state.expanding ?
      expandRowBgColor: 'rgb(242,255,163)'
    };

  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true,
    selected: [], // default select on table
    bgColor: 'rgb(238, 193, 213)',
    onSelect: onRowSelect,
    onSelectAll: onSelectAll
  };

 
     const dataX = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  }]
 
 
    const columns = [{
    // Header: 'title',
    // accessor: 'title' // String-based value accessors!
  }, {
    Header: 'timestamp',
    accessor: 'timestamp',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'title', // Required because our accessor is not a string
    Header: 'Title',
    accessor: d => d.title // Custom value accessors!
  }, {
    // Header: props => <span>Timestamp</span>, // Custom header components!
    // accessor: 'friend.age'
  }]
 
const data = [
  { title: 'Udacity is the best place to learn React', timestamp: 1467166872634, voteScore: 6},
  // { title: 'Bamidele Johnson', timestamp: 18, voteScore: 'Anambra'},
  // { title: 'John Lee', timestamp: 20, voteScore: 'Abuja'},
  // { title: 'Binta Pelumi', timestamp: 22, voteScore: 'Jos'},
  // { title: 'Cassidy Ferangamo', timestamp: 30, voteScore: 'Lagos'},
  // { title: 'Damian Swaggbag', timestamp: 35, voteScore: 'PortHarcourt'},
  // { title: 'Loveth Sweetstick', timestamp: 20, voteScore: 'Imo'},
  // { title: 'Zzaz Zuzzi', timestamp: 19, voteScore: 'Bayelsa'},
  // { title: 'Ian Sweetmouth', timestamp: 18, voteScore: 'Enugu'},
  // { title: 'Elekun Bayo', timestamp: 21, voteScore: 'Zamfara'}
];
 
    const {categories, posts, defaul, comments} = this.props
    console.log(api.fetchAllCategories())
    console.log(api.getPosts())
    console.log(this)
    console.log(data)
   
    const data2=defaul.react
    const data3=defaul
    console.log(data3)
    // console.log('data',data.react)
    console.log(defaul)
    const config = {
    paginated: false,
    search: 'title',  
    data: data3,
    columns: [
      { property: 'id', title: 'id'},
      { property: 'timestamp', title: 'timestamp'},
      { property: 'voteScore', title: 'voteScore' }
      // { property: 'age', title: 'Age' },
      // { property: 'location', title: 'Location' },
      // { property: 'level', title: 'level' },
      // { title: 'Mood', renderAs: function (data) {
      //   return `${data.name} is in a ${data.mood} mood.`;
      // }},
 
            //     {Object.keys(defaul).map(function(i,j){
            // var res=[]
            //   res.push(<p>{i}</p>)
             
            //   {defaul[i].map(function(k){
            //     // var ts = new Date (k[1]*1000);
            //     // ts=ts.format("DD-MM-YYYY h:mm:ss")
            //     res.push(<tr><td>{k[0]}</td><td>{k[1]}</td></tr>)
            //   })}
             
            //   return(res)
            // })}
 
                  // <MuiThemeProvider>
                  // <MuiDataTable config={config} />
                  // </MuiThemeProvider>
    ]
    //   <ReduxTable
    //     tableName="example"
    //     data={data2}
    //     columnKeys={['title', 'timestamp', 'voteScore']}
    // />
 
                  //     {console.log(data2)}
                  // <MuiThemeProvider>
                  // <MuiDataTable config={config} />
                  // </MuiThemeProvider>
 
 
  // <ReactTable
  //   defaultPageSize={10}
  //   minRows={3}
  //   data={data2}
  //   columns={columns}
  //   />
 
 
  //   <BootstrapTable data={data2} versin='4'>
  //     <TableHeaderColumn isKey dataField='timestamp'>Timestamp</TableHeaderColumn>
  //     <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
  //     <TableHeaderColumn dataField='voteScore'>Vote Score</TableHeaderColumn>
  // </BootstrapTable>
 
 
    //   <BootstrapTable data={data2}>
    //   <TableHeaderColumn isKey dataField='timestamp'>Timestamp</TableHeaderColumn>
    // </BootstrapTable>
 
  };
  console.log(config)
  // var bootstrap_enabled = (typeof $().modal == 'function')
  // console.log(bootstrap_enabled)
 
 
  // cleanSort = () => {
  //   this.refs.table.cleanSort();
  // }
 
      // <div>
      // <BootstrapTable data={data2} selectRow={ selectRowProp } options={ options } search columnFilter hover pagination>
      //   <TableHeaderColumn dataField='timestamp' dataSort isKey >Timestamp</TableHeaderColumn>
      //   <TableHeaderColumn dataField='title' className='good' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Title</TableHeaderColumn>
      //   <TableHeaderColumn dataField='voteScore' dataSort>Vote Score</TableHeaderColumn>
      // </BootstrapTable>
      // </div>
      // <h1>Welcome to React</h1>
     //    const options = {
     //  firstPage: 'First Page'
     // };
 
      // <TableHeaderColumn dataField='id' autoValue={identifier(16)} dataSort>Id</TableHeaderColumn>
        // <TableHeaderColumn dataField='voteScore' autoValue={1} dataSort>Vote Score</TableHeaderColumn>
        // <TableHeaderColumn dataField='timestamp' autoValue={Date.now()} dataSort>Timestamp</TableHeaderColumn>
        // <TableHeaderColumn dataField='deleted' autoValue={'false'} dataSort>Deleted</TableHeaderColumn>
        // <TableHeaderColumn dataField='category' autoValue={e} dataSort>Category</TableHeaderColumn>

        //data={data3[e]}
        //columnFilter 
    console.log(getstatus)
    console.log('THIS DATA ARE USED', data3)
    console.log(getcats('react'))

     
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
        keyField='id'  
        options={ options }   
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        expandColumnOptions={ { expandColumnVisible: true, expandColumnBeforeSelectColumn: false } }
        selectRow={ selectRowProp }
        search 
        insertRow 
        deleteRow 
        hover 
        pagination 
        cellEdit={ cellEditProp } 
        >
        <TableHeaderColumn dataField='id' autoValue={getid} dataSort>Id</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Title</TableHeaderColumn>
        <TableHeaderColumn dataField='body' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Body</TableHeaderColumn>
        <TableHeaderColumn dataField='author' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Author</TableHeaderColumn>
        <TableHeaderColumn dataField='voteScore' autoValue={getvote} dataSort>Vote Score</TableHeaderColumn>
        <TableHeaderColumn dataField='timestamp' autoValue={gettime} dataSort>Timestamp</TableHeaderColumn>
        <TableHeaderColumn dataField='deleted' autoValue={getstatus} dataSort>Deleted</TableHeaderColumn>
        <TableHeaderColumn dataField='category' autoValue={getcats(e)} dataSort>Category</TableHeaderColumn>
      </BootstrapTable><hr width="90%"/>
      </div>
      )
      })}
      </div>
      )
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // loadAllPosts: () => dispatch(loadAllPosts()),
//     // loadCategories: () => dispatch(loadCategories()),
//     comments: (posts[id]) => dispatch(getComments(posts[id]))
//     // loadPostForCategory: (category) => dispatch(loadPostForCategory(category))
//   }
// }
 
function mapStateToProps(state) {
  const {categories, posts, comments} = state
  var expands=[]
  for(var z in comments){
    expands.push({id:comments[z][0],
                  parendId:comments[z][1],
                  timestamp:comments[z][2],
                  body:comments[z][3],
                  author:comments[z][4],
                  voteScore:comments[z][5],
                  deleted:comments[z][6],
                  parentDeleted:comments[z][7],
    })
  }
  var defa = {}
  console.log('lengths', categories, comments, posts)
  for(var c in categories){
    defa[c]=[]
    console.log('Here are the posts',posts)
    for(var i in posts){
      // console.log(c, posts[i][3])
      console.log('lili',i)
      expands=[]
      for(var o in comments){
        console.log('commentsss',o)
        if(comments[o][1]==i){
              expands.push({id:comments[o][0],
                  parendId:comments[o][1],
                  timestamp:getFormattedDate(comments[o][2]),
                  body:comments[o][3],
                  author:comments[o][4],
                  voteScore:comments[o][5],
                  deleted:comments[o][6],
                  parentDeleted:comments[o][7],
            })
        }
        console.log('lolo',comments[o][1])
        console.log('expands',expands)
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
      // console.log(defa)
    }

  }
  }

  console.log(defa)
  console.log('lengthssss', categories, comments, posts)
  var sortable=[]
  for(var p in posts){
    sortable.push([p, posts[p][0], posts[p][1], posts[p][2], posts[p][3]])
  }
  return {
    categories,
    posts,
    comments,
    // fposts: sortable.sort(function(a, b) {return a[3] - b[3]}),
    // defaul: defa.react//posts['6ni6ok3ym7mf1p33lnez']
    defaul: defa,
    expand: expands
//[5,4,3].sort(function(a, b) {return a - b})
  }
}
 
export default withRouter(connect(mapStateToProps)(App))