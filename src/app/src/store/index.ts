import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer, { initialState } from './reducer';
import rootSaga from '@/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

export type StoreState = ReturnType<typeof initialState>;
export type ReduxStoreInstance = Store<StoreState>;

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
