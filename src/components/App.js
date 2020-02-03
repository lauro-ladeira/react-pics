import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubimit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubimit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// refatorando o app componente p classe pra ele passar uma prop pra children com uma função de callback,
//fazendo api requests
//separou uma pasta soh pras api
//componente ImageList
