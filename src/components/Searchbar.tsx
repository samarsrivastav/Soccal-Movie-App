

export default function Searchbar({setSearch}:{setSearch:any}) {
  return (
    <div className="flex items-center flex-grow mx-4">
        <input
          type="text"
          placeholder="🔍 Search for Movies, Events, Plays, Sports and Activities"
          className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            onChange={e=>setSearch(e.target.value)}
        />
    </div>
  )
}
