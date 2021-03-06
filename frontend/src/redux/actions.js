export const SET_SONG = "SET_SONG";
export const SET_QUEUE = "SET_QUEUE";
export const CLEAR_SONG = "CLEAR_SONG";
export const CLEAR_QUEUE = "CLEAR_QUEUE";
export const SET_TOAST = "SET_TOAST";
export const CLEAR_TOAST = "CLEAR_TOAST";
export const SET_SHUFFLE = "SET_SHUFFLE";
export const SET_QUEUE_IDX = "SET_QUEUE_IDX";
export const SET_MODAL_SHOW = "SET_MODAL_SHOW";
export const SET_MODAL_STATE = "SET_MODAL_STATE";
export const SET_MODAL_LOADING_SONG = "SET_MODAL_LOADING_SONG";
export const SET_MODAL_LOADING_URL = "SET_MODAL_LOADING_URL";
export const SET_MODAL_EDITED_SONG = "SET_MODAL_EDITED_SONG";
export const SET_SONG_PLAYING = "SET_SONG_PLAYING";
export const SET_FORCE_UPDATE = "SET_FORCE_UPDATE";
export const SET_DRAGGING = "SET_DRAGGING";
export const SET_SCROLLABLE = "SET_SCROLLABLE";
export const SET_QUEUE_SHOW = "SET_QUEUE_SHOW";
export const REMOVE_FROM_QUEUE = 'REMOVE_FROM_QUEUE';
export const SET_USER = "SET_USER";

export function setSong(song){
    return { type : SET_SONG, song };
}

export function clearSong(){
    return { type : CLEAR_SONG };
}

export function setSongPlaying(play){
    return {type : SET_SONG_PLAYING, play };
}

export function setQueueIdx(idx){
    return { type : SET_QUEUE_IDX, idx };
}

export function setQueue(queue){
    return {type : SET_QUEUE, queue };
}

export function clearQueue(){
    return { type : CLEAR_QUEUE };
}

export function setToast(toast){
    return { type : SET_TOAST, toast };
}

export function clearToast(){
    return { type : CLEAR_TOAST };
}

export function setShuffleState(shuffle){
    return { type : SET_SHUFFLE, shuffle };
}

export function setModalState(mState){
    return { type : SET_MODAL_STATE, mState };
}

export function setModalShow(show){
    return { type : SET_MODAL_SHOW, show };
}

export function setModalEditedSong(song){
    return { type : SET_MODAL_EDITED_SONG, song };
}

export function setModalLoadingSong(loading){
    return { type : SET_MODAL_LOADING_SONG, loading };
}

export function setModalLoadingURL(url){
    return { type : SET_MODAL_LOADING_URL, url };
}

export function setForceUpdate(val){
    return { type : SET_FORCE_UPDATE, val };
}

export function setDragging(val){
    return { type : SET_DRAGGING, val };
}

export function setScrollable(val){
    return { type : SET_SCROLLABLE, val };
}

export function setQueueShow(show){
    return {type : SET_QUEUE_SHOW, show };
}

export function removeFromQueue(idx){
    return {type : REMOVE_FROM_QUEUE, idx };
}

export function setUser(user){
    return {type : SET_USER, user};
}