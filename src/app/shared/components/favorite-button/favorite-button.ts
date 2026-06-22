import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignHeart, tdesignHeartFilled } from '@ng-icons/tdesign-icons';
import { FavoriteModel } from '../../../models/favorite.model';
import { FavoriteService } from '../../../core/services/favorite/favorite';
@Component({
  selector: 'app-favorite-button',
  imports: [NgIcon],
  viewProviders: [provideIcons({tdesignHeart, tdesignHeartFilled})],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.css',
})
export class FavoriteButton {

  constructor(private favoriteService: FavoriteService){}


  button(){
    this.favoriteService.addFavorite
  }
  
}
