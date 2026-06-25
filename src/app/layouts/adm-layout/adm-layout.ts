import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-adm-layout',
  imports: [RouterOutlet,Footer],
  templateUrl: './adm-layout.html',
})
export class AdmLayout {}
