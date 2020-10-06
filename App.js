/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import Route from "./src/Route";
import InfoProvider from "./src/provider/InfoProvider";

const App = () => {
  return (
    <InfoProvider>
      <Route />
    </InfoProvider>
  );
};

export default App;
