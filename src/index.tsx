import React from "react";
import ReactDOM from "react-dom";
import "../src/anim.css";
import Home from "./components/pages/home";
//<Home />
ReactDOM.render(
	<div className={`full`}>
		<Home />
	</div>,
	document.getElementById("root"),
);

if (import.meta.hot) {
	import.meta.hot.accept();
}
