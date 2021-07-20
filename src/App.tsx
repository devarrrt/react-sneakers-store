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
	const [cartOpened, setCartOpened] = useState<boolean>(false)
	const [cartItems, setCartItems] = useState<ISneaker[]>([])
	const [searchValue, setSearchValue] = useState<string>("")



	const onAddSneakers = ( newSneaker: ISneaker ) => {
		axios.post( 'https://60f45c223cb0870017a8a203.mockapi.io/cart', newSneaker )
		setCartItems( prev => [ ...prev, newSneaker ] )
	}

	const removeSneakers = ( id: number ) => {
		axios.delete( `https://60f45c223cb0870017a8a203.mockapi.io/cart/${ id}`)
		setCartItems( prev => prev.filter( item => item.id !== id ) )
		console.log( 'ss' )
	}	



	const getSneakers = async () => {
		const {data} = await axios.get(`https://60f45c223cb0870017a8a203.mockapi.io/sneakers`)
		setItems( data )
	}
	const getCartItems = () => {
		axios.get( 'https://60f45c223cb0870017a8a203.mockapi.io/cart' )
		.then(( res ) => {
				setCartItems( res.data )
		})
	}


	useEffect( ()=> {
		getSneakers()
		getCartItems()
	}, [])


	const onOpenCart =() =>{ 
		setCartOpened(!cartOpened) 
	}
	const onCloseCart = ( )=> {
		setCartOpened( false )
	}

	const changeSearch = ( e: React.FormEvent<HTMLInputElement> ) => {
		setSearchValue( e.currentTarget.value )
	}
	const clearSearchValue = () => {
		setSearchValue("")
	}


const filteredSneakers = items.filter( item => item.title.toLowerCase().includes( searchValue.toLowerCase() )) 






 	
if ( !items ) {
	return <p> Loading... </p> 
}

	return (
		<div className="wrapper clear">
			{ cartOpened ? 
			<Drawer 
			items={ cartItems } 
			//@ts-ignore
			cartOpened={ cartOpened }
			//@ts-ignore
			onCloseCart={ onCloseCart }
			removeSneaker={ removeSneakers }
			/> : null } 
			<Header 
			onOpenCart={ onOpenCart }  />
			<Home 
			items={ filteredSneakers } 
			onAddSneakers={ onAddSneakers } 
			searchValue={ searchValue }  
			clearSearchValue={ clearSearchValue } 
			changeSearch={ changeSearch }
			/>
			</div>
	)
}




export default App



//1/14