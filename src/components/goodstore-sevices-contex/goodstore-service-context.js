import React from 'react';

const {
    Provider: GoodServiceProvider,
    Consumer: GoodServiceConsumer
} = React.createContext();

export { GoodServiceConsumer, GoodServiceProvider };