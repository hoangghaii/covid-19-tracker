import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps/HighMaps";
import LineChart from "../Charts/LineChart/LineChart";
import { getMapDataByCountryId } from "./../../apis/apis";

function Summary(props) {
	const { report, countryId } = props;
	const [mapData, setMapData] = useState({});

	useEffect(() => {
		if (countryId) {
			getMapDataByCountryId(countryId)
				.then((res) => {
					setMapData(res);
				})
				.catch((err) => console.log({ err }));
		}
	}, [countryId]);

	return (
		<div style={{ height: "500px", marginTop: 10 }}>
			<Grid container spacing={3}>
				<Grid item sm={8} xs={12}>
					<LineChart data={report} />
				</Grid>

				<Grid item sm={4} xs={12}>
					<HighMaps mapData={mapData} />
				</Grid>
			</Grid>
		</div>
	);
}

Summary.propTypes = {
	report: PropTypes.array,
	countryId: PropTypes.string,
};

export default Summary;
