import React from 'react'
//@ts-ignore
import styles from './Drawer.module.scss'


interface IDrawer {}



const Drawer: React.FC<IDrawer> = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<h2 className="d-flex justify-between mb-30">
					Корзина
					<img className="cu-p" src="/images/remove.png" alt="Close" />
				</h2>

				<div className="d-flex flex-column flex">
					<div className="items flex">
						<div key={"obj.id"} className="cartItem d-flex align-center mb-20">
							<div
								style={{ backgroundImage: `url( '/images/image 5 (1).jpg` }}
								className="cartItemImg">
							</div>

							<div className="mr-20 flex">
								<p className="mb-5">obj.title</p>
								<b> 14000руб.</b>
							</div>
							<img
								className="removeBtn"
								src="/images/remove.png"
								alt="Remove"
							/>
						</div>
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
						Оформить заказ <img src="/images/arrow.svg" alt="arrow" />
						</button> 
					</div>


				</div>
			</div>
		</div>

	)
}



export default Drawer
