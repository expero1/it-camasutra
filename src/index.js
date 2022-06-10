import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/redux-store.js'
//import {Provider} from './StoreContext.js'
import {Provider} from 'react-redux'
//import {Provider} from 'react-redux'
let rootElem=null;
export const RenderApp = (state)=>{
if (rootElem==null){
rootElem = ReactDOM.createRoot(document.getElementById('root'));
//window.rootElem = rootElem;
}

rootElem.render(
  <React.StrictMode>
  <Provider store={store}>
<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
</Provider>
  </React.StrictMode>
);
}
RenderApp(store.getState());
store.subscribe(RenderApp)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
