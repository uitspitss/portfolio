import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState, reducer } from './reducer';
import rootSaga from '../sagas';

export type StoreState = ReturnType<typeof initialState>;
export type ReduxStoreInstance = Store<StoreState>;

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const configureStore = (state = initialState()) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, state, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
