<h1 align="center">Taco Carson</h1>

<div align="center">
  <strong>A server side rendered ordering system for a restaurant utilizing sandbox payment systems</strong>
</div>


<div align="center">
  :taco::taco::taco::taco::taco::taco::taco:
</div>




<div align="center">
  <h3>
    <a href="https://tacocarson.netlify.app">
      Visit Taco Carson!
    </a>
    <span> | </span>
    <a href="#">
      CL Notes
    </a>
    <span> | </span>
    <a href="#">
      Local Install
    </a>
    <span> | </span>
    <!-- <a href="#"> -->
    <!--   CLI -->
    <!-- </a> -->
    <!-- <span> | </span> -->
    <a href="#">
      Launching Site
    </a>
    <span> | </span>
    <a href="#">
      Tech Stack
    </a>
    <span> | </span>
     <a href="#">
      Winston
    </a>
  </h3>
</div>


<div align="center">

  <sub>Taco Carson was my final project for <a href=https://codelouisville.org>Code Louisville</a>, a great organization with great people who love to help!

</div>

## CL Notes and comments

  You will need the paypal credentials to login and pay for the order with sandbox money. The user id is `sb-rru8n22231016@personal.example.com` and the password is `tacostacos`
  
  You will also need to follow the directions below to install and run locally.

   The project is 97% done.  The to do list includes getting the grand total state from all items calculated and sent to the store for global use.   For the time being the grand total value is set for $8 regardless of the order and Paypal is set to pay that amount.  Additonally, paypal currently will not route the page and update the cart after purchase.

  The three project requirements I ended up using are:

 - Using React as the platform for the app.

- Using Mongo for a custom JSON export in the menu.

- Using a custom local array in the image carousel.


## Local Installation Instructions

  The files in this repo point to the netlify server and can't be launched locally as is.  The morning of submission, I created a new repo called TacoCarsonLocal.  These files have the API pointed correctly when running and are ready to be run locally. <a href=https://code.visualstudio.com>Visual Studio Code</a> and <a href=https://www.google.com/chrome>Google Chrome</a> are recommend for this app.  After they are downloaded and installed, launch VS Code and pull down the code into a directory with this command in the terminal.


  ```js

https://github.com/CarsonKY/TacoCarsonLocal.git

```

  Next you will need to install all the dependencies found in the package.json file.  To do this, type this command.

```js

npm -install

```

  

## Launching TacoCarson locally

 

  After following the local install directions , you are ready to launch TacoCarson locally on your computer.  To do that, type

```js

yarn dev

```

  This will launch the NextJS app in a browser pointing to localhost on port 3000 and you are ready to order! 

  To launch off the website, the URL is <a href=https://tacocarson.netlify.com>Taco Carson</a>


## Tech Stack:

- __React:__ Built on React

- __React Redux+Toolkit:__ Easier cart manipulation

- __Next.JS:__ Used for creating links and image rendering much easier

- __MongoDB:__ Used custom built API for server side rendering of images and menu items

- __AXIOS API:__ Used to bridge the gap between React and Mongo

- __Paypal API:__ Sandbox account used to pay for the orders
 

   `*______additional helpful utilities used*______`

- __Postman:__ Used to create and test JSON files for Mongo

- __Gimp:__ Image manipulation and transparency

## Winston

![Winston](https://carsonh.com/images/rsz_winston2.png)

Winston and I both thank you for reading this far and for the time to try out this project.