import { Component,output } from '@angular/core';

@Component({
  selector: 'app-user-block-modal',
  imports: [],
  templateUrl: './user-block-modal.html',
})
export class UserBlockModal {
    close = output<void>();
}
