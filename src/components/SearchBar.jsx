function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Stadt eingeben..."
      />
      <button onClick={fetchWeather}>Suchen</button>
    </div>
  );
}

export default SearchBar;
