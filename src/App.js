import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import AppWrap from "./AppWrap";
import {connect} from "react-redux";
import {uploadAuthUserData} from "./store/authReducer";
import Preloader from "./Main/Preloader/Preloader";
import {initializeApp} from "./store/appReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.isInitialized) {
            return(
                <div>
                    <Preloader/>
                </div>
            )
        }
        return (
            <BrowserRouter>
                <Route path={'/app'} render={() => <AppWrap state={this.props.state}/>}/>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isInitialized: state.app.isInitialized,
    }
}

App = connect(mapStateToProps, {initializeApp})(App)

export default App;
