import React from "react";
import Sidebar from "components/Sidebar/Sidebar.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.changeTable = this.changeTable.bind(this);
    this.state = {
      Database: "Settings",
      Table:"None"
    };
  }
  changeTable(db,table) {
    this.setState({
      Database: db,
      Table:table
    });
  }

render() {
  let content = null;
 if(this.state.Database === "Settings" && this.state.Table === "None"){
  content = <Settings page={this.props.page}/>
 }else{
  content = <Tables state={this.state}/>
 }
  return (
    <>
      <Sidebar changeTable={this.changeTable}/>
      <br/> <br/> <br/> <br/> <br/>       
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {content}
        </div>
      </div>
    </>
  );
}

}
export default Admin;
