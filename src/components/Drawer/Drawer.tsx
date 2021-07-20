import React from 'react'
//@ts-ignore
import styles from './Drawer.module.scss'
import { ISneaker } from './../../App';


interface IDrawer {
items: ISneaker[],
removeSneaker: ( id: number ) => void,
cartOpened: () => any
onCloseCart: () => boolean
}



const Drawer: React.FC<IDrawer> = ({ items, removeSneaker, cartOpened, onCloseCart }) => {
	return (
		//@ts-ignore
		<div className={ `${ styles.overlay } ${ cartOpened ? styles.overlayVisible : "" } ` }>
			<div className={styles.drawer}>

				<h2 className="d-flex justify-between mb-30">
					Корзина
					<img 
					className="cu-p" 
					src="/images/remove.png" 
					alt="Close" 
					onClick={ onCloseCart }
					/>
				</h2>

				{ items.length > 0 ? (
									<div className="d-flex flex-column flex">
									<div className="items flex">
									{ items.map(item => (
												<div key={ item.id } className="cartItem d-flex align-center mb-20">
												<div
													style={{ backgroundImage: `url( '${ item.imageUrl  }` }}
													className="cartItemImg">
												</div>
					
												<div className="mr-20 flex">
													<p className="mb-5">obj.title</p>
													<b> { item.price }.</b>
												</div>
												<img
													className="removeBtn"
													src="/images/remove.png"
													alt="Remove"
													onClick={ () => removeSneaker(item.id) }
												/>
											</div>
									)) }
									</div>
				
									<div className="cartTotalBlock">
										<ul>
											<li>
												<span> Итого: </span>
												<div> </div>
												<b> 9695 руб. </b>
											</li>
											<li>
												<span> Налог 5%: </span>
												<div></div>
												<b> 23423 руб. </b>
											</li>
										</ul>
										<button className="greenButton"> 
										Оформить заказ 
										<img 
										src="/images/arrow.svg" 
										alt="arrow" 
										/>
										</button> 
									</div>
								</div>
				) : (
					<p> Пусто  </p> 
				)
				    }



			</div>
		</div>

	)
}



export default Drawer
