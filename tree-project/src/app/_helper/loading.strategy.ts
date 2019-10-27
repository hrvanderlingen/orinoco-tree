import { Routes, Route,  RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';



export class LoadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data.preload ? load() : of(null);
    }
  }
  