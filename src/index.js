import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = ReactDOM.createRoot(document.querySelector("#root"));

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
