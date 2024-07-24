"use client";

import { useState, useEffect } from 'react';
import Guesses from './Guesses';
import Submit from './Submit';
import LetterGrid from './LetterGrid';

const wordList = [
  "every",
  "shout",
  "light",
  "super",
  "words",
  "snowy"
];

function shuffleWord(word) {
  const arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

export default function Main() {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [finalWord, setFinalWord] = useState(() => wordList[Math.floor(Math.random() * wordList.length)]);
    const [scrambledWord, setScrambledWord] = useState(() => shuffleWord(finalWord));
    const [hasWon, setHasWon] = useState(false);

    useEffect(() => {
        setScrambledWord(shuffleWord(finalWord));
    }, [finalWord]);

    const handleGuess = (guess) => {
        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);
        if (guess.toLowerCase() === finalWord) {
            setHasWon(true);
        }
    };

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">Wordify</h1>
                {!hasWon ? (
                    <>
                        {/* <p className="text-center mb-4">Unscramble: {scrambledWord.toUpperCase()}</p> */}
                        <Guesses guesses={guesses} finalWord={finalWord} />
                        <Submit 
                            currentGuess={currentGuess} 
                            setCurrentGuess={setCurrentGuess}
                            handleGuess={handleGuess}
                            finalWord={finalWord}
                        />
                    </>
                ) : (
                    <>
                        <Guesses guesses={guesses} finalWord={finalWord} />
                        <p className="mt-4 p-2 bg-green-200 rounded text-center">YOU WIN!</p>
                    </>
                )}
            </div>
        </main>
    );
}