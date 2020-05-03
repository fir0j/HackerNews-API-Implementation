import React, { useState, useEffect } from 'react';

import axios from 'axios';

export const App = () => {
	let [ news, setNews ] = useState({ hits: [] });
	let [ url, setUrl ] = useState('https://hn.algolia.com/api/v1/search?query=redux');
	let [ query, setQuery ] = useState('redux');
	let [ isLoading, setIsLoading ] = useState(false);
	let [ isError, setIsError ] = useState(false);
	useEffect(
		() => {
			let fetchData = async () => {
				setIsLoading(true);
				setIsError(false);
				try {
					// throw new Error();
					let result = await axios.get(url);
					setNews(result.data);
				} catch (error) {
					setIsError(true);
				}
				setIsLoading(false);
			};
			fetchData();
		},
		[ url ]
	);

	return (
		<div className="container mt-1 flex justify-center md:border md:rounded m-auto text-center text-gray-900">
			<div className="w-full md:max-w-sm px-1 border rounded bg-orange-300">
				<form
					onSubmit={(event) => {
						setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
						event.preventDefault();
					}}
				>
					<input
						className="w-full mt-1 text-center text-green-700 outline-none border rounded border-green-300 focus:border-green-800"
						type="search"
						placeholder=" An implementation of Hacker NEWS API"
						onChange={(event) => setQuery(event.target.value)}
					/>
					<button
						type="submit"
						className="block m-auto mt-1 p-1 w-1/2 border rounded bg-gray-800 text-gray-200 hover:bg-gray-900 hover:text-green-500 focus:bg-gray-900 focus:text-green-500 focus:border-orange-700 focus:outline-none "
					>
						{isLoading === true ? <p className="text-orange-600">...Loading...</p> : 'Search'}
					</button>
					{isError === true ? <p className="text-red-800">Soryy! Something Went Wrong</p> : ''}
				</form>
				{news.hits.map((item) => (
					<div
						key={item.objectID}
						className="flex justify-between my-1 pl-1 bg-gray-900 border border-orange-600 rounded"
					>
						<div className="self-center text-green-700">
							<a href={item.url}>{item.title}</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
