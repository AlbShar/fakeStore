import { Provider } from "react-redux";

import { store } from "../store/store";

export const withRedux = (Component: () => JSX.Element) => () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
