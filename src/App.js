import React, { Component } from 'react';
import logo from './logo.svg';
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


class App extends Component {
   
  componentDidMount() {
    this.props.dispatch(getAllCategory())
    this.props.dispatch(getAllPosts())
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

    const {categories, posts, fposts, defaul} = this.props
    console.log(api.fetchAllCategories())
    console.log(api.getPosts())
    console.log(this)
    console.log(data)
    
    const data2=defaul
    console.log(data2)
    // console.log('data',data.react)

    const config = {
    paginated: false,
    search: 'title',   
    data: data2,
    columns: [
      { property: 'title', title: 'title'},
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

  };
  console.log(config)

    return (
      <div>

  <ReactTable
    defaultPageSize={10}
    minRows={3}
    data={data2}
    columns={columns}
    />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const {categories, comments, posts} = state
  var defa = {}
  for(var c in categories){
    defa[c]=[]
    for(var i in posts){
      // console.log(c, posts[i][3])
      if(c==posts[i][3]){
        defa[c].push({title:posts[i][0],timestamp:posts[i][1],voteScore:posts[i][2]})
      }
      // console.log(defa)
    }
  }
  
  var sortable=[]
  for(var p in posts){
    sortable.push([p, posts[p][0], posts[p][1], posts[p][2], posts[p][3]])
  }
  return {
    categories,
    posts,
    fposts: sortable.sort(function(a, b) {return a[3] - b[3]}),
    defaul: defa.react//posts['6ni6ok3ym7mf1p33lnez']
//[5,4,3].sort(function(a, b) {return a - b})
  }
}

export default withRouter(connect(mapStateToProps)(App))
