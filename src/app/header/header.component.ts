import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	
	logo=['assets/images/logo.png']
  menu =[
	  {name:'home',link:'home',},
	  {name:'company',link:'dfs',submenu:
	  [
		  {name:'about us ',link:'about'},
		  {name:'brochure',link:'sd'},
		  {name:'careers',link:'careers'}
	  ]
	  },
	  {name:'services',link:'#',
	  submenu:
	  [
		  {name:'mobile application devlopment ',link:'mobile'},
		  {name:'cms devlopment',link:'cms'},
		  {name:'cyber Security solutions',link:'cubersecurity'},
		  {name:'robotic parocess automation',link:'rpa'},
		  {name:'robotics & IoT',link:'roboticsiot'},
		  
	  ],
	  submenu2:[
		  {name:'custom development',link:'custom'},
		  {name:'devOps consulting',link:'devops'},
		  {name:'test automation',link:'testautomation'},
		  {name:'digital marketing',link:'digitalmarketing'},
	  ]},
	  {name:'solution',link:'solutions'},
	  {name:'how we work',link:'#',
	  submenu:
	  [
		  {name:'engagement models',link:'engagementmodels'},
		  {name:'development process',link:'developmentprocess'}
	  ]},
	  {name:'portfolio',link:'#',
	  submenu:
	  [
		  {name:'industries we cater to',link:'iwct'},
		  {name:'work done',link:'workdone'},
		  {name:'client presence',link:'clientpresence'},
		  {name:'client testimonials',link:'clienttestimonials'}
	  ]},
	  {name:'blog',link:'blog'},
	  {name:'contact us',link:'contact'}
  ]
		showMenu = false;
	manuToggel(tog){
		this.showMenu = !this.showMenu;
		
	}
  constructor() {
	  
  }

  ngOnInit() {
  }

}
