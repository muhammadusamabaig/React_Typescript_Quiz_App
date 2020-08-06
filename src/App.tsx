 import React from "react";

 import { BrowserRouter as Switch, Route } from "react-router-dom";
 import {QuestionCard} from './QuestionCard'
import {ResultCard} from './ResultCard'
import InfoForm from './InfoForm'
function App() {


      
  return (
<Switch>
<div>

<Route exact path="/" component={InfoForm}/>
<Route exact path="/:number/:level" component={QuestionCard}/>
<Route exact path="/:ObtainedMarks/:detectmarks/:percentage" component={ResultCard}/>

    </div>

    </Switch>
  );
}

export default App;





