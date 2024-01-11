import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContextProvider";
import { GEO_API_URL, geoApiOptions } from "../api/api";
import { AsyncPaginate } from "react-select-async-paginate";

export const SearchCity = () => {
  const { setCity } = useContext(WeatherContext);

  const [search, setSearch] = useState(null);

  function loadOptions(inputValue) {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((place) => {
            return {
              value: `${place.name}`,
              label: `${place.name}, ${place.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  }

  function handleOnChange(searchData) {
    setCity(searchData.value);
    setSearch(searchData);
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "10px",
      border: "2px solid #ccc",
      // width: "50vw",
      // padding: '5px',
      // boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
      backgroundColor: '#e3ecf74e',
    }),
    option: (provided, state) => ({
      ...provided,
      // backgroundColor: state.isFocused ? '#3699FF' : null,
      // color: state.isFocused ? 'white' : null,
    }),
  };

  return (
    <section className="search">
      <AsyncPaginate
        // className="asyncPaginate"
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={customStyles}
      />
    </section>
  );
};
