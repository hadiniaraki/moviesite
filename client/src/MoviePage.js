import React, { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function MoviePage() {
  const ss = useLocation().state.folderPath;
  const sm = ss.replace("/home/moj", "https://alljs.ir/moj"); 
 const [movieInFolder, setMovieinFolder] = useState([]);
  useEffect(() => {
    axios
      .get("https://albertcamus.website/mif/", {
        params: {
          path: ss,
        },
      })
      .then(function (response) {
       	 setMovieinFolder(response.data);
      });
  }, []);

 const justMp4 = useMemo(()=> movieInFolder.filter(checkmp4), [movieInFolder]);

 function checkmp4(e){
   return e.includes("mp4");
 }

  return (
    <div id="mf_container">
      {justMp4.map((e) => (
	 <Link className="movie_folder1" to="/play" state={{ fileUrl: `${sm}/${e}` }}>
           {e.replace(".mp4", "")}
       	 </Link>
      ))}
    </div>
  );
}

export default MoviePage;
