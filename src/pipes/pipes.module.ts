import { NgModule } from '@angular/core';
import { CommentUserPipe } from './comment-user/comment-user';
@NgModule({
	declarations: [CommentUserPipe],
	imports: [],
	exports: [CommentUserPipe]
})
export class PipesModule {}
