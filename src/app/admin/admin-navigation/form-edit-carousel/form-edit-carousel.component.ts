import { CarouselService } from './../../../_services/carousel.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-edit-carousel',
  templateUrl: './form-edit-carousel.component.html',
  styleUrls: ['./form-edit-carousel.component.scss']
})
export class FormEditCarouselComponent implements OnInit, OnDestroy {
  private _subscription$: Subscription;

  isSubmitted = false;
  imageUpload;
  file: any;
  chooseFile = 'Choose file (required)';
  product = {
    id: '',
    name: '',
    miniDescription:'',
    mimetype: '',
    data: null
  }
  _subscription2$: Subscription;
  imageDataUrl: string| ArrayBuffer;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carouselService: CarouselService ) { }

  ngOnInit(): void {
    this.getCarouselById(this.route.snapshot.paramMap.get('id'));
  }

  getCarouselById(id): void {
    this._subscription$ = this.carouselService.getCarousels(id)
    .subscribe( data => {
      this.product =  data;
      this.chooseFile = this.product.name;
      this.imageDataUrl = 'data:'+this.product.mimetype+';base64,'+this.product.data.toString('base64');
      
    }, err => { console.log(err); }
     );
  }
  
  ngOnDestroy(): void {
    if(this._subscription$){ this._subscription$.unsubscribe();}
    if(this._subscription2$) {this._subscription2$.unsubscribe();}
  }


  onFileChanged (event) :void {
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.imageUpload = file;
      this.chooseFile = file.name;
      this.imageDisplay();
    } 
  }

  imageDisplay(){
    if ( this.imageUpload !== null || undefined ){
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageDataUrl = e.target.result;
      };
      reader.readAsDataURL(this.imageUpload);
    }
  }

  updateCarousel() :void {
    const formData = this.dataCollector()
    this._subscription2$ = this.carouselService.updateCarousel(this.product.id, formData)
    .subscribe( res => {
      console.log(res);
      this.router.navigate(['admin/edit/']);
    }, err => {console.log(err.message);
    });
  }


  dataCollector() {
    let formData = new FormData();
    if ( this.imageUpload !== null || undefined ){
      formData.append('file', this.imageUpload);
      const newData = this.dataPasser(formData)
      return newData;
    } else {
      const otherData = this.dataPasser(formData);
      return otherData;
    }
  }

  dataPasser(data) {
    data.append('name', this.product.name);
    data.append('miniDescription', this.product.miniDescription);
    return data;
  }
}
