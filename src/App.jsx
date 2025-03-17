import ProductCard from "./components/cards/ProductCard";
import ProfileCard from "./components/cards/ProfileCard";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 min-h-screen bg-gray-100 py-12 px-4">
      <div>
        <p className="mb-2 text-2xl text-center text-gray-900 md:text-4xl uppercase">
          React Patterns
        </p>
        <h1 className="mb-4 text-5xl font-extrabold text-center text-gray-900 md:text-6xl">
          Compound Components
        </h1>
      </div>

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
    </div>
  );
}
export default App;
