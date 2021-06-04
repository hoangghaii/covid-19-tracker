import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LineChart from "../Charts/LineChart/LineChart";

function Summary(props) {
	return (
		<Grid container spacing={3}>
			<Grid item sm={8} xs={12}>
				<LineChart data={[]} />
			</Grid>

			<Grid item sm={4} xs={12}></Grid>
		</Grid>
	);
}

Summary.propTypes = {};

export default Summary;
