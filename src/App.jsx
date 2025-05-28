import Container from "./components/Container/Container";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./data/userData.json";
import friends from "./data/friends.json";
import items from "./data/transactions.json";

function App() {
  return (
    <>
      <Container>
        <Profile {...user} />
        <FriendList friends={friends} />
        <TransactionHistory items={items} />
      </Container>
    </>
  );
}

export default App;
