import { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { useRouter } from 'next/router';
import Contact from '../components/contact';
import Gallery from '../components/gallery';
import HomePage from '../components/homePage';
import Profile from '../components/profile';

export default function Home() {
	const router = useRouter();
	const columns = ["Home", "Works", "About", "Contact"];
	const [copySuccess, setCopySuccess] = useState("Copy");
	const [homePage, setHomePage] = useState(true);
	const [profile, setProfile] = useState(false);
	const [gallery, setGallery] = useState(false);
	const [contact, setContact] = useState(false);

	// let history = useHistory();
	return (
		<>
			<div>
				<nav class="bg-white dark:bg-gray-800  shadow ">
					<div class="max-w-7xl mx-auto px-8">
						<div class="flex items-center justify-between h-16">
							<div class=" flex items-center">
								<a class="flex-shrink-0" href="/">
									<img class="h-8 w-8 rounded-full" src={'https://avatars.githubusercontent.com/u/58214906?s=400&u=a03d4635641ecc437d3eb810f15523a7c5850d49&v=4'} alt="Image" />
								</a>
								<div class="hidden md:block">
									<div class="ml-10 flex items-baseline space-x-4">
										<button onClick={() => { setHomePage(true); setProfile(false); setGallery(false); setContact(false); }} class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
											Home
										</button>
										<button onClick={() => { setHomePage(false); setProfile(true); setGallery(false); setContact(false); }} class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
											Profile
										</button>
										<button onClick={() => { setHomePage(false); setProfile(false); setGallery(true); setContact(false); }} class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
											Gallery
										</button>
										<button onClick={() => { setHomePage(false); setProfile(false); setGallery(false); setContact(true); }} class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
											Contact
										</button>
									</div>
								</div>
							</div>
							<div class="block">
								<div class="ml-4 flex items-center md:ml-6">
									{/* <a href="https://github.com/kokhayas" class="p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
										<span class="sr-only">
											View github
										</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
											<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
											</path>
										</svg>
									</a>
									<a href="https://github.com/kokhayas" class="p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
										<span class="sr-only">
											View github
										</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
											<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
											</path>
										</svg>
									</a>
									<a href="https://github.com/kokhayas" class="p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
										<span class="sr-only">
											View github
										</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
											<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
											</path>
										</svg>
									</a> */}
									<a class="mx-2" href="https://www.facebook.com/profile.php?id=100006294643579">
										<svg width="30" height="30" fill="currentColor" class="text-xl text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
											<path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
											</path>
										</svg>
									</a>
									<a class="mx-2" href="https://github.com/kokhayas">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
											<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
											</path>
										</svg>
									</a>
									<a class="mx-2" href="https://www.linkedin.com/in/koki-hayashi-6a5507188/">
										<svg width="30" height="30" fill="currentColor" class="text-xl text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
											<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
											</path>
										</svg>
									</a>
									<div class="ml-3 relative">
										<div class="relative inline-block text-left">
											{/* <div>
												<button type="button" onClick={() => { router.push('/profile') }} class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
													<svg width="20" fill="currentColor" height="20" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
														<path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
														</path>
													</svg>
												</button>
											</div> */}
											{/* <div>
												<button type="button" onClick={() => { router.push('/profile') }} class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
													<svg width="20" fill="currentColor" height="20" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
														<path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
														</path>
													</svg>
												</button>
											</div> */}
											{/* <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
											<div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
												<a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
													<span class="flex flex-col">
														<span>
															Settings
														</span>
													</span>
												</a>
												<a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
													<span class="flex flex-col">
														<span>
															Account
														</span>
													</span>
												</a>
												<a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
													<span class="flex flex-col">
														<span>
															Logout
														</span>
													</span>
												</a>
											</div>
										</div> */}
										</div>
									</div>
								</div>
							</div>
							<div class="-mr-2 flex md:hidden">
								<button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
									<svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
										<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
										</path>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="md:hidden">
						<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<button onClick={() => { setHomePage(true); setProfile(false); setGallery(false); setContact(false); }} class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
								Home
							</button>
							<button onClick={() => { setHomePage(false); setProfile(true); setGallery(false); setContact(false); }} class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
								Gallery
							</button>
							<button onClick={() => { setHomePage(false); setProfile(false); setGallery(true); setContact(false); }} class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
								Content
							</button>
							<button onClick={() => { setHomePage(false); setProfile(false); setGallery(false); setContact(true); }} class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
								Contact
							</button>
						</div>
					</div>
				</nav>
			</div>

			{homePage && <HomePage />}
			{profile && <Profile />}
			{gallery && <Gallery />}
			{contact && <Contact />}

			<footer class="bg-white dark:bg-gray-800 w-full py-8">
				<div class="max-w-screen-xl mx-auto px-auto">
					{/* <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between"> */}
					<div class="my-2 pl-20 place-content-center">
						<button onClick={(e) => { navigator.clipboard.writeText("1234.884.koki@gmail.com"); setCopySuccess('Copied!'); }} class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
							Contact mail address 1234.884.koki(at)gmail.com
						</button>
						<button onClick={(e) => { navigator.clipboard.writeText("1234.884.koki@gmail.com"); setCopySuccess('Copied!'); }} class="px-1 ml-2 border-solid rounded-md border-2 border-white-500 text-gray-400 hover:bg-gray hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" value="1234.884.koki@gmail.com">
							{" " + copySuccess}
						</button>
					</div>
					{/* <li class="my-2 mx-2">
							<a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://www.facebook.com/profile.php?id=100006294643579">
								Facebook
							</a>
						</li>
						<li class="my-2 mx-2">
							<a class="text-md text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/kokhayas">
								Github
							</a>
						</li>

						<li class="my-2 mx-2">
							<a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/koki-hayashi-6a5507188/">
								LinkedIn
							</a>
						</li> */}
					{/* </ul> */}
				</div>
			</footer>

		</>
	)
}