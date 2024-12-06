import axios from "axios";

export async function searchCountries(query: string): Promise<any[]> {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${query}`
  );
  const countries = await response.data;
  return countries;
}
