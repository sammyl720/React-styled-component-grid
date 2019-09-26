import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Grid from "./components/Grid";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Grid min="400px">
        <Card
          title="With Image"
          text="This card has an image"
          img="https://placeimg.com/160/120/people"
        />

        <Card
          color="orange"
          bg="rgb(211,32,190)"
          title="Card number 1"
          text="This is some text for card number 1"
        />
        <Card
          color="orange"
          title="Card number 2"
          width="18em"
          height="10em"
          bg="rgb(22,123,211)"
          block
          margin="10px auto"
          radius="50px"
          text="This is some text for card number 1"
        />
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
