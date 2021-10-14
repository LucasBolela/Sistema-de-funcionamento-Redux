import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
  //Provider Pattern possibilita que a Store seja acessível a todos os componentes abaixo dele.
  //Mais sobre Proveder Pattern: https://medium.com/@oieduardorabelo/padrões-em-react-provider-pattern-b520c37ed733

  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
