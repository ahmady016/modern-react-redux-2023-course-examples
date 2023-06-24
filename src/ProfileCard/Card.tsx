import React from 'react'

type CardProps = {
	className?: string
	title: string
	description: string
	image: string
}

const Card: React.FC<CardProps> = ({
	className,
	title,
	description,
	image,
}) => {
	return (
		<div className={`card ${className}`}>
			<div className="card-image">
				<img src={image} alt={title} />
				<span className="card-title grey-text text-lighten-4">{title}</span>
			</div>
			<div className="card-content">
				<p>{description}</p>
			</div>
			<div className="card-action">
				<a>{new Date().toLocaleDateString('en-gb')}</a>
			</div>
		</div>
	)
}

export default Card
