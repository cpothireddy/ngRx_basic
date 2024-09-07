import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterSateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterSateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterSateUrl {
    let route = routerState.root;

    // if you above dev tools, you will see lot of firstChild, and other unnessary objects, to copy only the actaul data, use below code.
    while (route.firstChild) {
      route = route.firstChild;
    }

    // the below are final object properties we can see in dev tools now
    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
