import React from 'react'
import { GoTrash } from 'react-icons/go'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import { DispatchType, useAppDispatch, useAppSelector } from '../../../reduxStore'
import { BookWithIdType, removeBook, selectAllBooks } from './booksSlice'

import Button from '../../../components/Button'
import Table from '../../../components/Table/Table'
import { ColumnConfig } from '../../../components/Table/types'

type RemoveBookActionType = ActionCreatorWithPayload<string, "books/removeBook">
const booksConfig = (dispatch : DispatchType, removeBook : RemoveBookActionType) : ColumnConfig[] => [
	{
		field: 'id',
		label: 'Id',
	},
	{
		field: 'title',
		label: 'Title',
	},
	{
		field: 'subtitle',
		label: 'Subtitle',
	},
	{
		field: 'publisher',
		label: 'Publisher',
	},
	{
		field: 'action',
		label: 'Action',
		renderCell: (item) =>
			<div className="w-10 m-auto">
				<Button className="py-2" danger rounded onClick={() => dispatch(removeBook((item as BookWithIdType).id))}>
					<GoTrash />
				</Button>
			</div>
	},
]

const BooksList : React.FC = () => {
	const dispatch = useAppDispatch()
	const books = useAppSelector(selectAllBooks)
	return (
		<div>
			<h1 className="text-center text-2xl pb-3">Books List</h1>
			{books.length > 0
				? <Table data={books} columns={booksConfig(dispatch, removeBook)} keyField="id" />
				: <p className="text-center p-3">There is no Books right now</p>
			}
		</div>
	)
}

export default BooksList
