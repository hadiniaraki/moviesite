import React, { useState, useEffect } from "react";
import "video.js/dist/video-js.css";

function Fetch() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("https://albertcanus.website/message")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="Fetch">
      <ul>
        {message.map((item) => (
          <li key={item.index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
