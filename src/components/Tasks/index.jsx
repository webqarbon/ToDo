import React from 'react'
import { ReactComponent as EditSvg } from '../../assets/img/pencil.svg'

import './Tasks.scss'

const Tasks = () =>{
return (
	<div className='tasks'>
		<h2 className='tasks__title'>
			Фронтенд
			<EditSvg className='tasks__title-edit-btn' />
		</h2>
		<div className='tasks__items'>
			<div className='tasks__items-row'>
				<div className='checbox'>
					<input type='checkbox' name='' id='check' />
					<label htmlFor='check'>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.3 7.20001L8.79999 12.7L6.29999 10.2'
								stroke='#000'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</label>
				</div>
				<input value='ReactJS Hooks (useState, useReducer, useEffect и т.д.)'/>
			</div>
		</div>
	</div>
)
} 

export default Tasks