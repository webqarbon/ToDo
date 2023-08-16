import React, { useState } from 'react'

import List from './components/List'
import AddList from './components/AddList'
import Tasks from './components/Tasks'

import { ReactComponent as ListSvg } from './assets/img/list.svg'

import DB from './assets/db.json'

function App() {
	const [lists, setLists] = useState(
		DB.lists.map(item => {
			item.color = DB.colors.filter(color => color.id === item.colorId)[0].name
			return item
		})
	)

	const onAddList = obj => {
		const newList = [...lists, obj]
		setLists(newList)
	}

	return (
		<div className='todo'>
			<div className='todo__sidebar'>
				<List
					items={[
						{
							icon: <ListSvg className='list__icon' />,
							name: 'Все задачи',
						},
					]}
				/>
				<List items={lists} onRemove={list => console.log(list)} isRemovable />
				<AddList onAdd={onAddList} colors={DB.colors} />
			</div>
			<div className='todo__tasks'>
				<Tasks/>
			</div>
		</div>
	)
}

export default App
