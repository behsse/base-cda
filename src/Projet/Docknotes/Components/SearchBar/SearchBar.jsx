import style from "./SearchBar.module.scss"

const SearchBar = () => {
    return(
        <div className={style.searchBar} >
            <input type="text" placeholder="search"/>
        </div>
    )
}

export default SearchBar