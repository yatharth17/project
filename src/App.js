import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
   
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>

          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
