import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContext } from './components/contexts/auth.context';
import { UIContext } from './components/contexts/ui.context';
import { BrowserRouter } from 'react-router-dom';
import { NotificationContext } from './components/contexts/notification.context';
import { MetaDataContext } from './components/contexts/meta-data.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UIContext>
        <AuthContext>
          <NotificationContext>
            <MetaDataContext>
              <App />
            </MetaDataContext>
          </NotificationContext>
        </AuthContext>
      </UIContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
