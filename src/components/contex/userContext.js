
import React from 'react';

// creating context

const UserContext= React.createContext();

const UserProvider= UserContext.Provider;
const UserConsumer= UserContext.Consumer;

export {UserProvider,UserConsumer}