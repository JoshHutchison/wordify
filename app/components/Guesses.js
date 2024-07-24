import LetterGrid from './LetterGrid';

export default function Guesses({ guesses, finalWord }) {
  return (
    <div className="mb-4">
      {guesses.map((guess, index) => (
        <LetterGrid key={index} guess={guess} finalWord={finalWord} />
      ))}
    </div>
  );
}