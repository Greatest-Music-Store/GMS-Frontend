import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../../shared/components/footer/footer';
import { Aside } from '../components/aside/aside';

@Component({
  selector: 'app-adm-layout',
  imports: [RouterOutlet,Footer,Aside],
  templateUrl: './adm-layout.html',
})
export class AdmLayout {}
