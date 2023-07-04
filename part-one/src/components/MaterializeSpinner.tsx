import React from 'react'
import styled from '@emotion/styled'

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

type TheSpinnerProps = {
	small?: boolean
}

const TheSpinner: React.FC<TheSpinnerProps> = ({ small }) => {
	return (
		<div className={`preloader-wrapper active ${small ? 'small' : ''}`}>
			<div className="spinner-layer spinner-red-only">
				<div className="circle-clipper left">
					<div className="circle"></div>
				</div>
				<div className="gap-patch">
					<div className="circle"></div>
				</div>
				<div className="circle-clipper right">
					<div className="circle"></div>
				</div>
			</div>
		</div>
	)
}

type SpinnerProps = {
	centered?: boolean
	small?: boolean
}

export const MaterializeSpinner: React.FC<SpinnerProps> = ({ centered = true, small = false }) => {
	return centered
		?	<SpinnerWrapper>
				<TheSpinner />
			</SpinnerWrapper>
		: <TheSpinner small={small} />
}
