import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import DetailUserPage from "./pages/DetailUserPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/user/:id" component={DetailUserPage} />
        <Route exact path="/post/:id" component={PostDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
