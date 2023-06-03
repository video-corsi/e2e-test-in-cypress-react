import { Navigate } from 'react-router-dom';
import Ex1CommandSimpleLogin from './examples/09-commands-and-page-object/Ex1CommandSimpleLogin';
import HomeExampleForCommands from './examples/09-commands-and-page-object/Ex1HomeExampleForCommands';
import Ex4OrganizeInPageObject from './examples/09-commands-and-page-object/Ex4OrganizeInPageObject';
import Ex1HelloCypress from './examples/1-fundamentals/Ex1HelloCypress';
import Ex2MyFirstRealTest from './examples/1-fundamentals/Ex2MyFirstRealTest';
import Ex1ChaiJQuery from './examples/2-asserting/Ex1ChaiJquery';
import Ex2ChaiImplicitSuject from './examples/2-asserting/Ex2ChaiImplicitSuject';
import Ex3BeforeEach from './examples/2-asserting/Ex3BeforeEach';
import Ex4AssertionDemo from './examples/2-asserting/Ex4AssertionDemo';
import Ex17AntD from './examples/5-query/Ex17AntD';
import Ex1Visit from './examples/5-query/Ex1Visit';
import Ex2Get from "./examples/5-query/Ex2Get";
import Ex3Contains from "./examples/5-query/Ex3Contains";
import Ex4GetVsContains from "./examples/5-query/Ex4GetVsContains";
import Ex5ContainsAndGet from "./examples/5-query/Ex5ContainsAndGet";
import {Ex7AChildren, Ex7BChildren} from "./examples/5-query/Ex7Children";
import Ex8Parent from "./examples/5-query/Ex8Parent";
import Ex9Closest from "./examples/5-query/Ex9Closest";
import {Ex10AWithin, Ex10BWithin} from "./examples/5-query/Ex10Within";
import {Ex11ASibling, Ex11BSibling} from "./examples/5-query/Ex11Sibiling";
import Ex12Alias from "./examples/5-query/Ex12Alias";
import Ex13ExistVsVisible from "./examples/5-query/Ex13ExistVsVisible";
import Ex14AutomaticWaiting from './examples/5-query/Ex14AutomaticWaiting';
import Ex15Find from "./examples/5-query/Ex15Find";
import Ex16Invoke from "./examples/5-query/Ex16Invoke";
import Playground from './examples/Playground';
import AntDemo from './pages/AntDemo';
import Home from './pages/Home';

export const routes = [
  // pages
  { path: "/home", element: <Home /> },
  { path: "/ant-demo", element: <AntDemo /> },
  // examples
  { path: "/playground", element: <Playground />,  },
  // CHAPTER 1
  { path: "/1-fundamentals/ex1", element: <Ex1HelloCypress />,  },
  { path: "/1-fundamentals/ex2", element: <Ex2MyFirstRealTest /> },
  // CHAPTER 2
  { path: "/2-asserting/ex1-chai-jquery", element: <Ex1ChaiJQuery /> },
  { path: "/2-asserting/ex2-chai-implicit", element: <Ex2ChaiImplicitSuject /> },
  { path: "/2-asserting/ex3-beforeEach", element: <Ex3BeforeEach /> },
  { path: "/2-asserting/ex4-assertion", element: <Ex4AssertionDemo /> },
  // CHAPTER 4: cypress and react
  // CHAPTER 5: query
  { path: "/5-query/ex1-visit", element: <Ex1Visit /> },
  { path: "/5-query/ex2-get", element: <Ex2Get /> },
  { path: "/5-query/ex3-contains", element: <Ex3Contains /> },
  { path: "/5-query/ex4-get-vs-contains", element: <Ex4GetVsContains /> },
  { path: "/5-query/ex5-contains-and-get", element: <Ex5ContainsAndGet /> },
  { path: "/5-query/ex7-a-children", element: <Ex7AChildren /> },
  { path: "/5-query/ex7-b-children", element: <Ex7BChildren /> },
  { path: "/5-query/ex8-parent", element: <Ex8Parent /> },
  { path: "/5-query/ex9-closest", element: <Ex9Closest /> },
  { path: "/5-query/ex10-a-within", element: <Ex10AWithin /> },
  { path: "/5-query/ex10-b-within", element: <Ex10BWithin /> },
  { path: "/5-query/ex11-a-sibling", element: <Ex11ASibling /> },
  { path: "/5-query/ex11-b-sibling", element: <Ex11BSibling /> },
  { path: "/5-query/ex12-alias", element: <Ex12Alias /> },
  { path: "/5-query/ex13-exist-vs-visible", element: <Ex13ExistVsVisible /> },
  { path: "/5-query/ex14-automatic-waiting", element: <Ex14AutomaticWaiting /> },
  { path: "/5-query/ex15-find", element: <Ex15Find /> },
  { path: "/5-query/ex16-invoke", element: <Ex16Invoke /> },
  { path: "/5-query/ex17-antd", element: <Ex17AntD /> },
  { path: '*', element: <Navigate to="home" /> },

  // CHAPTER 9: Command & Page Object
  { path: "/9-commands-page-object/home-example", element: <HomeExampleForCommands /> },
  { path: "/9-commands-page-object/ex1-command-simple-login", element: <Ex1CommandSimpleLogin /> },
  { path: "/9-commands-page-object/ex4-organize-in-page-object", element: <Ex4OrganizeInPageObject /> },


  // CHAPTER 10: pocketbase
  // don't need to define routes. Just run:
  // npm run pocketbase
  // (don't work in Window. Follow instruction in the course

];
