import { connect } from "react-redux"
import { Pagination } from "./Pagination"
import {setCurrentPageAC} from './../../../redux/user-reducer'
    let mapStateToProps = (state)=>{
    let totalPages;
    let currentPage;
    if (state.userData.users.length > 0) {
        totalPages = state.userData.totalPages
        currentPage = state.userData.currentPage
    }
    else {
        totalPages = 0
        currentPage = 0
    }

    // state.userData.users?state.userData.users.totalPage:0
        return {
            totalPages,
            currentPage,
            

        }
    }
    let mapDispatchToProps = (dispatch, ownProps)=>{
        return {
            setCurrentPage:(page)=>dispatch(setCurrentPageAC(page)),
            updatePage:ownProps.updatePage,
            
        }
    }
    
    export const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination)


