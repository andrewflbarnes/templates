import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '@containers/Home';
import External from '@containers/External';
import Message from '@containers/Message';

type AppRoute = {
    path: string
    title: string
    component: ReactNode
}

const routes: AppRoute[] = [
    {
        path: '/',
        title: 'Home',
        component: <Home />,
    },
    {
        path: '/message',
        title: 'Message',
        component: <Message />,
    },
    {
        path: '/external',
        title: 'External',
        component: <External />,
    },
]

const App: React.FC<{}> = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    {routes.map(({ path, title }) => (
                        <li key={title}>
                            <Link to={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                {routes.map(({ path, title, component }) => (
                    <Route key={title} exact path={path}>
                        {component}
                    </Route>
                ))}
            </Switch>
        </div>
    </Router>
);

export default App;