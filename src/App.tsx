import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Drawer, Header } from './components'
import { Home } from './pages'




interface Props {}

export interface ISneaker {
	id: number
	title: string
	price: number
	imageUrl: string
}

const App = (props: Props) => {
	const [items, setItems] = useState<ISneaker[]>([])


	const getSneakers = async () => {
		const {data} = await axios.get(`http://localhost:3000/db.json`)
		setItems( data.sneakers )
	}

	useEffect( ()=> {
		getSneakers()
	}, [])
	


	return (
		<div className="wrapper clear">
			<Drawer/>
			<Header/>
			<Home items={ items } />
			</div>
	)
}




export default App
