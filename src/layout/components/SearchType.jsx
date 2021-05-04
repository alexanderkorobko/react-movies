function SearchType(){
    return(
        <div>
        <label>
        <input name="type" type="radio" checked />
        <span>All</span>
      </label>

      <label>
        <input name="type" type="radio" checked />
        <span>Movies only</span>
      </label>

      <label>
        <input name="type" type="radio" checked />
        <span>Series only</span>
      </label>
      </div>
    )
}