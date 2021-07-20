import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Drawer, Header } from './components'
import { Home } from './pages'
import Favorites from './pages/Favorites'




interface Props { }

export interface ISneaker {
	id: number
	title: string
	price: number
	imageUrl: string
}


const App = (props: Props) => {
	const [items, setItems] = useState<ISneaker[]>([])
	const [cartOpened, setCartOpened] = useState<boolean>(false)
	const [cartItems, setCartItems] = useState<ISneaker[]>([])
	const [searchValue, setSearchValue] = useState<string>("")
	const [favorites, setFavorites] = useState([])





	const onAddSneakers = (newSneaker: ISneaker) => {
		axios.post('https://60f45c223cb0870017a8a203.mockapi.io/cart', newSneaker)
		setCartItems(prev => [...prev, newSneaker])
	}

	const removeSneakers = (id: number) => {
		axios.delete(`https://60f45c223cb0870017a8a203.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}





	const getSneakers = async () => {
		const { data } = await axios.get(`https://60f45c223cb0870017a8a203.mockapi.io/sneakers`)
		setItems(data)
	}
	const getCartItems = async () => {
		const {data} = await axios.get('https://60f45c223cb0870017a8a203.mockapi.io/cart')
		setCartItems(data)
	}
	const getFavorites = async ( ) => {
		const {data} = await axios.get('https://60f45c223cb0870017a8a203.mockapi.io/favorite')
			setFavorites(data)
	}


	useEffect(() => {
		getSneakers()
		getCartItems()
		getFavorites()
	}, [])


	const onOpenCart = () => {
		setCartOpened(!cartOpened)
	}
	const onCloseCart = () => {
		setCartOpened(false)
	}

	const changeSearch = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value)
	}
	const clearSearchValue = () => {
		setSearchValue("")
	}

	const filteredSneakers = items.filter( item => item.title.toLowerCase().includes(searchValue.toLowerCase()))



	const onAddToFavorites = async (obj: ISneaker) => {
			//@ts-ignore
		if ( favorites.find(( item ) => item.id === obj.id )) { 
			axios.delete( `https://60f45c223cb0870017a8a203.mockapi.io/favorite/${obj.id}` )
			//@ts-ignore
			setFavorites(prev => prev.filter(item => item.id !== obj.id))
		} else {
			const { data } = await axios.post('https://60f45c223cb0870017a8a203.mockapi.io/favorite', obj)
			//@ts-ignore
			setFavorites((prev) => [...prev, data])
		}
	}


	if (!items) {
		return <p> Loading... </p>
	}

	return (
		<div className="wrapper clear">
			{ cartOpened ?
				<Drawer
					items={cartItems}
					//@ts-ignore
					cartOpened={cartOpened}
					//@ts-ignore
					onCloseCart={onCloseCart}
					removeSneaker={removeSneakers}
				/> : null}
			<Header
				onOpenCart={onOpenCart} />

			<Route path="/" exact>
				<Home 
					items={filteredSneakers}
					onAddSneakers={onAddSneakers}
					searchValue={searchValue}
					clearSearchValue={clearSearchValue}
					changeSearch={changeSearch} 
					onAddToFavorites={onAddToFavorites}
				/>
			</Route>

			<Route path="/favorites" exact >
				<Favorites 
				items={favorites}  
				onAddToFavorites = {onAddToFavorites} />
			</Route> 

		</div>
	)
}




export default App


