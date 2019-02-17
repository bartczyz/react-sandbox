import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

it("renders correctly", () => {
  const button = renderer.create(<Button label="Hello" />).toJSON();

  expect(button).toMatchSnapshot();
});
