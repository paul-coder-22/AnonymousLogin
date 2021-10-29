# AnonymousLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ng generate component --skip-tests=true

## easier way to add bootstrap [ng add @ng-bootstrap/schematics]

## ngZone --> Means whenever we want to execute some thing outside of the angular then we use ngZone for better optimization. \*\*On top of that it should be a asyncronus task!!

Counter = 0;
constructor(private zone: Ngzone)
    ngonInit() {
  this.zone. runOutsideAngular( () => {
  for (let i = 0; i< 108; i++) {
  setTimeout(() => this .counter++);
  }
  this.zone.run(() =>{
    setTimeout(() => this.counter = this.counter,1000)
  });
});
}
ngDoCheck() {
console.log(' Change detection has been run! ');
}

$$ Take way : Whenever we use ngZOne we need use anonymous function it's run outside of the functions and formost things is it has to be a this.zone.run(() => );
