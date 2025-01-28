import TopBar from './components/top-bar/TopBar';
import Card from './components/card/Card'

function App() {

  return (
    <>
      <TopBar />
      <Card 
        title= 'Título'
        content= 'Conteúdo'
      />
      </>
  )
}

export default App
