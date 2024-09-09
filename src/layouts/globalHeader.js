"use client";

function handleKeyPress(event) {
  if (event.key === "Enter") {
    search();
  }
}

function search() {
  let title = document.getElementById("title").value;
  location.href = `/posts?title=${title}`;
}

export default function Header() {
  return (
    <header className="flex flex-row border-b border-slate-700 justify-between">
      <p className="text-2xl font-bold text-center py-4 px-8 ">
        This is header
      </p>
      <div className="flex flex-row my-2 mx-6 p-2 border border-slate-700 rounded-md">
        <input
          type="text"
          id="title"
          placeholder="Search posts..."
          onKeyDown={handleKeyPress}
          className="bg-transparent max-w-40 focus:outline-none"
        />
        <button
          onClick={search}
          className="border-solid border-2 border-sky-900 px-1 rounded-md"
        >
          Search
        </button>
      </div>
    </header>
  );
}
