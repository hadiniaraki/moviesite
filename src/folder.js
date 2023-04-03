import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { path: [] };
  }

  componentDidMount() {
    fetch("https://albertcamus.website/message")
      .then((res) => res.json())
      .then((data) => this.setState({ path: data }));
  }

  render() {
    return (
      <div id="mf_container">
        {this.state.path.map((e) => (
          <Link className="movie_folder" to="/movies" state={{ folderPath: e }}>
            <img className="movie_cover" src={`${e.replace("/home/moj", "https://albertcamus.website/moj")}/cover.jpg`} alt={'cover'} />
          </Link>
        ))}
      </div>
    );
  }
}
