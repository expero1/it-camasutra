import { connect } from "react-redux";
import { getUsersAC, subsribeUserAC, unsubsribeUserAC, userReducer, setCurrentPageAC } from "../../redux/user-reducer";
import { Users } from "./Users";
import axios from "axios";
import React from "react";



let mapStateToProps = (state)=>{
    return {
        users: state.userData.users,
        currentPage:state.userData.currentPage
    }
}
let mapDispatchToProps  = (dispatch) => {
    return {
        getUsers:(items,totalPages, currentPage )=>{dispatch(getUsersAC(items,totalPages, currentPage))},
        subsribeUser:()=>{userReducer (subsribeUserAC())},
        unsubsribeUser:()=>{userReducer (unsubsribeUserAC())},
        setCurrentPage:(page)=>(setCurrentPageAC(page))
        
    }
}


class UsersController extends React.Component {

    componentDidMount(){
        this.getUsers(this.props.currentPage)

    }
    componentDidUpdate =()=>{
        //this.getUsers2(this.props.currentPage)
    }


    updatePage = (page)=>{
        this.getUsers(page)
    }
    getUsers = (page, itemsPerPage = 10, filter='', friend=null, getUsersDispatch) =>{
        filter=''
            if (friend === false){
                friend = `&friend=false`
            }
            else if (friend === true){
                friend = `&friend=true`
            }
            else {
                friend = ''
            }
    
            axios.get (`https://social-network.samuraijs.com/api/1.0/users?count=${itemsPerPage}&page=${page}&term=${filter}${friend}&test=test`)
            .then ((res)=>{
                let totalCount = res.data.totalCount;
                let totalPages = Math.ceil(totalCount / itemsPerPage)
                let currentPage = page;
                this.props.getUsers(res.data.items, totalPages, currentPage)
                
            })
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        
            }

        render(){
            return <Users users = {this.props.users} updatePage={this.updatePage} setCurrentPage={this.props.setCurrentPage} currentPage={this.props.currentPage}/>
        }    
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersController)

