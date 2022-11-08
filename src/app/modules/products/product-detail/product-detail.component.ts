import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.id = +params.get('id')
    })
  }

}
