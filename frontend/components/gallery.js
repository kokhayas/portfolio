import Image from 'next/image'

export default function Gallery() {
	return (
		<div className="dark:bg-gray-900">
			<div className="p-2 text-lg font-bold text-center h20">Gallery</div>

			<div className="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" className="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div className="bg-white dark:bg-gray-800 w-full p-4">
						<p className="text-indigo-500 text-md font-medium">
						</p>
						<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
							<a href="https://search-similar-motion.onrender.com/">Search Engine for English Debate Topic</a>
						</p>
						<p className="text-gray-400 dark:text-gray-300 font-light text-md">
							Created a Search Engine for English Debate Topic. I used tensorflowjs. Input sentence is encoded into vectors and the cos-similarity is calculated at frontend.<br/><br/>
							Technologies used: React, @tensorflow-models/universal-sentence-encoder, Render<br/><br/>
							<a className="hover:text-white" href="https://search-similar-motion.onrender.com/">Website: https://search-similar-motion.onrender.com/</a><br/>
							<a className="hover:text-white" href="https://github.com/kokhayas/utds_search_similar_motion">Github: https://github.com/kokhayas/utds_search_similar_motion</a>
						</p>
					</div>
			    </a>
			</div>

			<div className="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" className="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div className="bg-white dark:bg-gray-800 w-full p-4">
						<p className="text-indigo-500 text-md font-medium">
						</p>
						<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
							<a href="https://generate-random-motion.onrender.com/">Randomly select English Debate Topic</a>
						</p>
						<p className="text-gray-400 dark:text-gray-300 font-light text-md">
							Created a Service that randomly selects English Debate Topics<br/><br/>
							Technologies used: React, Render<br/><br/>
							<a className="hover:text-white" href="https://generate-random-motion.onrender.com/">Website: https://generate-random-motion.onrender.com/</a><br/>
							<a className="hover:text-white" href="https://github.com/kokhayas/utds_random_motion">Github: https://github.com/kokhayas/utds_random_motion</a>
						</p>
					</div>
			    </a>
			</div>

			<div className="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" className="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div className="bg-white dark:bg-gray-800 w-full p-4">
						<p className="text-indigo-500 text-md font-medium">
						</p>
						<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
							<a href="https://ut-medium-xi.vercel.app/">News App for Student</a>
						</p>
						<p className="text-gray-400 dark:text-gray-300 font-light text-md">
							Created a news app where student can post news with ut-code club member<br/><br/>
							Technologies used: React, Next.js, Tailwind CSS, Nodejs, Express, Postgresql, Pisma, Vercel <br/><br/>
							<a className="hover:text-white"  href="https://ut-medium-xi.vercel.app/">Website: https://ut-medium-xi.vercel.app/</a><br/>
							<a className="hover:text-white"  href="https://github.com/ut-code/ut-medium>">Github: https://github.com/ut-code/ut-medium</a>
						</p>
					</div>
			    </a>
			</div>


			<div className="mb-4 overflow-hidden shadow-lg rounded-lg mx-5 cursor-pointer m-auto">
				<a href="#" className="mt-2 w-full block h-full">
					<Image width="30" height="30" alt="profile" src="/earth.jpg" className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800" />
					<div className="bg-white dark:bg-gray-800 w-full p-4">
						<p className="text-indigo-500 text-md font-medium">
						</p>
						<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
							<a href="https://github.com/kokhayas/ut_H8_Team2">News App for Student</a>
						</p>
						<p className="text-gray-400 dark:text-gray-300 font-light text-md">
							ARLISS_Newcomer_training_2020_team2 Six members of the Aerospace Engineering Department worked on a microcontroller project from November 2019 to February 2020. We used H8 microcontrollers. We used copper plate circuits. We procure components at Sengoku Densho and Akizuki Denki in Akihabara. The cans are sorted according to their color.<br/><br/>
							Technologies used: C <br/><br/>
							{/* <a href="https://ut-medium-xi.vercel.app/">Website: https://ut-medium-xi.vercel.app/</a><br/> */}
							<a className="hover:text-white"  href="https://github.com/kokhayas/ut_H8_Team2>">Github: https://github.com/kokhayas/ut_H8_Team2</a>
						</p>
					</div>
			    </a>
			</div>




		</div>
		)
}