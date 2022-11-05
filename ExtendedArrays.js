const repeats = Object.defineProperty(Array.prototype, 'repeats', {
    value: function(element) { 
      let count = 0;
      for (let x = 0; x < this.length; x++) {
        if(this[x] == element){
          count++
        }
      }
      return count
    }
});


const toObject = Object.defineProperty(Array.prototype, 'toObject', {
    value: function(key) { 
      const object = new Object()
      for (let x = 0; x < this.length; x++) {
        if(typeof key[x] != 'undefined'){
          object[key[x]] = this[x]
        }else{
          object[`key${x+1}`] = this[x]
        }
      }
      return object
    }
});


const indexOfAll = Object.defineProperty(Array.prototype, 'indexOfAll', {
    value: function(element) { 
        const array = new Array()

        for (let x = 0; x < this.length; x++) {
          if(this[x] == element){
            array.push(parseInt(x))
          }
        }
        return array
    }
});


const getTypes = Object.defineProperty(Array.prototype, 'getTypes', {
    value: function() { 
        const object = new Object()

        for (let x = 0; x < this.length; x++) {
          object[`index${x}`] = [this[x], typeof this[x]]
        }
        return object
    }
});


const pushString = Object.defineProperty(Array.prototype, 'pushString', {
    value: function(string) { 
        if(typeof string == 'string'){
            return this.push(string)
        }
        throw new Error("Pushed item have to be a strign")
    }
});

const pushNumber = Object.defineProperty(Object.prototype, 'pushNumber', {
    value: function(number) { 
        if(!isNaN(number)){
            return this.push(number)
        }
        throw new Error("Pushed item have to be a number")
    }
});

const average = Object.defineProperty(Array.prototype, 'average', {
  value: function() {
    let sum = 0
    for (const x of this) {
      if(typeof x != 'number'){
        throw new Error("All elements of array have to be numbers")
      }
      sum += x
  }

  return parseInt(sum/2)
  }
});

const largest  = Object.defineProperty(Array.prototype, 'largest', {
  value: function() {
    let value = this[0];
    for (const x of this) {
      if(typeof x != 'number'){
        throw new Error("All elements of array have to be numbers")
      }
      if(x > value){
        value = x
      }
  }
  return value
  }
});


const smallest = Object.defineProperty(Array.prototype, 'smallest', {
  value: function() {
    let value = this[0];
    for (const x of this) {
      if(typeof x != 'number'){
        throw new Error("All elements of array have to be numbers")
      }
      if(x < value){
        value = x
      }
  }
  return value
  }
});

const replace = Object.defineProperty(Array.prototype, 'replace', {
  value: function(element, newElement, occurance) {
    let count = 0;
    for (let x = 0; x < this.length; x++) {
      if(element == this[x]){
        count++
        if(occurance != null){
          if(occurance == count){
            this[x] = newElement
            return this
          }
        }else{
          this[x] = newElement
        }
      }
    }

  return this
  }
});

const replaceAll = Object.defineProperty(Array.prototype, 'replaceAll', {
  value: function(element, newElement) {
    for (let x = 0; x < this.length; x++) {
      if(element == this[x]){
        this[x] = newElement
      }
    }

  return this
  }
});

const print = Object.defineProperty(Array.prototype, 'print', {
  value: function() {
    console.log(this);
  }
});

const populate = Object.defineProperty(Array.prototype, 'populate', {
  value: function(length, random) {
    for (let x = 0; x < length; x++) {
      if(random){
        this[x] = Math.floor(Math.random() * 100)
      }else{
        this[x] = x
      }
    }
  return this
  }
});



const addProperty = Object.defineProperty(Object.prototype, 'addProperty', {
  value: function(name, callback) {
    Object.defineProperty(this.prototype, name, {
      value: function(param){
        callback(param, this)
      }
    })
  }
});


export {}