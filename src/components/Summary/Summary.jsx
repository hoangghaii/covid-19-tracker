import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import LineChart from "../Charts/LineChart/LineChart";

function Summary(props) {
	const { report } = props;

	return (
		<Grid container spacing={3}>
			<Grid item sm={8} xs={12}>
				<LineChart data={report} />
			</Grid>

			<Grid item sm={4} xs={12}></Grid>
		</Grid>
	);
}

Summary.propTypes = {
	report: PropTypes.array,
};

export default Summary;
