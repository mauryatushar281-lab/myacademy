
import { Search as SearchIcon, X } from "lucide-react";
import "./Search.css";

function Search({ value, onChange, placeholder = "Search...", onClear }) {
  return (
    <div className="search-container">
      <SearchIcon size={20} className="search-icon" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {value && (
        <button className="clear-search" onClick={onClear}>
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default Search;
