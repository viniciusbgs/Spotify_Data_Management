
import { useState, useEffect } from "react";
import { Home as HomeIcon, Search, Library } from "lucide-react";
import { MongoClient } from "mongodb";
import InputSearch from "../components/InputSearch";
import Header from "@/components/Header";


export default async function Home() {


  interface Song {
    _id: string;
    track_id: string;
    track_name: string;
    track_artist: string;
    track_popularity: number;
    track_album_id: string;
    track_album_name: string;
    track_album_release_date: string;
    playlist_name: string;
    playlist_id: string;
    playlist_genre: string;
    playlist_subgenre: string;
    danceability: number;
    energy: number;
    key: number;
    loudness: number;
    mode: number;
    speechiness: number;
    acousticness: number;
    instrumentalness: number;
    liveness: number;
    valence: number;
    tempo: number;
    duration_ms: number;

  }

  const fs = require("fs");

  const { MongoClient } = require("mongodb");
  // or as an es module:
  // import { MongoClient } from 'mongodb'

  // Connection URL
  const url = "mongodb://root:mongo@localhost:27017";
  const dbName = "spotify_small";

  const client = new MongoClient(url);

  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection("songs_small");
  
  if ((await collection.countDocuments()) === 0) {
    // Ler o arquivo .json
    const jsonData = fs.readFileSync("./dados_menores.json", "utf8");
    const data = JSON.parse(jsonData);

    // Inserir os objetos no banco de dados
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documentos inseridos.`);
  } else {
    console.log("Banco de dados já preenchido");
  }

  //insere uma musica
  // const insertResult = await collection.insertOne({track_name: 'Shape of You', track_artist: 'Ed Sheeran', track_album: 'Divide' });
  // console.log('Resultado do insert:', insertResult);

  // Inside the else block where you retrieve data from MongoDB

  // Fetch all songs
  const allSongs = await collection.find({}).toArray();
  // console.log('Todas as músicas:', allSongs);

  // Extract necessary properties and create a new array of plain objects
  const plainSongs : Song[] = allSongs.map((song : Song) => ({
    track_id: song.track_id,
    track_name: song.track_name,
    track_artist: song.track_artist,
    track_popularity: song.track_popularity,
    track_album_id: song.track_album_id,
    track_album_name: song.track_album_name,
    track_album_release_date: song.track_album_release_date,
    playlist_name: song.playlist_name,
    playlist_id: song.playlist_id,
    playlist_genre: song.playlist_genre,
    playlist_subgenre: song.playlist_subgenre,
    danceability: song.danceability,
    energy: song.energy,
    key: song.key,
    loudness: song.loudness,
    mode: song.mode,
    speechiness: song.speechiness,
    acousticness: song.acousticness,
    instrumentalness: song.instrumentalness,
    liveness: song.liveness,
    valence: song.valence,
    tempo: song.tempo,
    duration_ms: song.duration_ms,
  }));

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <Library />
              Your Library
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Header />
          <InputSearch />
          <div className="grid grid-cols-1 gap-4 ">
      {allSongs.map((track: Song) => (
        <div
          key={track._id}
          className="bg-white text-black p-4 rounded-md shadow-md"
        >
          <p className="font-bold text-lg">{track.track_name}</p>
          <p className="text-black">{track.track_artist}</p>
          <p className="text-black">{track.track_album_name}</p>
        </div>
      ))}
    </div>
        </main>
      </div>
    </div>
  );
}
