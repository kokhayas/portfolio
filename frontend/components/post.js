import Image from 'next/image'

export default function Profile() {
	return (
		<div className="dark:bg-gray-900">
			<div className="p-2 text-lg font-bold text-center h20">Career</div>
			<div class="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" class="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div class="bg-white dark:bg-gray-800 w-full p-4">
						<p class="text-indigo-500 text-md font-medium">
						</p>
						<p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
							September 2022 ~
						</p>
						<p class="text-gray-400 dark:text-gray-300 font-light text-md">
							Currently working at Tier4 from September 2022 as Software Engineer<br/>
							Working as Student Engineer
						</p>
					</div>
			    </a>
			</div>



			<div class="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" class="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div class="bg-white dark:bg-gray-800 w-full p-4">
						<p class="text-indigo-500 text-md font-medium">
						</p>
						<p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
							April 2022
						</p>
						<p class="text-gray-400 dark:text-gray-300 font-light text-md">
							Entered University of Tokyo in April 2022 as Master of Information Science and Technology
							<br />
							Researching on Information Science and Technology,  Algorithm and Graph Optimization
						</p>
					</div>
			    </a>
			</div>

			<div class="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" class="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div class="bg-white dark:bg-gray-800 w-full p-4">
						<p class="text-indigo-500 text-md font-medium">
						</p>
						<p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
							December 2021 ~ July 2022
						</p>
						<p class="text-gray-400 dark:text-gray-300 font-light text-md">
							Worked at Rudel from December 2021 to July 2022 as Data Science as part time job.<br/>
						</p>
					</div>
			    </a>
			</div>

			<div class="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" class="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div class="bg-white dark:bg-gray-800 w-full p-4">
						<p class="text-indigo-500 text-md font-medium">
						</p>
						<p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
							March 2022
						</p>
						<p class="text-gray-400 dark:text-gray-300 font-light text-md">
							Graduated from University of Tokyo in March 2022 as Bachelor of Aerospace Engineering <br/>
							Researched on Natural Language Processing using Python, Pytorch, Bert
						</p>
					</div>
			    </a>
			</div>
		</div>
	)
}