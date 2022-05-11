import {createStore, combineReducers} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {userReducer} from './user-reducer'
const reducers = combineReducers ({
  profileData:profileReducer,
  dialogsData:dialogsReducer,
  userData:userReducer
})
export const store = createStore(reducers)

window.store = store;
