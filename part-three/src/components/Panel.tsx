import React from 'react'
import classNames from 'classnames'

type PanelProps = React.ComponentProps<'div'>
const Panel: React.FC<PanelProps> = ({ className, children, ...rest }) => {
	const classes = classNames('border rounded p-3 shadow bg-white', className)
	return (
		<div {...rest} className={classes}>{children}</div>
	)
}

export default Panel
