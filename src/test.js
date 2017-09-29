export default class ExternallyManagedSelection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: []
    };
  }

  handleClickBtn = () => {
    console.log(this.state.selected);
  }

  onRowSelect = ({id}, isSelected) => {
    if (isSelected) {
      this.setState({ selected: [...this.state.selected, id] });
    } else {
      this.setState({ selected: this.state.selected.filter(it => it !== id) });
    }
  }

  render(){
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      onSelect: this.onRowSelect
    };

    return (
      <div>
      <button onClick={this.handleClickBtn}>clickToShowSelectedRows</button>
      <BootstrapTable data={products} selectRow={selectRowProp} pagination={true}>
        <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
   );
  }
};