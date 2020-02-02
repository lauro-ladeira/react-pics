import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {

  onSearchSubimit(TOPterm) {
    console.log(TOPterm);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubimit} />
      </div>
    );
  }
}

export default App;

// refatorando o app componente p classe pra ele passar uma prop pra children com uma função de callback,
