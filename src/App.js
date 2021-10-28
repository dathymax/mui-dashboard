import './App.scss';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import useStyles from './styles'

function App() {
    const classes = useStyles()

    return (
        <div className="app">
            <Header/>
            <SideMenu/>
            <div className={classes.appMain}>    
                a
            </div>
        </div>
    );
}

export default App;
