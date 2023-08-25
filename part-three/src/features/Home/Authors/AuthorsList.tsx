import React from 'react'
import { GoTrash } from "react-icons/go"
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import { DispatchType, useAppDispatch, useAppSelector } from '../../../redux/store'
import { selectAllAuthors, removeAuthor, AuthorWithIdType } from './authorsSlice'

import Button from '../../../components/Button'
import Table from '../../../components/Table/Table'
import { ColumnConfig } from '../../../components/Table/types'

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
			<div className="w-10 m-auto">
				<Button className="py-2" danger rounded onClick={() => dispatch(removeAuthor((item as AuthorWithIdType).id))}>
					<GoTrash />
				</Button>
			</div>
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
