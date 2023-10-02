"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import groupUsers from "@/public/group.png";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [players, setPlayers] = useState(3);
  const [gameStart, setGameStart] = useState(false);

  function playerHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const operator = target?.innerText;
    switch (operator) {
      case "+":
        if (players <= 9) setPlayers((prev) => prev + 1);
        else {
          return;
        }
        break;
      case "-":
        if (players > 3) setPlayers((prev) => prev - 1);
        else {
          return;
        }
        break;
    }
  }

  const guess = [
    ["red paint", "blood"],
    ["turtle", "snail"],
    ["bat", "owl"],
    ["moon", "star"],
    ["fly / langaw", "mosquito / lamok"],
    ["flashlight", "lantern"],
    ["gasoline", "perfume"],
    ["bed", "table"],
    ["battery", "solar"],
    ["water tank", "firetruck"],
    ["jacket", "rain coat"],
    ["dumpsite", "battle field"],
    ["dogs park", "zoo"],
    ["white ketchup", "mayonaise"],
    ["burger", "sandwich"],
    ["boxing ring", "church"],
    ["cow", "goat"],
    ["basket", "basketball ring"],
    ["skateboard", "surfing board"],
    ["bananaQ", "KamoteQ"],
    ["spider", "crab"],
    ["bayawak", "buwaya"],
    ["pentel pen", "ballpen"],
    ["Giraffe", "horse"],
    ["utot", "tambucho"],
    ["piano", "computer keyboard"],
    ["poop", "durian fruit"],
    ["hotdog", "carrot"],
    ["tattoo", "drawing"],
    ["china", "japan"],
    ["snake", "electric eel"],
    ["tiger", "cat"],
    ["boat oar", "baseball bat"],
    ["sand", "dust"],
    ["desert", "beach"],
    ["cloud", "fog"],
    ["dolphin", "whale"],
    ["guitar", "ukulele"],
    ["zombie", "drunk person"],
    ["security guard", "tanod"],
    ["face mask", "panty"],
    ["batman", "iron man"],
    ["milk", "bleach"],
    ["toyo / soy suace", "black coffee"],
    ["chocolate Ice Cream", "mud / putik"],
    ["miss gay", "miss Universe"],
    ["monkey", "your self"],
    ["bee", "dragon fly"],
    ["id", "wallet"],
    ["tissue", "medyas"],
    ["sponge", "soap"],
    ["rainbow", "christmass light"],
    ["remote control helicopter", "rescue helicopter"],
    ["basketball", "soccer"],
    ["swimming pool", "kanal"],
    ["yakult", "lotion"],
    ["birthday party", "Riot"],
    ["baby", "baby pig"],
    ["prison", "university"],
    ["helmet", "cap"],
    ["hotel", "CR"],
    ["toothpaste", "glue"],
    ["kite", "breif"],
    ["asukal", "flour"],
    ["people", "ants"],
    ["nail cutter", "gunting"],
  ];
  // console.log(guess.length);

  return (
    <main className="bg-gradient-to-t from-violet-800 via-indigo-600 to-fuchsia-600 min-h-screen">
      <Image
        src={Logo}
        width={800}
        height={253}
        alt="logo"
        className="w-60 mx-auto"
      />

      {gameStart ? (
        <GameStart />
      ) : (
        <GameMenu
          playerHandler={playerHandler}
          players={players}
          setGameStart={setGameStart}
        />
      )}
    </main>
  );
}

function GameStart() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  return (
    <>
      <Card />
    </>
  );
}

function Card() {
  const [reveal, setReveal] = useState(false);
  return (
    <div className=" p-4 flex flex-col gap-8 items-center justify-center text-black min-h-[calc(100vh-77px)]">
      <div
        className={`${
          reveal ? "bg-white" : "bg-slate-700 text-white"
        } rounded-2xl overflow-hidden w-5/6 h-96 mb-20 flex flex-col justify-between shadow-lg`}
      >
        <h5 className="mx-auto py-2 text-lg font-medium">Player 1</h5>
        {!reveal ? (
          <div className="flex items-center justify-center h-full ">
            <div className="border rounded-full w-40 h-40 flex items-center justify-center">
              <h5 className=" h-4/5 flex items-center justify-center text-6xl">
                ?
              </h5>
            </div>
          </div>
        ) : (
          <h5 className=" h-full flex items-center justify-center text-2xl text-red-500">
            test
          </h5>
        )}
        <hr />
        <button
          className=" h-1/5 flex items-center justify-center"
          onClick={() => setReveal((prev) => !prev)}
        >
          {reveal ? (
            <div className="flex items-center gap-2">
              Next Player
              <ArrowRight />
            </div>
          ) : (
            "Tap to Reveal"
          )}
        </button>
      </div>
    </div>
  );
}

type GameMenuProps = {
  players: number;
  playerHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};
function GameMenu({ playerHandler, players, setGameStart }: GameMenuProps) {
  return (
    <div className="  p-4 flex flex-col gap-8 items-center justify-center text-black min-h-[calc(100vh-77px)]">
      <div className="flex items-center gap-8">
        <button
          className="shadow-lg bg-red-500 text-white text-2xl px-4 py-2 rounded-lg border flex items-center justify-center mx-2"
          onClick={playerHandler}
        >
          -
        </button>
        <div className="bg-white w-40 h-40 rounded-2xl flex flex-col items-center justify-center shadow-lg ">
          <Image
            src={groupUsers}
            width={512}
            height={512}
            alt="groupUsers"
            className="w-20"
          />
          <h5 className="text-xl">
            <span className="font-bold">{players}</span> Players
          </h5>
        </div>
        <button
          className="shadow-lg bg-red-500 text-white text-2xl px-4 py-2 rounded-lg border flex items-center justify-center mx-2"
          onClick={playerHandler}
        >
          +
        </button>
      </div>

      <button
        className="bg-green-600 border cursor-pointer text-white w-40 h-20 rounded-full flex items-center justify-center mt-20 shadow-lg font-medium"
        onClick={() => setGameStart(true)}
      >
        Start Game
      </button>
    </div>
  );
}
