import './App.scss';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import useStyles from './styles'
import Content from './components/Content';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    const classes = useStyles()

    return (
        <Router>
            <div className="app">
                <Header/>
                <div className={classes.appMain}>    
                    <div className="sideBar">
                        <SideMenu style={{margin: 0}}/>
                    </div>
                    <div className="content">
                        <Content/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
