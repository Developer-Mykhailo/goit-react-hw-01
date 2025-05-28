import Container from "./components/Container/Container";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import user from "./data/userData.json";
import friends from "./data/friends.json";

function App() {
  return (
    <>
      <Container>
        <Profile {...user} />
        <FriendList friends={friends} />
      </Container>
    </>
  );
}

export default App;
