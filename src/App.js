import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Table from './Table'
import Login from './Login'
import Register from './Register'
import Error from './Error'
import Auth from './Auth'
// switch = routes
//components = elements
export default function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element = {<Table />} />
    <Route exact path='/profile' element = {<Profile />} />
    <Route exact path='/login' element = {<Auth formChange={true}/>} />
    <Route exact path='/register' element = {<Auth formChange={false}/>} />
    <Route  element = {<Error/>} />
   </Routes>
    {/* <Profile />
    <Table /> */}
   </>
  );
}
