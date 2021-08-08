# Short introduction to Atlassian API 

Welcome to our coding test!

The purpose of this test is to help us see how you solve problems in code,
and to learn about the decision and choices you make when coding.

API give possibility to create product sales dashboard application, it's for training purpose.
Thanks to that you can create something similar to Jira by your own !

## How to install

Run `npm install` to pull in all dependencies.

## How to run

The following commands will be helpful to you:

- `npm run start` - starts the server at http://localhost:9000.
- `npm run build` - builds the assets for the front-end once.
- `npm run watch` - builds the assets for the front-end whenever they change.

## How it works

This application pretends to expose data about new customers who buy products in realtime via REST.

There are two endpoints:

```
GET http://localhost:9000/products
```

Exposes general information about all available products.

```
GET http://localhost:9000/products/{product-id}
```

## Getting started

If you run the `start` script and open your browser, you will see a mockup for what the final app should be like.

## How to use this API 

We can use this application as standalone REST server (as entry point in your React application You can use http://localhost:9000)

