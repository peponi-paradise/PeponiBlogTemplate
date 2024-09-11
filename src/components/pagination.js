"use client";

export default function Pagenation(props) {
  let pages = [];
  let current = Number(props.current);
  let start = Number(props.start);
  let end = Number(props.end);
  for (let i = start; i <= end; i++) {
    if (i < 0) {
      continue;
    }
    pages.push(i);
  }

  if (pages.length > 0) {
    return (
      <div className="flex flex-row items-center justify-center mt-8">
        {pages.map((page) => Page(page, current))}
      </div>
    );
  }
}

function Page(pageNumber, current) {
  let classData = "px-2 py-2 cursor-pointer ";
  if (pageNumber === current) {
    classData += "text-sky-400";
  }
  return (
    <button
      type="button"
      key={`page${pageNumber}`}
      className={classData}
      onClick={(e) => navigate(pageNumber)}
    >
      {pageNumber + 1}
    </button>
  );
}

function navigate(pageNumber) {
  let current = new URL(location.href);
  current.searchParams.set("page", Number(pageNumber));
  location.href = current;
}
