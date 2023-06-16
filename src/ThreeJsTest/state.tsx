import { createRef } from "react";
import { ThreeStatePropsType } from "./ThreeJsTest.types";

// helps to define the hight of our entire project

const state:ThreeStatePropsType = {
  sections: 3,
  pages: 3, //returns a max of 100vh 
  zoom: 1,
  top: createRef<any>(),
};

export default state;