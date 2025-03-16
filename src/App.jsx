import Card from "./components/Card"

function App() {
  return (
    <div>
      <Card>
        <Card.Header>Hola, React!</Card.Header>
        <Card.Body>Este es un ejemplo del patrón de componentes compuestos.</Card.Body>
        <Card.Footer>Footer con información extra.</Card.Footer>
      </Card>
    </div>
  )
}
export default App