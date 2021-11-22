# Usage
Type an ingredient in the search and submit. API only accepts full words.<br/>
Try 'Onion' as string and keep console open.

# Routing
- Search form emits an event with the input when submitted.
- The main component listens for the event and fetches results via http get.
- If we have results, we populate a result list function.
- The result list function is used to loop in the result listing component, calling individual result item components and setting their properties.

## TODO onward
- A lot of if checks...
- Use a centralised object for the found items, so they can be accessed and used more easily. This includes infinite scroll, saving position, items per result set etc.
- Implement on-key search with delay, over submit button, for better UX.
- Add validators for input, min length before setting of on-key.
- Learn more on Angular 13.
- Learn how to better lorem ipsum documentation.

## Angtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

