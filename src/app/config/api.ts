import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://lrp.mainlandcode.com/v1/api'
  : 'https://lrp.mainlandcode.com/v1/api';
//   'http://localhost:3300'
// : 'http://localhost:3300';
// export const productsUrl = baseUrl + '/products';
// export const cartUrl = baseUrl + '/cart';
// export const wishlistUrl = baseUrl + '/wishlist';
