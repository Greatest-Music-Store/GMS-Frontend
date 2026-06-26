import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlignDirective } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matDashboardOutline, matSupervisedUserCircleOutline, matLogoutOutline, matSpaceDashboardOutline} from '@ng-icons/material-icons/outline'
import { bootstrapBagFill } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-aside',
  imports: [RouterLink, AlignDirective, NgIcon],
  templateUrl: './aside.html',
  viewProviders: provideIcons({ matDashboardOutline, bootstrapBagFill, matSupervisedUserCircleOutline, matLogoutOutline, matSpaceDashboardOutline})
})
export class Aside {}
