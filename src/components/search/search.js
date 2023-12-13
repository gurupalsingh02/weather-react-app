import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (value) => {
    setSearch(value);
    onSearchChange(value);
  };
  const loadOptions = async (inputValue) => {
    try {
      return fetch(
        `${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      ).then((response)=>response.json()).then((response)=>{
        return {
            options: response.data.map((city)=>{
                return {
                    value : `${city.latitude},${city.longitude}`,
                    label : `${city.name}, ${city.countryCode}`,
                }
            }),
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
