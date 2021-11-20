import React from 'react';
import { JumpPhoto, Photo } from '../tools/PhotoAlbum.model';
import './Jump.scss';

const Jump = ({enabled, photo, setIndex, currentIndex}:JumpPhoto) => {


    return (
        (enabled)
        ?
        <div>{photo.map((photos:Photo, i:number) => {return(<img className="jumpImage" key={i} src={"/images/photos/" + photos.source} onClick={() => setIndex(i)} style={{height:'50px', width:'50px'}} />)})}</div>
        :
        <div></div>
    )
}

export default Jump;