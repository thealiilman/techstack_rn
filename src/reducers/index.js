import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//This Reducer always returns the array
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});