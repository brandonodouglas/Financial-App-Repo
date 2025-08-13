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
      <li>Adobe Acrobat (PDF)</li>
      <li>Midata (CSV) </li>
      <li>Text File (TXT)</li>
      <li>Microsoft Excel (XLS)</li>

    </ul>
    <body>
      <p>hi</p>
    </body>
    <hr></hr>
    <footer><p className='text-center'>Coded by @brandonodouglas</p></footer>
    </main>
    
    )
  }
  
// Function that displays all the budgets and checks for overlaps 

