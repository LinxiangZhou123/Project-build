import React from "react";
import App from "./App/index.js"
import ReactDom from "react-dom"
import {AppContainer} from "react-hot-loader"
// import { BrowserRouter } from "react-router-dom"

function hmr(Router) {
    ReactDom.render(
        <AppContainer>
            <Router />
        </AppContainer>, 
        document.getElementById("app")
    )
}

hmr(App)
if (module.hot) {
    module.hot.accept("./App/index.js", () => {
      const app = require("./App/index.js").default;
      hmr(app);
    });
  }