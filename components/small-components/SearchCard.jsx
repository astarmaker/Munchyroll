import React from "react";
import Link from "next/link";
function SearchCard({ data }) {
  return (
    <Link href={"/anime/" + data.id}>
      <div className="     sm:p-3   ">
        <img
          className=" hover:scale-105 transition-all w-full aspect-[5/7] object-cover rounded-lg"
          src={data.image}
          alt=""
        />

        <div>
          <h4 className=" mt-3 font-bold  line-clamp-2">{data.title.english || data.title.romaji}</h4>

          <p>Released: {data.releaseDate || "N/A"}</p>
        </div>
      </div>
    </Link>
  );
}

export default SearchCard;
