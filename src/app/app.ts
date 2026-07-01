import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginRequiredDialog } from "./shared/components/login-required-dialog/login-required-dialog";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginRequiredDialog],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('test');
}
  