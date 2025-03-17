import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProfileCard
        name="Jane Doe"
        bio="Desarrolladora web y diseñadora apasionada por la tecnología y el arte."
        avatar="https://i.pravatar.cc/150?img=3"
        social={[
          { platform: "Twitter", url: "https://twitter.com/janedoe" },
          { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
        ]}
      />
    </div>
    </div>
  )
}
export default App