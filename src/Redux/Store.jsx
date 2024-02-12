import { configureStore} from "@reduxjs/toolkit";
import Counter from "./slices/Counter";

const  Store = configureStore({
 reducer:{
    countNumber: Counter
 },
})

export default Store;