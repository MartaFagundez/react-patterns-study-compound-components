import ProductCard from "./components/cards/ProductCard";
import ProfileCard from "./components/cards/ProfileCard";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-gray-100">
        <ProfileCard
          name="Jane Doe"
          bio="Desarrolladora web y diseñadora apasionada por la tecnología y el arte."
          avatar="https://i.pravatar.cc/150?img=3"
          social={[
            { platform: "Twitter", url: "https://twitter.com/janedoe" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
          ]}
        />

        <ProductCard
          name="Wireless Headphones"
          imageUrl="https://res.cloudinary.com/dbiyjz0g3/image/upload/c_pad,b_gen_fill,w_600,h_330/v1742215435/Practice-Projects/headphones_w_q8toyw.jpg"
          description="High-quality wireless headphones with noise cancellation and long battery life."
          price="129.99"
        />
      </div>
    </div>
  );
}
export default App;
