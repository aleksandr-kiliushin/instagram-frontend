import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InstContainer from './components/InstContainer'
import Login from './components/Account/Login'


const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={InstContainer} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App