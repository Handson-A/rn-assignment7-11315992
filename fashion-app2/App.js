import registerRootComponent from 'expo/build/launch/registerRootComponent';
import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';

const App =() => {
    return <DrawerNavigator />;
}

export default App;
 registerRootComponent(App);

