import { Router, CanActivateFn } from '@angular/router';
import { AuthStore } from '../stores/auth.store';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
