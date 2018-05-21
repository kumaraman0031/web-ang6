import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	slider= [
		{image:'https://www.w3schools.com/bootstrap4/la.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/chicago.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/ny.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/la.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/chicago.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/ny.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/la.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/chicago.jpg',
		},
		{image:'https://www.w3schools.com/bootstrap4/ny.jpg',
		}
		
	]
	business =[
		{
			title:'Mobile Application Development',
			image:'assets/images/team/mobile.png',
			text:'Looking to make your business reach the billions of mobile users? We provide turn-key mobility solutions to metamorphose your business by leaps and bounds. We are a team of expert Android, iOS and Hybrid mobile application developers.',
			link:''
		},
		{
			title:'Custom Development',
			image:'assets/images/team/web.png',
			text:'Get Instant websites to high-end custom portals, E-commerce Solutions, Cloud based distributed software solutions, Rich Internet Applications from scratch using open source technologies PHP, Java, Javascript, Node.js, Angular js.',
			link:''
		},
		{
			title:'Cms Development',
			image:'assets/images/team/software.png',
			text:'Adobe Experience Manager, SiteCore, Drupal, Magento, Hybris, Wordpress : Our Skilled workforce is adept in development using proprietary and open source CMS. We follow defined best practices & streamlined processes for every project.',
			link:''
		}
	]
	
slideItem: number = 0;
	slideNext(){
		if(this.slideItem < (this.slider.length-1)){
					this.slideItem = this.slideItem + 1;
		}
	}
	slidePrev(){
		if(this.slideItem < (this.slider.length)){
			this.slideItem = this.slideItem - 1;
		}
		
	}
	autoSlide (){
		      setInterval(() => {
		  
		  if(this.slideItem < (this.slider.length-1)){
				  
		  }else{
			  this.slideItem = 0;
		  }
     
    }, 2000);
	}
  constructor() {
	  this.autoSlide();
	  
  }

  ngOnInit() {
  }

}
