import React from 'react'

import Accordion from './Accordion'
import data from './data'

const AccordionPage: React.FC = () => {
	return <Accordion items={data} />
}

export default AccordionPage
