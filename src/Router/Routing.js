import React from 'react';
import Main from '../Dashboard'
import { Route, Switch,BrowserRouter as Router} from "react-router-dom";
import Notifications from '../NotificationDash'
import Settings from '../SettingsDash'

const ReactRouter = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/Notifications" component={Notifications}/>
            <Route spath="/Settings" component={Settings}/>
            </Switch>
        </Router>
    );}

export default ReactRouter;