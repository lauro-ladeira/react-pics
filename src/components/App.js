import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubimit(term) {
    const response = await axios.get(
      "https://api.unsplash.com//search/photos/?client_id=1a63a80e7aa16aa0f99ffc13db8e743edb1f8f15be36f2ae9d2cea9687fee099",
      {
        params: { query: term }
      }
    );

    console.log(response);
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
//fazendo api requests
