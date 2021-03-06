
// this is a file containing all the possible interfaces that are going to be used in the project.

export interface IMediaData {
  file_id: number;
  user_id: number;
  filename: string;
  filesize: number;
  title: string;
  description: string;
  media_type: string;
  mime_type: string;
  time_added: string;
  screenshot?: string;
  thumbnails?: Thumbnail;
  seats?:number,
  parsedDesc?:string,
  date?:string,
}

export interface ITagMediaData{
  "file_id": number,
  "tag": string,
  "filename": string,
  "filesize":number,
  "title": string,
  "description"?: string,
  "user_id": number,
  "media_type": string,
  "mime_type": string,
  "time_added": string,
}

export interface IFileUploadResponse {
  message: string,
  file_id: number,
}

export interface Thumbnail
{
  w160?: string;
  w320?: string;
  w640?: string;
}

export interface User {
  user_id?: number;
  username: string;
  password?: string;
  email?: string;
  date_created?: Date;
  full_name?: string;
}

export interface iCommentResponse {
  comment_id:number,
  file_id:number,
  user_id:number,
  comment:string,
  time_added:string,
}


export interface Loginresponse {
  massage: string;
  token: string;
  user: User;
}

export interface iListOfFavourites {
  favourite_id?: number,
  file_id?: number,
  user_id?: number,
}
