import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shoes from "./components/Shoes";
import Masks from "./components/Masks";
import Bags from "./components/Bags";
import { createContext, useReducer } from "react";

export const basketContext = createContext();

//simple reduce function to give us the total of the cost of basket item
export const getBasketTotal = (basket)=>
  basket?.reduce((amount,item)=> item.cost + amount, 0);

export const initialState = {
  basket: [],
};
export const reducer = (state, action) => {
  // console.log(state.basket)
  switch (action.type) {
    // code for adding into basket comes here
    case "add-to-cart":
      return { ...state.basket, basket: [...state.basket, action.item] };

    case "remove-from-cart":
      // removing from basket code comes here
      let updatedBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index > -1) {
        state.basket.splice(index, 1);
      }
      return {...updatedBasket,basket: [...state.basket] };

    default:
      return state;
  }
};

function App() {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <basketContext.Provider value={{ cart: cart, dispatch: dispatch }}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/bags">
              <Header />
              <Bags />
            </Route>
            <Route exact path="/shoes">
              <Header />
              <Shoes />
            </Route>
            <Route exact path="/masks">
              <Header />
              <Masks />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </basketContext.Provider>
  );
}

export default App;
