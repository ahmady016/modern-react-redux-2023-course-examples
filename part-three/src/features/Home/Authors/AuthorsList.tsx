import React from 'react'
import { ThunkDispatch, ActionCreatorWithPayload, AnyAction } from '@reduxjs/toolkit'
import { GoTrash } from "react-icons/go"

import { BookType } from '../Books/booksSlice'
import { selectAllAuthors, removeAuthor, AuthorType, AuthorWithIdType } from './authorsSlice'
import { useAppDispatch, useAppSelector } from '../../../reduxStore'

import Button from '../../../components/Button'
import Table from '../../../components/Table/Table'
import { ColumnConfig } from '../../../components/Table/types'

type DispatchType = ThunkDispatch<{
	authors: Record<string, AuthorType>,
	books: Record<string, BookType>
}, undefined, AnyAction>
type RemoveAuthorActionType = ActionCreatorWithPayload<string, "authors/removeAuthor">
const authorsConfig = (dispatch : DispatchType, removeAuthor : RemoveAuthorActionType) : ColumnConfig[] => [
	{
		field: 'id',
		label: 'Id'
	},
	{
		field: 'name',
		label: 'Full Name'
	},
	{
		field: 'country',
		label: 'Country'
	},
	{
		field: 'age',
		label: 'Age'
	},
	{
		field: 'action',
		label: 'Action',
		renderCell: (item) =>
			<Button danger onClick={() => dispatch(removeAuthor((item as AuthorWithIdType).id))}>
				<GoTrash />
				<span>Remove</span>
			</Button>
	},
]

const AuthorsList : React.FC = () => {
	const dispatch = useAppDispatch()
	const authors = useAppSelector(selectAllAuthors)
	return (
		<div>
			<h1 className="text-center text-2xl pb-3">Authors List</h1>
			{authors.length > 0
				? <Table data={authors} columns={authorsConfig(dispatch, removeAuthor)} keyField="id" />
				: <p className="text-center p-3">There is no Authors right now</p>
			}
		</div>
	)
}

export default AuthorsList
