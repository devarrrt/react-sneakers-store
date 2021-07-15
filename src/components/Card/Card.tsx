import React from 'react'
//@ts-ignore
import styles from './Card.module.scss'
import { ISneaker } from './../../App';



interface ICard extends ISneaker {
}



const Card: React.FC<ICard> = ({ id, title, price, imageUrl}) => {


	return (
		<div className={styles.card}>
			<img src="/images/unlike.png" alt="unlike" />
			<img width="100%" height={135} src={ imageUrl } alt="Sneakers" />
			<h5>{ title }</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{ price } руб.</b>
				</div>
			</div>
		</div>
	)
}


export default Card
