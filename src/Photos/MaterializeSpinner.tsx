import React from 'react'
import styled from '@emotion/styled'

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

function TheSpinner() {
	return (
		<div className="preloader-wrapper active">
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
}

export const MaterializeSpinner: React.FC<SpinnerProps> = ({ centered = true }) => {
	return centered
		?	<SpinnerWrapper>
				<TheSpinner />
			</SpinnerWrapper>
		: <TheSpinner />
}
