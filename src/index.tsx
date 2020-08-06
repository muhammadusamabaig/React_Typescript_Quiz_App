import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import {QuestionCard} from './QuestionCard'
import {ResultCard} from './ResultCard'
import InfoForm from './InfoForm'
ReactDOM.render(
  <React.StrictMode>
<Switch>
<div>

<Route exact path="/" component={InfoForm}/>
<Route exact path="/:number/:level" component={QuestionCard}/>
<Route exact path="/:ObtainedMarks/:detectmarks/:percentage" component={ResultCard}/>

    </div>

    </Switch>  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
