import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import { UsersContainer } from './components/Users/UsersContainer';

function App(props) {
  
  return (
    <BrowserRouter>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content">
    <Routes>
    <Route path='/' element={<Navigate to='/profile' replace='/profile' />} />
    <Route path='/dialogs/:userId' element={<Dialogs dialogs={props.state.dialogsData.dialogs} userData={props.state.userData} dispatch={props.dispatch}/>} />
    <Route path='/dialogs/' element={<Dialogs userData={props.state.userData} dispatch={props.dispatch}/>} />
    <Route path='/profile' element={<Profile profileData={props.state.profileData} dispatch={props.dispatch}/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/users' element={<UsersContainer/>}/>
    <Route path='/users/:userId' element={<UsersContainer/> } />

    <Route path='*' element='<div>Undefined route</div>' />
    </Routes>
    
    </div>
  </div>
  </BrowserRouter>
);
}

export default App;
