import React from 'react'
import Card from './../components/Card/Card';




interface IHome { }

const Home: React.FC<IHome> = () => {
	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1> Все кроссовки </h1>
				<div className="search-block d-flex">
					<img src="/images/Search.png" alt="Search" />
					<input type="text" placeholder="Поиск..." />
				</div>
			</div>

			<div className="d-flex flex-wrap">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

		</div>
	)
}



export default Home
