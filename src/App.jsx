import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import MatchGameContainer from './containers/MatchGameContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MatchGameContainer />
      </div>
    </Provider>
  );
}

export default App;
