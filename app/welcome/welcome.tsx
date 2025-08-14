import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main>
      <p className="text-2xl text-center">BudgetWithBrandon</p>
      <p className="text-center">Welcome! I'm Your AI Personal Finance Coach!</p>
      <hr></hr>
      <p className='text-center'>To begin, choose what format you want your transactions to be displayed in.</p>
      <p className='text-center'>We accept the following <strong>formats</strong>: </p>
      <ul className="text-center">
        <li>Midata (CSV)✅*</li>
        <li>Adobe Acrobat (PDF - feature coming soon) ❌</li>

        <li>Text File (TXT - feature coming soon) ❌</li>
        <li>Microsoft Excel (XLS - feature coming soon) ❌</li>
      </ul>
      <body>
        <p className="text-center">*Note: For the Santander bank, the midata only goes back a year, but you can choose what duration the app will, months, weeks or days.</p>
      </body>
      <hr></hr>
      <div className="flex justify-center">
        <button className="border-2 p-2 border-solid mt-5 mb-5 bg-green-500 hover:bg-green-700">⬆️ Upload .XLS</button>
        <button className="border-2 p-2 border-solid ml-5 mt-5 mb-5 w-x bg-red-500 hover:bg-red-700">⬆️ Upload .CSV</button>
      </div>

      <footer><p className='text-center'>Coded by @brandonodouglas</p></footer>
    </main>

  )
}

// Function that displays all the budgets and checks for overlaps 

