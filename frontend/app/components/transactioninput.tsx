// For input of copied and pasted textual transaction data from bank website
export function TransactionInput() {
  return (
    <div className="flex justify-center items-center bg-blue-400 h-50 w-screen">
      <form>
        <span className="text-2xl font-extralight">Paste <strong className ="font-extralight">Transactions</strong> Here: </span><input className="bg-amber-50 text-2xl p-1 border-black border-1 text-black m-3" name="query" />
        <button className="border-black text-2xl border-1 border-white p-1 font-extralight" type="submit">ANALYSE</button>
      </form>



    </div>
  )
}