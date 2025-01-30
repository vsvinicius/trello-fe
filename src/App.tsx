import TopBar from './components/top-bar/TopBar';
import Card from './components/card/Card'
import Empty from './components/empty-card/EmptyCard';


function App() {

  return (
    <>
      <TopBar />
      <Card 
        title= 'Título'
        content= 'Conteúdo'
        labelColors={['#957050']}
      />
      <Card 
        title='Hey'
        content='Hey you'
        labelColors={['blue', 'red']}
      />
      <Card 
        title='Hey again'
        content='Hey you again'
        labelColors={['blue', 'red','green']}
      />
      <Empty />
    </>
  )
}

export default App
