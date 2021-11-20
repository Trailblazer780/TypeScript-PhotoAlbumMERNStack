
export interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
}

export interface PhotoData {
    photos:Photo[];
}

export interface Photo {
    _id:string;
    title:string;
    caption:string;
    source:string;
    comments:Comment[];
}

export interface Comment {
    comment:string;
    author:string;
}

export interface ContentProps {
    photo:Photo;
}

export interface JumpPhoto {
    enabled:boolean;
    photo:Photo[];
    setIndex:Function;
    currentIndex:number;
}

export interface SubmitComment {
    enabled:boolean;
    showComment:Function;
    setLoading:Function;
    photo:Photo;
    refresh:Function;
    successSubmit:Function;
}