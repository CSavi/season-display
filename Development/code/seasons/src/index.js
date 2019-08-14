import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    // constructor(props){
    //     // 'super' -reference to parent's constructor props
    //     // only job is to initialize state
    //     super(props);
    //     this.state = {
    //         lat: 35.44444,
    //         errorMessage: "This is an error"
    //     };
    // }
    // bable creates a constructor during the transpilation 
    state = {
        lat: 35.44444,
        errorMessage: "This is an error"
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: 35.44444}),
            err => this.setState({ errorMessage: err.message })
        )
    }

    componentDidUpdate(){
        console.log("component made an udpate")
    }

    render() {
      // render method must return some type of JSX; 'conditional rendering'
           if (this.state.errorMessage && !this.state.lat){
               return <div>Error Message: { this.state.errorMessage } </div>;
           } else {
        //    !this.state.errorMessage && this.state.lat {
               return <SeasonDisplay latitude={ this.state.lat }/>;
           }
        //    else {
        //        return <div>Loading!</div>
        //    }
        
    }
}

ReactDom.render(<App />, document.querySelector('#root'));