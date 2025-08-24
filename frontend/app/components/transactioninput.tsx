// For input of copied and pasted textual transaction data from bank website
export function TransactionInput() {
  return (
    <div className="flex justify-center items-center bg-blue-400 h-50 w-screen">
      <form>
      <input placeholder="Paste Transactions Here" className="placeholder-gray-200 bg-amber-50 text-2xl p-3 border-green-300 border-1 text-black m-3" name="query" />
        <button className="border-green-400 text-2xl border-1 border-red-white p-3 font-extralight" type="submit">ANALYSE</button>
      </form>



    </div>
  )
}