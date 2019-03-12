import { Pipe, PipeTransform } from '@angular/core';
import {MediaProvider} from "../../providers/media/media";
import {User} from "../../interfaces/interfaces";

/**
 * Generated class for the CommentUserPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'commentUser',
})
export class CommentUserPipe implements PipeTransform {

  constructor(
    private mediaProvider: MediaProvider,
  ) {}

  transform(id) {
    return new Promise((resolve, reject) => {
        this.mediaProvider.getUserInfo(id).subscribe( (res:User) =>{
          console.log('resolving username: ' + res.username);
          resolve(res.username)
        })
    })
  }
}
