import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loaded: boolean;
  public lottieConfig: Object;
  public lottieConfigNotFound: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
    this.loaded = true;
    this.lottieConfig = {
      path: 'assets/animations/simple_loader.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }


  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {
  }

}
