import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { apiMiddleware, apiReducer } from 'restful-api-redux';
import 'normalize.css';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
  ...apiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(apiMiddleware);
const store = createStore(reducers, composeEnhancers(middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
