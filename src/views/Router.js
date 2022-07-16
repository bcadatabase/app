import React from "react";
import Home from "views/Home"
import Auth from "layouts/Auth"
import Admin from "layouts/Admin"
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.chagePage = this.chagePage.bind(this);
    this.state = {
      pageName: "HomePage",
      subPageName:"None"
    };
  }
  chagePage(page,subPage) {
    this.setState({
      pageName: page,
      subPageName:subPage
    });
  }
 render(){
  if(this.state.pageName === "HomePage"){
    return (<><Home page={this.chagePage}/></>);
  }
  if(this.state.pageName === "Auth"){
    return (<><Auth page={this.chagePage} subPage={this.state.subPageName}/></>);
  }
  if(this.state.pageName === "AdminPage"){
    return (<><Admin page={this.chagePage}/></>);
  }
  return (<></>);  
}
}
export default Router;
