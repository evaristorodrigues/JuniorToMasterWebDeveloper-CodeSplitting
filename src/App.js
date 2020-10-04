import React, {Component} from 'react';
import './App.css';
import  Page1 from './components/Page1';
// No Code Splitting
// import  Page2 from './components/Page2';
// import  Page3 from './components/Page3';
//import { thisExpression } from '@babel/types';
import AsyncComponent from './components/AsyncComponent';
class App extends Component {

  constructor(){
    super();
    this.state = {
      route:'page1',
      component:''
    }
  }
  onRouteChange= (route) =>{
    //no Code Splitting
    //this.setState({route:route});

    //With Code splitting:
    // if(route ==='page1'){
    //   this.setState({route:route});
    // }else if( route === 'page2'){
    //   import('./components/Page2').then((Page2)=>{
    //     this.setState({route:route, component:Page2.default})
    //   });
    // }else if( route === 'page3'){
    //   import('./components/Page3').then((Page3)=>{
    //     this.setState({route:route, component:Page3.default})
    //   });
    // }

    //withAsyncComponent
    this.setState({route:route});
  }
  render(){ 
    //No code Splitting
    // if(this.state.route === "page1"){
    //    return  <Page1 onRouteChange={this.onRouteChange}/>;
    // }else if(this.state.route === "page2"){
    //    return  <Page2 onRouteChange={this.onRouteChange}/>;
    // }else if(this.state.route === "page3"){
    //    return <Page3 onRouteChange={this.onRouteChange}/>;
    // } 

    // if(this.state.route === "page1"){
    //   return  <Page1 onRouteChange={this.onRouteChange}/>;
    // }else{
    //   return <this.state.component onRouteChange={this.onRouteChange}  />
    // }

    if(this.state.route === "page1"){     
       return  <Page1 onRouteChange={this.onRouteChange}/>;
    }else if(this.state.route === "page2"){
       const AsyncPage = AsyncComponent(()=> import('./components/Page2'));
       return  <AsyncPage onRouteChange={this.onRouteChange}/>;
    }else if(this.state.route === "page3"){
       const AsyncPage = AsyncComponent(()=> import('./components/Page3'));
       return <AsyncPage onRouteChange={this.onRouteChange}/>;
    }

  }
}
export default App;
