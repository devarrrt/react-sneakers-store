import React from 'react'
import { Card, Header } from './components'
import Drawer from './components/Drawer/Drawer'
import { Home } from './pages'

interface Props {}




const App = (props: Props) => {
	return (
		<div className="wrapper clear">
			<Drawer/>
			<Header/>
			<Home/>
			</div>
	)
}




export default App
