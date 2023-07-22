import React from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
    handleClose: () => void
    children: React.ReactNode
}
const Model : React.FC<ModalProps> = ({ children, handleClose }) => {
    React.useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => void document.body.classList.remove('overflow-hidden')
    }, [])

	return ReactDOM.createPortal(
        <>
            <div onClick={handleClose}  className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-8 w-1/2 m-auto h-fit bg-gray-100">
                {children}
            </div>
        </>,
        document.getElementById('modal')!
    )
}

export default Model
