## Main Technologies
#### - Angular Animations
#### - Angular Template Forms
#### - Angular DI
#### - Bootstrap
#### - RXJS
***
## About
The RXJS observable maps functions (switchMap, mergeMap, concatMap and exhaustMap) are often misunderstood and, sometimes, are also causing behaviors in our application which are difficult for us to grasp. Thus, knowing precisely how they operate is very important.

This project tries to show us, with proper visual feedback, the output of each observable map stream. For this, a text box, a send button and an empty list are displayed. Each time the button is clicked the message inside the text box is emitted to the stream that turns its output to a new item in the list.

This whole process is lightly animated. Little boxes are displayed for each emitted message. These boxes act like a progress bar to the data being processed in the stream and the time each one takes to process is random.

Each of the four streams is the same. The only difference is what RXJS observable map was put into the pipe, as you can see in the code. It is also possible to configure the interval in which the process time will randomize.

I hope this project clarifies the basic mechanism of the RXJS observable maps, which for many, is yet too abstract. Try to run the project and see for yourself.
***
## Run
### Docker command:
```
docker run --name rxjs-maps-visualization --rm --network host -it -w /usr/src/app -v ${PWD}/:/usr/src/app node:18 bash
```
### Angular commands:
```
npm install
```
```
npm run start
```
### See the result at:
[http://localhost:4200/](http://localhost:4200/)
