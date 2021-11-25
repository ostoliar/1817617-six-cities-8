import {combineReducers} from 'redux';
import {appData} from './data/data';
import {appProcess} from './app/app';
import {userProcess} from './user/user';

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData,
  [NameSpace.App]: appProcess,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
