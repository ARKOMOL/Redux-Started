  import {createStore} from "rudux";
  import productReducer from "./reducers/productReducer";

  const store = createStore(productReducer);

  export default store;
