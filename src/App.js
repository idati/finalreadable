import React, { Component } from 'react';
import logo from './logo.svg';
import {render} from 'react-dom'
import './App.css';
import { connect } from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';

import { getAllCategory, getAllPosts } from './actions/index'
import * as api from './api/index'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { MuiDataTable } from 'mui-data-table'
import { ReduxTable } from 'redux-data-table';

import ReactTable from 'react-table'
// import { TableContainer, Table } from 'react-custom-table';
import 'react-table/react-table.css'

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
// import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
// import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js"




const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

//--------Advanced Code-----------------
function onRowSelect(row, isSelected) {
  console.log(row);
  console.log(`selected: ${isSelected}`);
}

function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
}

function onAfterTableComplete() {
  console.log('Table render complete.');
}

function onAfterDeleteRow(rowKeys) {
  console.log('onAfterDeleteRow');
  console.log(rowKeys);
}

function onAfterInsertRow(row) {
  console.log('onAfterInsertRow');
  console.log(row);
}

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: [], // default select on table
  bgColor: 'rgb(238, 193, 213)',
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

const options = {
  paginationShowsTotal: true,
  sortName: 'title',  // default sort column name
  sortOrder: 'desc',  // default sort order
  afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
  afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};

function nameValidator(value) {
  if (!value) {
    return 'Job Name is required!';
  } else if (value.length < 3) {
    return 'Job Name length must great 3 char';
  }
  return true;
}
export class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAllCategory())
    this.props.dispatch(getAllPosts())
    // For Testing
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

  render() {



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

    const {categories, posts, defaul} = this.props
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
        const options = {
      firstPage: 'First Page'
     };
    return (
      <div key={Date.now()}>
      {Object.keys(data3).map((e)=>{
      return(
      <div className="container" key={Date.now()}><h1>{e}</h1>
      <BootstrapTable data={data3[e]} selectRow={ selectRowProp } options={ options } search columnFilter hover pagination >
        <TableHeaderColumn dataField='id' dataSort isKey >Id</TableHeaderColumn>
        <TableHeaderColumn dataField='title' className='good' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Title</TableHeaderColumn>
        <TableHeaderColumn dataField='body' className='good' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Body</TableHeaderColumn>
        <TableHeaderColumn dataField='author' className='good' dataSort editable={ { type: 'textarea' , validator: nameValidator } }>Author</TableHeaderColumn>
        <TableHeaderColumn dataField='voteScore' dataSort>Vote Score</TableHeaderColumn>
        <TableHeaderColumn dataField='timestamp' dataSort>Timestamp</TableHeaderColumn>
      </BootstrapTable><hr width="75%"/>
      </div>
      )
      })}
      </div>
      )
  }
}

function mapStateToProps(state) {
  const {categories, comments, posts} = state
  var defa = {}
  for(var c in categories){
    defa[c]=[]
    console.log('Here are the posts',posts)
    for(var i in posts){
      // console.log(c, posts[i][3])
      if(c==posts[i][6]){
        defa[c].push({
          id:posts[i][0], 
          timestamp:posts[i][1],
          title:posts[i][2],
          body:posts[i][3],
          author:posts[i][4], 
          voteScore:posts[i][5], 
          category:posts[i][6]
      })
      // console.log(defa)
    }
  }
  }
  console.log(defa)
  var sortable=[]
  for(var p in posts){
    sortable.push([p, posts[p][0], posts[p][1], posts[p][2], posts[p][3]])
  }
  return {
    categories,
    posts,
    // fposts: sortable.sort(function(a, b) {return a[3] - b[3]}),
    // defaul: defa.react//posts['6ni6ok3ym7mf1p33lnez']
    defaul: defa
//[5,4,3].sort(function(a, b) {return a - b})
  }
}

export default withRouter(connect(mapStateToProps)(App))
