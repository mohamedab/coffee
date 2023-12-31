import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Order} from "../models/order";
import {CartService} from "../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  cart: Order[] = [];
  hidden: boolean = true;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCart().subscribe((cart: Order[]) => {
      if(cart.length > 0) {
        this.hidden = false;
        this.cart = cart;
      } else {
        this.hidden = true;
      }
    })
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
