
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
}

export interface Thumbnail
{
  160?: string;
  320?: string;
  640?: string;
}

