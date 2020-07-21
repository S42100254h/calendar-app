import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
