import React from 'react';

import List from './components/List';
import AddList from './components/AddList'

import { ReactComponent as ListSvg } from './assets/img/list.svg';

import DB from './assets/db.json';


function App() {
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
				<List
					items={[
						{
							color: 'green',
							name: 'Покупки',
						},
						{
							color: 'blue',
							name: 'Фронтенд',
						},
						{
							color: 'pink',
							name: 'Фильмы и сериалы',
							active: true,
						},
					]}
					isRemovable
				/>
				<AddList colors={DB.colors} />
			</div>
			<div className='todo__tasks'></div>
		</div>
	)
}

export default App
