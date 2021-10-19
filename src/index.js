import React from 'react';
import ReactDOM from 'react-dom';
import { CometChat } from "@cometchat-pro/chat";
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import CometChatUI from './components/CometChatUI';

const appID = "19551138d2d28ee0";
const region = "US";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
    ReactDOM.render(
      <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </React.StrictMode>
      ,document.getElementById('root')
      );
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

reportWebVitals();
