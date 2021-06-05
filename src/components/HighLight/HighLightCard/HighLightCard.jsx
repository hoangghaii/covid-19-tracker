import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import CountUp from "react-countup";

const useStyles = makeStyles({
	wrapper: (props) => {
		if (props.type === "confirmed")
			return { borderLeft: "5px solid #c9302c" };
		if (props.type === "recovered")
			return { borderLeft: "5px solid #28a745" };
		else return { borderLeft: "5px solid gray" };
	},
	title: {
		fontSize: 18,
		marginBottom: 5,
	},
	count: {
		fontWeight: "bold",
		fontSize: 18,
	},
});

function HighLightCard(props) {
	const { title, count, type } = props;

	const styles = useStyles({ type });

	return (
		<Card className={styles.wrapper}>
			<CardContent>
				<Typography
					component="p"
					variant="body2"
					className={styles.title}
				>
					{title}
				</Typography>
				<Typography
					component="span"
					variant="body2"
					className={styles.count}
				>
					<CountUp end={count || 0} separator=" " duration={2} />
				</Typography>
			</CardContent>
		</Card>
	);
}

HighLightCard.propTypes = {
	title: PropTypes.string,
	count: PropTypes.number,
	type: PropTypes.string,
};

export default HighLightCard;
