import React from 'react'
import Card from './../components/Card/Card';
import { ISneaker } from './../App';




interface IHome {
	items: ISneaker[]
 }

const Home: React.FC<IHome> = ({ items }) => {
	return (
		<div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/images/Search.png" alt="Search" />
            <img
              className="clear cu-p"
              src="/images/remove.png"
              alt="Clear"
            />
          <input  placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap"> 
			{ items.map( item => (
			<Card { ...item } />
			))}
			 </div>
    </div>
	)
}



export default Home
