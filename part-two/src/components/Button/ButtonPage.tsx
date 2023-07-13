import React from 'react'
import { FcApproval, FcCheckmark, FcDebt, FcAbout, FcDecision, FcFullTrash } from 'react-icons/fc'

import Button from './Button'

const ButtonPage: React.FC = () => {
	return (
        <div className="w-64 my-2 mx-auto text-center">
            <p className="my-1">
                <Button primary rounded outline>
                    <FcApproval />
                    Click Me
                </Button>
            </p>
            <p className="my-1">
                <Button secondary>
                    <FcDebt />
                    Buy Now
                </Button>
            </p>
            <p className="my-1">
                <Button success rounded>
                    <FcCheckmark />
                    Order Now
                </Button>
            </p>
            <p className="my-1">
                <Button info rounded outline>
                    <FcAbout />
                    See More
                </Button>
            </p>
            <p className="my-1">
                <Button warning>
                    <FcDecision />
                    Hide Ads
                </Button>
            </p>
            <p className="my-1">
                <Button danger rounded>
                    <FcFullTrash />
                    Cancel Order
                </Button>
            </p>
        </div>
    )
}

export default ButtonPage
