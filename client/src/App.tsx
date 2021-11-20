import React from 'react';
import './App.scss';
import Content from './Content/Content';
import Jump from './Jump/Jump';
import Comment from './Comment/Comment';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { PhotoData, Photo, SubmitComment, ContentProps } from './tools/PhotoAlbum.model';
import { getJSONData, sendJSONData} from "./tools/Toolkit";

// URL to Web API
const RETRIEVE_SCRIPT:string = "http://localhost/retrieveAlbum.php?count=11";
const SEND_SCRIPT:string = "http://localhost:8080/get";

const App = () => {

  // Recieving data from API
  const onResponse = (result:PhotoData) => {
    // console.table(result);
    setPhotos(result.photos);
    setLoading(false);
    if(index === 0){
      console.log(index);
    }
  };
  // Clicking the next button
  const nextPhoto = () => {
    if(index < photos.length -1){
      setIndex(index + 1);
      console.log("Setting index next: " + index);
    }
  }
  // Clicking the previous button
  const previousPhoto = () => {
    if(index > 0 ){
      setIndex(index - 1);
      console.log("Setting index previous: " + index);
    }
  }
  // Clicking the jump button
  const showJump = () => {
    if(jump === true){
      setJump(false);
    }
    else {
      setJump(true);  
    }
  }
  // Clicking the comment button
  const showComment = () => {
    if(commentMenu === true){
      setCommentMenu(false);
    }
    else {
      setCommentMenu(true);  
    }
  }
  // loading all of the photo data from web api
  const loadPhotos = () => {
    getJSONData(SEND_SCRIPT, onResponse, onError)
  }
  // Error message if the data is not recieved
  const onError = (message:string) => console.log("*** Error has occured during AJAX data transmission: " + message);

  React.useEffect(() => {loadPhotos()}, []);

  // ---------------------------------------------- State Variables
  const [loading, setLoading] = React.useState<boolean>(true);
  const [jump, setJump] = React.useState<boolean>(false);
  const [commentMenu, setCommentMenu] = React.useState<boolean>(false);
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [index, setIndex] = React.useState<number>(0);

  // ---------------------------------------------- Lifecycle Hooks
  return (
    <div className="main">
      {/* Loading overlay  */}
      <LoadingOverlay bgColor="#808080" spinnerColor="#FF4433" enabled={loading} />

      <h1 className="header-text" >Ethan's Photo Album Full Stack Web Application V2.0</h1>
      <div className="btn-group" style={{"width" : "100%"}} >
        <button style={{"width" : "25%", backgroundColor: (index===0)? "#000000" : "#555555"}} onClick={() => {previousPhoto();}} disabled={(index === 0) ? true : false}>Previous</button>
        <button style={{"width" : "25%", backgroundColor: (index < photos.length-1)? "#555555" : "#000000"}} onClick={nextPhoto} disabled={(index < photos.length-1) ? false : true}>Next</button>
        <button style={{"width" : "25%"}} onClick={showJump}>Jump</button>
        <button style={{"width" : "25%"}} onClick={showComment}>Comment</button>
      </div>
      {/* Jump component  */}
      <Jump enabled={jump} photo={photos} setIndex={setIndex} currentIndex={index}></Jump>
      {/* Comment component */}
      <Comment enabled={commentMenu} showComment={showComment} setLoading={setLoading} photo={photos[index]} refresh={loadPhotos} successSubmit={setCommentMenu}></Comment>
      {/* photo counter */}
      <h3 className="header-text" > Photo {index + 1} of {photos.length}</h3>
      {/* Content Component */}
      <Content photo={photos[index]}></Content>

    </div>
  );
}

export default App;
