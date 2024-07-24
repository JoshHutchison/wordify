export default function Submit({ currentGuess, setCurrentGuess, handleGuess, finalWord }) {
  const onSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.trim() !== '' && currentGuess.length === finalWord.length) {
      handleGuess(currentGuess.toLowerCase());
      setCurrentGuess('');
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form className="flex gap-4" onSubmit={onSubmit}>
        <input
          className='text-black border p-2 rounded'
          type="text"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          placeholder="Enter guess"
          maxLength={finalWord.length}
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' type="submit">Submit</button>
      </form>
    </div>
  );
}