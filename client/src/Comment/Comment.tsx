import React, { useState } from 'react';
import './Comment.scss'
import { SubmitComment} from '../tools/PhotoAlbum.model';
import { sendJSONData } from '../tools/Toolkit';


// const SEND_SCRIPT:string = "http://localhost/addComment.php";
const SEND_SCRIPT:string = "http://localhost:8080/addcomment";

const Comment = ({enabled, showComment, setLoading, photo, refresh, successSubmit}:SubmitComment) => {
    // clicking submit button
    const commentSubmission = (e:any) => {
        // turning loading overley on during data transmission
        setLoading(true);
        // setting up data to be sent
        let jsonData:Object = {"photoId": photo._id, "author": author, "comment": comment};
        console.log(jsonData);
        // clearing data from input fields
        setAuthor("");
        setComment("");
        // sending data to server
        sendJSONData(SEND_SCRIPT, JSON.stringify(jsonData), refresh, onError);
        // force refresh of comments
        successSubmit(false);
    }
    // if error ocurrs during transmission
    const onError = (message:string):void => console.log("*** Error has occured during comment AJAX data transmission: " + message);

    const [author, setAuthor] = React.useState<string>("");
    const [comment, setComment] = React.useState<string>("");

    return(
        (enabled)
        ?
        <div className="nav__comment" id="commentMenu">
            <div className="row">
                <label><strong>Author:</strong> </label>
                <div className="row">
                    <input type="text" id="commentAuthor" value={author} onChange={(e:any) => setAuthor(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <label><strong>Comment (200 Characters)</strong>:</label>
                <div className="row">
                    <textarea id="commentContent" value={comment} onChange={(e:any) => setComment(e.target.value)}></textarea>
                </div>
            </div>
            <div className="btn-group">
                <button type="button" id="btnOk" onClick={commentSubmission} disabled={(author==='') || (comment==='') ? true : false}>Ok</button>
                <button type="button" id="btnCancel" onClick={() => showComment(false)}>Cancel</button>
            </div>
        </div>
        :
        <div></div>
    )
}

export default Comment;