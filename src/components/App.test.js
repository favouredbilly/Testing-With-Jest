import React from "react";
// import ReactDOM from 'react-dom';
//test rederer
import renderer from "react-test-renderer";
import App from "./App";

//do a test here

test("App snapshot", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });
