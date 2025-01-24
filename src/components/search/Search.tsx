import './Search.css'

function Search(){
    return(
        <div className='inputDiv' style={{display: 'flex'}}>
            <input type="search" className='input' placeholder="Search"/>
        </div>
    )  
}

export default Search;