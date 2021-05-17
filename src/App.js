import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Career } from "./pages/Career";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/HomeInterior";
import { HomeLanding } from "./pages/HomeLanding";
import { Landing } from "./pages/Landing";
import { Rooms } from "./pages/Rooms";
import { Services } from "./pages/Services";
function App() {
  // const [loading, setloading] = useState(true);
  const supportsHistory = "pushState" in window.history;

  // useEffect(() => {
  //   setloading(false);
  // }, []);
  // if (loading) return <div className="page-loader"></div>;
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Route exact path="/" component={HomeLanding} />
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/home/:type" component={Home} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/solutions" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/:type" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
