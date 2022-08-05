import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-directives',
  template: `
    <p>
      my-directives works!
    </p>
  `,
  styles: [
  ]
})
export class MyDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
