import React from 'react'

import Counter from './Counter'

const CounterPage : React.FC = () => {
	return (
        <>
            <div className="p-2 mb-2">
                <Counter initialValue={10} />
            </div>
            <div className="p-2 mb-2">
                <Counter initialValue={50} />
            </div>
        </>
    )
}

export default CounterPage
