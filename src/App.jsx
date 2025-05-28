import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import user from "./data/userData.json";

function App() {
  return (
    <>
      <Container>
        <Profile {...user} />
      </Container>
    </>
  );
}

export default App;
