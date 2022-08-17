import { Button, ListGroup, Nav } from "react-bootstrap";
import Child from "./Components/Child";
import Content from "./Components/Content";
import FirstRedux from "./Components/FirstRedux";
import { ReducerHook } from "./Components/ReducerHook";
import { AppProvider } from "./Context/appContext";

function App() {
  return (
    <AppProvider>
      <ListGroup>
        <Nav>
          <Nav.Item>
            <Child />
          </Nav.Item>
        </Nav>
        <ListGroup.Item>
          <h2>Use Reducer</h2>
          <ReducerHook />
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Use Context</h2>
          <Content />
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Reducer</h2>
          <FirstRedux />
        </ListGroup.Item>
      </ListGroup>
    </AppProvider>
  );
}

export default App;
