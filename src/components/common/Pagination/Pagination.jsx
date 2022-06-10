import { NavLink } from 'react-router-dom';
import css from './Pagination.module.css'

export let Pagination = (props) => {
    let updatePage = (page)=>{
        props.setCurrentPage(page)
        props.updatePage(page)
    }
    let generatePaginationV1 = ()=>{
        let paginationBlock = [];
        for (let i=1; i<props.totalPages;i++){
            if (i === props.currentPage){
                paginationBlock.push (<NavLink to={'/users/'+i} className={css.activePage} onClick={()=>{updatePage(i)}} key={i}>{i}</NavLink>)
            } else {
                paginationBlock.push (<NavLink to={'/users/'+i} onClick={()=>{updatePage(i)} } key={i}>{i}</NavLink>)
            }
            
        }
        return paginationBlock
    }

    let generatePaginationV2 = ()=>{
        let paginationBlock = [];
        
        for (let i=1; i<props.totalPages;i++){
            if (i === props.currentPage){
                paginationBlock.push (<option className={css.activePage} onChange={()=>{updatePage(i)} } key={i} value={i}>{i}</option>)
            } else {
                paginationBlock.push (<option onChange={()=>{updatePage(i)} } key={i} value={i}>{i}</option>)
            }
            
        }
        return (
            <select name='page' onChange={()=>{updatePage()} }>
                {paginationBlock}
            </select>
        )
        
        
    }

    
    return (
        <div className={css.paginationContainer}>
            totalPage = {props.totalPages}
            {generatePaginationV1()}
        </div>
    )
}