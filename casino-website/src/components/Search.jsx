export default function Search({ handleSearch }) {
  return (
    <div className="search ui small icon input ">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search Game"
      />
      <i className="search icon"></i>
    </div>
  );
}
