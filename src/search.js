import React from 'react'
import { UseGlobalContext } from './context';

const Search = () => {
  const{query,setquery}=UseGlobalContext();
  return (
    <>
     <section className='search-section'>
      <h2>Search your favourite movie</h2>
      <form action="post" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text" placeholder='search movie'
          value={query}
          onChange={(e)=>setquery(e.target.value)} />

        </div>
      </form>
    </section> 
    </>
  )
}

export default Search;
