import {persistReducer} from 'redux-persist';
import * as actionTypes from '../action-types';
import {ActionWithPayload} from '../redux-helper';
import EncryptedStorage from 'react-native-encrypted-storage';

export interface ISettingsState {
  language: string;
}

export const initialState: ISettingsState = {
  language: 'tr',
};

export const reducer = persistReducer(
  {
    storage: EncryptedStorage,
    key: 'settings',
    whitelist: ['language'],
  },
  (state: ISettingsState = initialState, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case actionTypes.CHANGE_APP_LANGUAGE: {
        return {...initialState, language: action.payload};
      }
      default:
        return state;
    }
  },
);
