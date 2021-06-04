import React, { Fragment, useState, useEffect } from "react";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import HighLight from "./components/HighLight/HighLight";
import Summary from "./components/Summary/Summary";
import { getCountries, getReportByCountry } from "./apis/apis";

function App() {
	const [countries, setCountries] = useState([]);
	const [selectedCountryId, setSelectedCountryId] = useState("");
	const [report, setReport] = useState([]);

	useEffect(() => {
		getCountries().then((res) => {
			setCountries(res.data);
			setSelectedCountryId("vn");
		});
	}, []);

	const handleOnChange = (e) => {
		setSelectedCountryId(e.target.value);
	};

	useEffect(() => {
		if (selectedCountryId) {
			const { Slug } = countries.find(
				(country) => country.ISO2.toLowerCase() === selectedCountryId
			);

			getReportByCountry(Slug).then((res) => {
				res.data.pop();
				setReport(res.data);
			});
		}
	}, [countries, selectedCountryId]);

	return (
		<Fragment>
			<CountrySelector
				countries={countries}
				handleOnChange={handleOnChange}
				value={selectedCountryId}
			/>
			<HighLight report={report} />
			<Summary report={report} />
		</Fragment>
	);
}

export default App;
