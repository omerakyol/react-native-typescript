import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {linking, locale, toastConfig} from '@config';
import {Provider} from 'react-redux';
import {initializeOnesignal} from '@utils';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStack from './navigation/stacks/_MainStack';
import {store, persistor} from '@store';

const App = () => {
  useEffect(() => {
    locale();
    initializeOnesignal();
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer linking={linking}>
            <StatusBar barStyle="dark-content" />
            <MainStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
