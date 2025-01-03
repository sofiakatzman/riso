import './App.css'
import Risograph from './component/Risograph'
import RISO1 from './risographs/RISO1'
import RISO2 from './risographs/RISO2'
import RISO3 from './risographs/RISO3'


function App() {

  return (
    <>
      <div className="main">
        <Risograph data={RISO1} />
        <Risograph data={RISO2} />
        <Risograph data={RISO3} />
      </div>
      <p>refresh to restamp the page</p>
    </>
  )
}

export default App
