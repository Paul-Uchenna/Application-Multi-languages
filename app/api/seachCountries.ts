//

export async function searchCountries(query: string): Promise<any[]> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries = await response.json();
  return countries;
}
