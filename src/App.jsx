import Accordion from "./components/accordions/Accordion";
import ProductCard from "./components/cards/ProductCard";
import ProfileCard from "./components/cards/ProfileCard";
import Tabs from "./components/tabs/Tabs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 min-h-screen bg-gray-100 py-12 px-4">
      <div>
        <p className="mb-2 text-2xl text-center text-gray-900 md:text-4xl uppercase">
          React Patterns
        </p>
        <h1 className="mb-4 text-5xl font-extrabold text-center text-gray-900 md:text-6xl">
          Compound Components
        </h1>
      </div>

      {/* SECTIONS CONTAINER */}
      <div className="flex flex-col justify-center items-center gap-28">
        {/* CARDS */}
        <section className="flex flex-col justify-center items-center gap-8">
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-900 md:text-3xl uppercase">
            Cards
          </h2>
          <ProfileCard
            name="Jhon Doe"
            bio="Web developer and designer passionate about technology and art."
            avatar="https://i.pravatar.cc/150?img=3"
            social={[
              { platform: "Twitter", url: "https://twitter.com/jhondoe" },
              { platform: "LinkedIn", url: "https://linkedin.com/in/jhondoe" },
            ]}
          />

          <ProductCard
            name="Wireless Headphones"
            imageUrl="https://res.cloudinary.com/dbiyjz0g3/image/upload/c_pad,b_gen_fill,w_600,h_330/v1742215435/Practice-Projects/headphones_w_q8toyw.jpg"
            description="High-quality wireless headphones with noise cancellation and long battery life."
            price="129.99"
          />
        </section>

        {/* ACCORDIONS */}
        <section className="flex flex-col justify-center items-center gap-8">
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-900 md:text-3xl uppercase">
            Accordions
          </h2>

          {/* Ejemplos usando la versión 1 */}
          {/* <Accordion>
            <Accordion.Header>¿Qué es React?</Accordion.Header>
            <Accordion.Body>
              React es una biblioteca de JavaScript para construir interfaces de
              usuario interactivas y eficientes.
            </Accordion.Body>
          </Accordion>

          <Accordion>
            <Accordion.Header>¿Qué es React?</Accordion.Header>
            <p className="text-sm text-gray-500 px-4 pb-1">
              Pregunta frecuente
            </p>
            <Accordion.Body>
              React es una biblioteca de JavaScript para construir interfaces de
              usuario interactivas y eficientes.
            </Accordion.Body>
          </Accordion>

          <Accordion>
            <Accordion.Header>Menú</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Contacto</li>
              </ul>
            </Accordion.Body>
          </Accordion> */}

          {/* Ejemplo usando la segunda versión  */}
          <Accordion isExclusive={true}>
            <Accordion.Item index={0}>
              <Accordion.Header>¿Qué es React?</Accordion.Header>
              <Accordion.Body>
                React es una biblioteca de JavaScript para construir interfaces
                interactivas.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item index={1}>
              <Accordion.Header>¿Qué es un componente?</Accordion.Header>
              <Accordion.Body>
                Un componente es una pieza reutilizable de la UI en React.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item index={2}>
              <Accordion.Header>¿Cómo funciona el estado?</Accordion.Header>
              <Accordion.Body>
                El estado permite a los componentes de React manejar datos
                dinámicos.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        <section className="flex flex-col justify-center items-center gap-8">
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-900 md:text-3xl uppercase">Tabs</h2>
          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab index={0}>Descripción</Tabs.Tab>
              <Tabs.Tab index={1}>Especificaciones</Tabs.Tab>
              <Tabs.Tab index={2}>Opiniones</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panels>
              <Tabs.Panel>
                <p>
                  Este es un producto increíble con muchas características
                  avanzadas.
                </p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p>
                  Peso: 1.2 kg, Dimensiones: 25 x 15 x 10 cm, Material: Aluminio
                </p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p>
                  ⭐⭐⭐⭐⭐ - ¡Me encantó este producto! Lo recomiendo mucho.
                </p>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
export default App;
