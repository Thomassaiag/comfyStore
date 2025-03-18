import React from "react";
import { useLoaderData } from "react-router-dom";

const PaginationContainer = () => {
	const { metaData } = useLoaderData();
	const { pageCount, page } = metaData.pagination;

	const pages = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});

	const handlePageChange = (pageNumber) => {
		console.log(pageNumber);
	};

	return (
		<div className="mt-4 flex justify-end">
			<div className="join ">
				<button
					className="join-item btn btn-xs sm:btn-md uppercase"
					onClick={() => handlePageChange('prev')}
				>
					prev
				</button>
				{pages.map((pageNumber) => {
					return (
						<button
							key={pageNumber}
							className={`join-item btn btn-xs sm:btn-md border-none ${pageNumber===page ? 'bg-base-300 border-base-300':''}`}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					);
				})}
				<button
					className="join-item btn btn-xs sm:btn-md uppercase"
					onClick={() => handlePageChange('next')}
				>
					next
				</button>
			</div>
		</div>
	);
};

export default PaginationContainer;
