import { render } from "react-dom";
import { App } from "./app";

const rootEle = document.createElement("div");

document.body.append(rootEle);

render(<App />, rootEle);
