import React, { useState } from 'react'
import styles from './Card.module.scss'
import { ISneaker } from './../../App';



interface ICard extends ISneaker {
	onAddSneakers?: ( newSneaker: ISneaker ) => void,
	onAddToFavorites?: (obj: ISneaker ) =>void,
	favorited?: boolean
}



const Card: React.FC<ICard> = ({ id, title, price, imageUrl, onAddSneakers, onAddToFavorites, favorited = false
}) => {
const [isAdded, setIsAdded] = useState<boolean>(false)
const [favorite, setFavorite] = useState(favorited)


const addSneakesr = (): void => {
	const newSneaker = {
		id, title, price, imageUrl
	}
	setIsAdded( true )
	//@ts-ignore
	onAddSneakers( newSneaker )
}
const changeFavorite = (): void => {
	const obj = {
		id, title, price, imageUrl
	}
	//@ts-ignore
	onAddToFavorites(obj)
	setFavorite(!favorite)
}


	return (
		<div className={styles.card}>
			<div className={ styles.favorite } onClick={ changeFavorite }>
			<img src={ favorite ? "/images/like.svg" : "/images/unlike.png" } alt="unlike"   />
			</div> 
		
			<img width="100%" height={135} src={ imageUrl } alt="Sneakers" />
			<h5>{ title }</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{ price } руб.</b>
				</div>
					<img onClick={ addSneakesr } 
					src={ isAdded ? '/images/Checked.svg' : 'images/Plus.svg' } alt="plus"/>
				</div>
		</div>
	)
}                


export default Card
