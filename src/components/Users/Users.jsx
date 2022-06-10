import {User} from './User.jsx'

//import { Pagination } from '../common/Pagination/Pagination.jsx'
import React from 'react'
import { PaginationContainer } from '../common/Pagination/PaginationContainer.jsx'
import { useParams } from 'react-router-dom'
export const Users =(props)=>{
    let currentPage = parseInt (useParams().userId)
    if (currentPage && currentPage !== props.currentPage){
        //props.setCurrentPage(currentPage)
        //props.updatePage()
    }
    let userModule = ()=>{
        return props.users.map (
            (user)=>{
                return <User user={user} key = {user.id}/>
            }
    )}
    
       return (
        <div>
            <PaginationContainer updatePage={props.updatePage}/>
            <hr/>
            {userModule()}
            
        </div>
    ) 
    
    
}