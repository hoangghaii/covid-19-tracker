import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import HighLightCard from "./HighLightCard/HighLightCard";

function HighLight(props) {
	const { report } = props;

	const data = report && report.length ? report[report.length - 1] : [];

	const summary = [
		{
			title: "Số ca nhiễm",
			count: data.Confirmed,
			type: "confirmed",
		},
		{
			title: "Số ca khỏi",
			count: data.Recovered,
			type: "recovered",
		},
		{
			title: "Số ca tử vong",
			count: data.Deaths,
			type: "death",
		},
	];

	return (
		<Grid container spacing={3}>
			{summary.map((item) => (
				<HighLightCard
					title={item.title}
					count={item.count}
					type={item.type}
				/>
			))}

			<Grid item sm={4} xs={12}>
				<Card>
					<CardContent>
						<Typography component="p" variant="body2">
							So ca khoi
						</Typography>
						<Typography component="span" variant="body2">
							3000
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={4} xs={12}>
				<Card>
					<CardContent>
						<Typography component="p" variant="body2">
							So ca tu vong
						</Typography>
						<Typography component="span" variant="body2">
							3000
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

HighLight.propTypes = {
	report: PropTypes.object,
};

export default HighLight;
