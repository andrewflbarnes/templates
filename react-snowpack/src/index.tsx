import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@store'
// import mySaga from './sagas'

// then run the saga
// sagaMiddleware.run(mySaga)

ReactDOM.render((
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
), document.getElementById('app'));

if (import.meta.hot) {
  import.meta.hot.accept();
}