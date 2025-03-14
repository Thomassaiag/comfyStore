import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'


export const loader=()=>{
    return null
}



const SingleProduct = () => {


  return (
		<div>
			<div className="breadcrumbs text-sm">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>
			SingleProduct
		</div>
  );
}

export default SingleProduct