import React from 'react'
import { Card } from '../components';
import { ISneaker } from './../App';

interface IFavorites {
	items: ISneaker[],
	onAddToFavorites: (obj: ISneaker)=> void
}



const Favorites: React.FC<IFavorites> = ({ items, onAddToFavorites }) => {
	return (
		<div className="content p-40">
			 <div className="d-flex align-center justify-between mb-40">
        <h1> Понравившиеся товары </h1>
      </div>

			<div className="d-flex flex-wrap">
					{ items.map( item => (
							<Card key={ item.id } { ...item } favorited={true} onAddToFavorites={ onAddToFavorites } />
					))}
			</div>
		</div>
	)
}



export default Favorites
