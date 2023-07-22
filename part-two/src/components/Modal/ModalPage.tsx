import React from 'react'

import Button from '../Button/Button'
import Model from './Model'

const ModalPage: React.FC = () => {
    const [isModalOpened, setIsModalOpened] = React.useState<boolean>(false)
    const openModal = React.useCallback(() => void setIsModalOpened(true), [])
    const closeModal = React.useCallback(() => void setIsModalOpened(false), [])

	return (
        <>
            <div className="w-48 m-auto pt-3">
                <Button secondary onClick={openModal}>Open Modal</Button>
            </div>
            {isModalOpened &&
                <Model handleClose={closeModal}>
                    <h1 className="font-bold text-center">Modal Page</h1>
                    <p className="m-2 text-justify">
                        This is the modal page content, This is the modal page content,
                        This is the modal page content, This is the modal page content,
                        This is the modal page content, This is the modal page content,
                        This is the modal page content, This is the modal page content,
                        This is the modal page content.
                    </p>
                    <div className="w-3/12 mt-2 float-right">
                        <Button info outline onClick={closeModal}>Accept</Button>
                    </div>
                </Model>
            }
        </>
    )
}

export default ModalPage
