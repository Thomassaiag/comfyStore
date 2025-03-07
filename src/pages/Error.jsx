import React from 'react'

import {Link, useRouteError} from 'react-router-dom'

const Error = () => {
    const error=useRouteError()
    console.log(error)


    if (error.status===404){
        return (
            <main className='grid min-h-[100] place-items-center px-8'>
                <h4 className='text-center font-bold text-4xl'>404</h4>
                <h3>Page Not Found</h3>
                <p>Sorry, we couldn't find the page you're looking for</p>
                <Link to="/">
                Go Back Home
                </Link>
            </main>
        )
    }
  return (
		<main className="grid min-h-[100] place-items-center px-8">
			<h4 className="text-center font-bold text-4xl">There was an error</h4>
			<Link to="/">Go Back Home</Link>
		</main>
  );
}

export default Error