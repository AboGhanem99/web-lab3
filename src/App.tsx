import './App.css'
import NumericInput from './elements/NumericInput'
import KeywordInput from './elements/KeywordInput'
import DateSelection from './elements/DateSelection'
import Accordion from './elements/Accordion'
function App() {

  return (
    <div >
      <h1 className=' text-center font-bold text-xl my-8 '>AboGhanem Awsan lab3 </h1>
      <NumericInput />
      <KeywordInput />
      <DateSelection />
      <Accordion />
    </div>

  )
}

export default App
