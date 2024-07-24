export default function LetterGrid({ guess, finalWord }) {
  return (
    <div className="flex justify-center mb-2">
      {guess.split('').map((letter, index) => {
        let bgColor = '';
        if (letter === finalWord[index]) {
          bgColor = 'bg-green-300';
        } else if (finalWord.includes(letter)) {
          bgColor = 'bg-yellow-300';
        }
        return (
          <div 
            key={index} 
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center mx-1 ${bgColor}`}
          >
            {letter.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}