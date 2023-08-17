import React from 'react'
import classNames from 'classnames'

type ButtonProps = React.ComponentProps<'button'> & {
	rounded?: boolean
	outline?: boolean
    primary?: boolean
    secondary?: boolean
    success?: boolean
    info?: boolean
    warning?: boolean
    danger?: boolean
}
function checkButtonVariation({ primary, secondary, success, info, warning, danger }: ButtonProps) {
    return (Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!info)
        + Number(!!warning)
        + Number(!!danger) > 1) ? false : true
}
const Button: React.FC<ButtonProps> = (props) => {
    if(!checkButtonVariation(props))
        return <div className="p-2 border border-red-900 bg-red-500 text-red-950">Please supply only one variant prop</div>

    const { rounded, outline, primary, secondary, success, info, warning, danger, className, children, ...rest } = props
    const classes = classNames(className,
        'flex justify-center items-center w-full px-3 py-2 border', {
        'border-blue-500 bg-blue-500': primary,
        'border-gray-700 bg-gray-700': secondary,
        'border-green-500 bg-green-500': success,
        'border-sky-500 bg-sky-500': info,
        'border-yellow-500 bg-yellow-500': warning,
        'border-red-500 bg-red-500': danger,
        'bg-white': outline,
        'rounded-full': rounded,
        'text-gray-100': !outline && (primary || secondary || success || info || warning || danger),
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-sky-800': outline && info,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    })
	return <button {...rest} className={classes}>{children}</button>
}

export default Button
