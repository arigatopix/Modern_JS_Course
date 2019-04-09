/********************************************
 *!      Observer Pattern * ES6
**********************************************/
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribe to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      return item !== fn;
    });
    console.log(`You are now unsubscribe from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item){
      item.call();
    });
  }
}

/////////////////////////////////

const click = new EventObserver();

/////////////////////////////////

// * Event Listeners
// Subscribe Button
document.querySelector('.sub-ms').addEventListener('click',function(){

  click.subscribe(getCurrentMilliseconds);
});

// Unsubscribe Button
document.querySelector('.unsub-ms').addEventListener('click',function(){
  click.unsubscribe(getCurrentMilliseconds);
  // ใส่ array unsubscript ใน filter จะตัด function เวลาออก
});

// Subscribe Seconds Button
document.querySelector('.sub-s').addEventListener('click',function(){
  click.subscribe(getCurrentSeconds);
});

// Unsubscribe Seconds Button
document.querySelector('.unsub-s').addEventListener('click',function(){
  click.unsubscribe(getCurrentSeconds);
});

// Fire Button
  document.querySelector('.fire').addEventListener('click',function(){
    // จะมีผลต่อเมื่อ SUBSCRIBE อยู่เท่านั้น
    click.fire();
  });

/////////////////////////////////

// Click Handler
// function แสดงเวลา
const getCurrentMilliseconds = function() {
  console.log(`Current Milliseconds : ${new Date().getMilliseconds()}`);
}

// function แสดงเวลา Second
const getCurrentSeconds = function() {
  console.log(`Current Sconds : ${new Date().getSeconds()}`);
}