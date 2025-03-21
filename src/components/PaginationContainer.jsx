import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
	const { metaData } = useLoaderData();
	const { pageCount, page } = metaData.pagination;
	console.log(page);

	const pages = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});

	const { search, pathname } = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set("page", pageNumber);
        console.log(searchParams)
		navigate(`${pathname}?${searchParams}`);
	};

	return (
		<div className="mt-4 flex justify-end">
			<div className="join ">
				<button
					className="join-item btn btn-xs sm:btn-md uppercase"
					onClick={() => {
						let prevPage = page - 1;
						if (prevPage === 0) prevPage = pageCount;
						handlePageChange(prevPage);
					}}
				>
					prev
				</button>
				{pages.map((pageNumber) => {
					return (
						<button
							key={pageNumber}
							className={`join-item btn btn-xs sm:btn-md border-none ${
								pageNumber === page
									? "bg-base-300 border-base-300"
									: ""
							}`}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					);
				})}
				<button
					className="join-item btn btn-xs sm:btn-md uppercase"
					onClick={() => {
						let nextPage = page + 1;
						if (nextPage > pageCount) nextPage = 1;
						handlePageChange(nextPage);
					}}
				>
					next
				</button>
			</div>
		</div>
	);
};

export default PaginationContainer;
