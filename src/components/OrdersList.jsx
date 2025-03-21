import React from "react";
import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);




const OrdersList = () => {
	const { orders, metaData } = useLoaderData();

	return (
        <div className="mt-8">
            <h4 className="mb-4 capitalize">Total orders: {metaData.pagination.total}</h4>

		<div className="overflow-x-auto">
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>Name</th>
						<th>Adress</th>
						<th>products</th>
						<th>Cost</th>
						<th className="hidden sm:block">Date</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						const { id, attributes } = order;
						const {
							address,
							name,
							numItemsInCart,
							createdAt,
							orderTotal,
						} = attributes;
                        const date=day(createdAt).format('hh:mm a - MMM Do, YYYY')
						return (
							<tr key={id}>
								<th>{name}</th>
								<th>{address}</th>
								<th>{numItemsInCart}</th>
								<th>{orderTotal}</th>
								<th className="hidden sm:block">{date}</th>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
        </div>
	);
};

export default OrdersList;
