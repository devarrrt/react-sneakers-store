import React from 'react'
import Card from './../components/Card/Card';
import { ISneaker } from './../App';




interface IHome {
	items: ISneaker[], 
	onAddSneakers: ( newSneaker: ISneaker ) => void,
	searchValue: string,
	changeSearch: ( e: React.FormEvent<HTMLInputElement>) => void,
	clearSearchValue: ( ) => void 
	onAddToFavorites: ( obj: ISneaker ) => void
 }



const Home: React.FC<IHome> = ({ items, onAddSneakers, searchValue, changeSearch, clearSearchValue, onAddToFavorites }) => {
	return (
		<div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1> { searchValue ? `Поиск по запросу: ${ searchValue }` : 'Все кроссовки' } </h1>
        <div className="search-block d-flex">
          <img src="/images/Search.png" alt="Search" />
          { searchValue ? (
						  <img
              className="clear cu-p"
              src="/images/remove.png"
              alt="Clear"
							onClick={ clearSearchValue }
            />  
					) : null }
          <input  placeholder="Поиск..." 
					value={ searchValue }
					onChange={ changeSearch }
					/>
        </div>
      </div>
      <div className="d-flex flex-wrap"> 
			{ items.map( item => (
			<Card 
			key={ item.id }  
			{ ...item }  
			onAddSneakers={ onAddSneakers } 
			onAddToFavorites={ onAddToFavorites }
			/>
			))}
			 </div> 
    </div> 
	)
}



export default Home
