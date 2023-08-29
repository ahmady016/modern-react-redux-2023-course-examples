import React from 'react'

const MobilesList: React.FC = () => {
	return (
		<div className="w-full p-4 bg-gray-100 rounded-lg shadow sm:p-8 border border-gray-20 hover:bg-gray-200 hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700">
			<div className="mb-4">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Mobiles</h5>
			</div>
			<div className="flow-root">
				<ul role="list" className="divide-y divide-gray-200 hover:divide-gray-400 dark:divide-gray-700">
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0">
								<img className="w-12 h-12 rounded-full"
									src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f34.jpg"
									alt="Samsung Galaxy F34"
								/>
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white">Samsung Galaxy F34</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">Released 12 August 2023</p>
							</div>
							<div className="flex-grow flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                                <p>6.5"</p>
                                <p>128GB</p>
                                <p>8GB</p>
								<p>6000mAh</p>
                                <p>$230</p>
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0">
								<img className="w-12 h-12 rounded-full"
									src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f54-5g.jpg"
									alt="Samsung Galaxy F54"
								/>
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white">Samsung Galaxy F54</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">Released 13 June 2023</p>
							</div>
							<div className="flex-grow flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                                <p>6.7"</p>
                                <p>256GB</p>
                                <p>8GB</p>
								<p>6000mAh</p>
                                <p>$400</p>
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0">
								<img className="w-12 h-12 rounded-full"
									src="https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12r.jpg"
									alt="Xiaomi Redmi Note 12R"
								/>
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white">Xiaomi Redmi Note 12R</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">Released 28 June 2023</p>
							</div>
							<div className="flex-grow flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                                <p>6.79"</p>
                                <p>256GB</p>
                                <p>8GB</p>
								<p>5000mAh</p>
                                <p>$200</p>
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-shrink-0">
								<img className="w-12 h-12 rounded-full"
									src="https://fdn2.gsmarena.com/vv/bigpic/oppo-k11-5g.jpg"
									alt="Oppo K11"
								/>
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white">Oppo K11</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">Released 01 August 2023</p>
							</div>
							<div className="flex-grow flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                                <p>6.7"</p>
                                <p>512GB</p>
                                <p>12GB</p>
								<p>5000mAh</p>
                                <p>$240</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MobilesList
