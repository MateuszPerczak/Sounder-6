import { v4 } from "uuid";

import type { SongProps } from "@/components/song/Song.types";

export const songs: SongProps[] = [
  {
    id: v4(),
    album: "High Tea Music: Vol. 1",
    artist: "Gourski x Himmes",
    title: "Silence",
    cover: "https://i1.sndcdn.com/artworks-000154280551-ih5rp4-t500x500.jpg",
  },
  {
    id: v4(),
    album: "Królowa Dram",
    artist: "Sanah",
    title: "Początek",
    cover:
      "https://zachod.pl/wp-content/uploads/2020/05/7e456601-7bf2-4303-90ce-a4ed4112793e.jpg",
  },
  {
    id: v4(),
    album: "The Fame Monster",
    artist: "Lady Gaga",
    title: "Alejandro",
    cover: "https://i.static.rmf.pl/78/512_512_plyta_25305.jpg",
  },
  {
    id: v4(),
    album: "If I Can’t Have Love, I Want Power",
    artist: "Halsey",
    title: "The tradition",
    cover: "https://i1.sndcdn.com/artworks-QzOYCmZq5JbE-0-t500x500.jpg",
  },
  {
    id: v4(),
    album: "Rare",
    artist: "Selena Gomez",
    title: "People You Know",
    cover: "https://i.scdn.co/image/ab67616d0000b2732abcc266597eb46f897a8666",
  },
  {
    id: v4(),
    album: "Born to Die",
    artist: "Lana Del Rey",
    title: "Summertime Sadness",
    cover: "https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7",
  },
];
