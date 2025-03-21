import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
	const { metaData } = useLoaderData();
	const { pageCount, page } = metaData.pagination;
	console.log(page);

	const { search, pathname } = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set("page", pageNumber);
        console.log(searchParams.get('page'));
		navigate(`${pathname}?${searchParams}`);
	};

	const addPageButton = ({ pageNumber, activeClass }) => {
		return (
			<button
				key={pageNumber}
				className={`join-item btn btn-xs sm:btn-md border-none ${
					activeClass ? "bg-base-300 border-base-300" : ""
				}`}
				onClick={() => handlePageChange(pageNumber)}
			>
				{pageNumber}
			</button>
		);
	};

	const renderPageButtons = () => {
		const pageButton = [];

		//first button
		pageButton.push(
			addPageButton({ pageNumber: 1, activeClass: page === 1 })
		);

		//dots
		if (page > 2) {
			pageButton.push(
				<button className="join-item btn btn-xs sm:btn-md" key="dote-1">
					...
				</button>
			);
		}

		//current page
		if (page != 1 && page != pageCount) {
			pageButton.push(
				addPageButton({ pageNumber: page, activeClass: true })
			);
		}

		//dots
		if (page < pageCount - 1) {
			pageButton.push(
				<button className="join-item btn btn-xs sm:btn-md" key="dote-2">
					...
				</button>
			);
		}
		//last button

		pageButton.push(
			addPageButton({
				pageNumber: pageCount,
				activeClass: page === pageCount,
			})
		);
		return pageButton;
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
				{renderPageButtons()}
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

export default ComplexPaginationContainer;
