import Profile from "./components/Profile/Profile";
import user from "./data/userData.json";
function App() {
  return (
    <>
      <Profile {...user} />
    </>
  );
}

export default App;
