# Atlassian application 

By carrying out this task, I wanted to present the technologies that I consider valuable and used in my daily work. There are some areas that I would like to refactor, but the task was estimated for several hours. In this project I used `VanillaJS, ReactJS, React HOOKS, TypeScript, React Testing Library, SCSS, HTML5`.
It would be worth to adding `GraphQL` (data storage objects are complex) but in this case I would need an additional estimation of "premiere" time :).

When designing the application, I followed my favorite principles, "good programming" practices: `KISS, DRY, SingleResponsibility, transparency of functions, control of side effects, functional approach`.

The data is pulled in a 30-second interval.

## Getting started

This application uses localhost: 9000 as the REST server, so to run the current application we first need to enable REST server. Then we can execute the command `yarn start`.

### Project structure

```
 package.json
.eslintignore
.eslintrc.json
 src 
  ├─ App.jsx 
  ├─ App.test.tsx
  ├─┬ assets
  │ └── scss
  │   └── functions.scss
  │   └── main.scss      //hub for every scss files   
  │   └── variables.scss      
  ├── inerfaces          // folder for every  TS interface
  └── scenes             // folder for "views" - combination of components
  │    └── RootComponent
  │     └── hooks.js     // hooks in this localization are mainly responsible for provide data    
  │     └── index.jsx    
  └── services
  │   └── api
  │     └── constants
  │     └── requests.js // folder for generic HTTP methods
  │     └── utils    
  └── shared
      └── components   //  components that could be shared in whole application
      └── mocks        //  folder for mocked data
      └── utils        //  folder for functions that could be shared in whole application

```
### Basic env configuration
Recommended Node version - `v14.0.0`<br>
Recommended Yarn version - `1.22.0`

### `What issues should you keep in mind when editing this project:`
- I made this application accessible for people with disabilities,
- I smashed styles into scss modules,
- I tested application via "React Profiler" - checking rerender of components state, 
- I left "todo" comments in case I will have free capacity.
- I added some basic tests (reactTestingLibrary)
