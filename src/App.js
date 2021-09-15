import Layout from './layout/Layout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route path='/' exact component={Home} />
                    <Route path='/basket' component={Basket} />
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;
