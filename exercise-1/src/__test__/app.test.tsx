import React from "react";
import App from "../App";
import renderer from "react-test-renderer";

jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);

it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
