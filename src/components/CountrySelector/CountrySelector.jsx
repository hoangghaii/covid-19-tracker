import {
	FormControl,
	FormHelperText,
	InputLabel,
	NativeSelect,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

function CountrySelector(props) {
	const { countries, handleOnChange, value } = props;

	return (
		<FormControl>
			<InputLabel htmlFor="country-selector" shrink>
				Quốc Gia
			</InputLabel>
			<NativeSelect
				value={value}
				onChange={handleOnChange}
				inputProps={{
					id: "country-selector",
					name: "country",
				}}
			>
				{countries.map(({ Country, ISO2 }) => (
					<option key={ISO2} value={ISO2.toLowerCase()}>
						{Country}
					</option>
				))}
			</NativeSelect>
			<FormHelperText>Lựa chọn quốc gia</FormHelperText>
		</FormControl>
	);
}

CountrySelector.propTypes = {
	countries: PropTypes.array,
	handleOnChange: PropTypes.func,
	value: PropTypes.string,
};

CountrySelector.defaultProps = {
	countries: [],
	handleOnChange: null,
	value: "",
};

export default CountrySelector;
