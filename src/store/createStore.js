import { createStore, compose, applyMiddleware } from 'redux';

export default (redurces, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(redurces, enhancer);
};
