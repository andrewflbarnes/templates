import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '@containers/Home';

const App: React.FC<{}> = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/message'>Message</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/message'>
                        <div>Hello :)</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;