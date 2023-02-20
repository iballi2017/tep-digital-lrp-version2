import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from './store/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductState } from './store/product.reducer';
import {
  addProduct,
  deleteProduct,
  loadProducts,
} from './store/product.actions';
import { selectProducts } from './store/product.selectors';
import { PlaySound } from 'src/app/models/class/play-sound';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  list: any[] = [];
  products$!: Observable<Product[]>;
  createProductForm!: FormGroup;
  assessmentType: any;
  assessment = [
    {
      type: 'voiceAuto',
      name: 'Voice auto',
    },
    {
      type: 'manual',
      name: 'Manual',
    },
  ];
  toggleType!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _productSvc: ProductService,
    private store: Store<ProductState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.LoadProducts();
    this.buildForm();
  }

  buildForm() {
    this.createProductForm = this._fb.group({
      title: '',
      price: '',
    });

    this.toggleType = this._fb.group({
      toggleControl: true,
    });
  }
  toggle(toggleControl: any) {
    console.log('alli', toggleControl.value);
    console.log('this.toggleType: ', this.toggleType.value);
  }

  Literacy_Note =
    'https://mainlandcode.com/lrpaudios/literacy/Literacy-BG-Audio.mp3';
  _PlayBGSound = new PlaySound(this.Literacy_Note);
  playSound() {
    // let sound = this.Literacy_Note;
    // let _PlayBGSound = new PlaySound(sound);
    this._PlayBGSound.playBGSound();
  }

  pauseSound() {
    this._PlayBGSound.stopSound();
  }

  LoadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
    // // this.store.dispatch(fromActions.loadProducts());
    // const productsObserver = {
    //   next: (products: any) => {
    //     if (products) {
    //       this.list = products;
    //       console.group('this.list: ', this.list);
    //       // this.store.dispatch(
    //       //   fromActions.loadProductsSuccess({ data: this.list })
    //       // );
    //     }
    //   },
    //   error: (err: any) => {
    //     if (err) {
    //       console.warn('Error: ', err);
    //       // this.store.dispatch(fromActions.loadProductsFailure({ error: err }));
    //     }
    //   },
    // };

    // this._productSvc.GetProducts().subscribe(productsObserver);
    // // this.products$ = this.store.pipe(select(selectProducts))
  }

  onAddProduct() {
    console.group(this.createProductForm.value);
    this.store.dispatch(addProduct({ product: this.createProductForm.value }));
  }

  onDelete(Id: any) {
    this.store.dispatch(deleteProduct({ id: Id }));
    // this._productSvc.DeleteProduct(Id).subscribe({
    //   next: (response: any) => {
    //     if (response) {
    //       console.group(response);
    //     }
    //   },
    //   error: (err: any) => {
    //     if (err) {
    //       console.error('Error: ', err);
    //     }
    //   },
    // });
  }
}
