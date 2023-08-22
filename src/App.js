import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Career } from "./pages/Career";
import { ComingSoon } from "./pages/ComingSoon";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { HomeInterior } from "./pages/HomeInterior";
import { HomeLanding } from "./pages/HomeLanding";
import { NotFound } from "./pages/NotFound";
import { Rooms } from "./pages/Rooms";
import { Services } from "./pages/Services";
import { SingleRoomView } from "./pages/SingleRoomView";
function App() {
  const supportsHistory = "pushState" in window.history;
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Route exact path="/" component={HomeLanding} />
        <Route exact path="/single-room/:roomname" component={SingleRoomView} />
        <Route exact path="/home/:type" component={HomeInterior} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/solutions" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/gallery/:type" component={Gallery} />
        <Route exact path="/coming-soon" component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
