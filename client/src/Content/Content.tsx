import React from 'react';
import './Content.scss';
import {ContentProps, Comment, Photo } from "./../tools/PhotoAlbum.model";


const Content = ({photo}:ContentProps) => {

    return (
        (photo === undefined) ?
            <div className="content">
                <p id="NoImage" >There are no images to display.</p>
            </div>
        :
            <div className="content">
                <div className="content__picture">
                    <img id="mainPicture" src={"/images/photos/" + photo.source}/>
                </div>
                <div className="content__title" id="mainPictureTitle">{photo.title}</div>
                <div className="content__caption" id="mainPictureCaption">{photo.caption}</div>
                <div className="content__comment" id="mainPictureComments">{photo.comments.map((comments:Comment, i:number) => {
                    return (
                        <div key={i} className="content__comment">
                            <strong>Author:</strong> {comments.author}<br/>
                            <strong>Comment:</strong>{comments.comment}
                        </div>
                    )
                } ) }</div>
            </div>
    )
    
}

export default Content;