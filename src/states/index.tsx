import { Provider } from "react-redux";
import { store } from "./store";

export const AppProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export * from "./actions";
