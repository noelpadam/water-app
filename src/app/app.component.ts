import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'water-app';
  images = [124, 700, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  private modalService = inject(NgbModal);



  constructor() {
    this.open();
  }

	open() {
		const modalRef = this.modalService.open(NgbdModalContent);
		modalRef.componentInstance.name = 'World';
	}
  
}


import { inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-content',
	template: `
		<div class="modal-header">
			<h4 class="modal-title">High Quality H20.</h4>
			<!-- <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button> -->
		</div>
		<div class="modal-body">
			<img src="bisleri-mineral-water-500.jpg" style="width:100%; height: 150px;"/>
      <p><label>Price</label>: <span>1 $</span></p>
      <p class="sold-out"><span>Sold Out!</span></p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-primary" (click)="buyBottle()">BUY!</button>
		</div>
	`,
  styles: `
    h4.modal-title {
      text-align: center;
      width: 100%;
    }

    .modal-body p {
      font-size: 16px;
      font-weight: 500;


    }

    p.sold-out {
      font-size: 24px !important;
      color: red;
    }
  `
})
export class NgbdModalContent implements OnInit {
	activeModal = inject(NgbActiveModal);

  constructor() {
   
  }

  ngOnInit() {
    this.activeModal.update({ centered: true });
  }

  buyBottle() {
    console.log("buy...");
  }

}

