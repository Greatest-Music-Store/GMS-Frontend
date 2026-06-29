import { Component, signal } from '@angular/core';
import { UserBlockModal } from '../../components/modal/user-block-modal/user-block-modal';
type AdminModal =
  | 'userBlock'
  | null;

@Component({
  selector: 'app-users',
  imports: [UserBlockModal],
  templateUrl: './users.html',

})
export class UsersAdmPage {
  activeModal = signal<AdminModal>(null);

  openModal(modal: AdminModal) {
    this.activeModal.set(modal);
  }

  closeModal() {
    this.activeModal.set(null);
  }

}
