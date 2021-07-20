import React from 'react'



interface IHeader {
	onOpenCart: () => void
}



const Header: React.FC<IHeader> = ({ onOpenCart }) => {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} src="/images/logo.png" alt="Logotype" />
				<div>
					<h3 className="text-uppercase">React Sneakers</h3>
					<p className="opacity-5"> Подбери пару по душе
					 </p>
				</div>
			</div>
		<ul className="d-flex">
			<li className="mr-30 cu-p" onClick={ onOpenCart }>
				<img width={18} height={18} src="images/Basket.svg" alt="Корзина" />
				<span className="cart-count"> 1293  руб.</span>
			</li>
			<li className="mr-20 cu-p">
					<img width={18} height={18} src="images/Heart.png" alt="Закладки" />
			</li>
			<li>
					<img width={18} height={18} src="images/Union.svg" alt="Пользователь" />
			</li>
		</ul>
	</header>
	)
}



export default Header
