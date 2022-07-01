class MyPromise extends Promise {
    syncThen(fn) {
      const val = fn();
      return this.then(_ => val);
    }
  }

  new MyPromise(resolve => {
    console.log({MyPromise: 1});
    resolve();
})
.syncThen(_ => console.log({MyPromise: 2}))
.then(_ => console.log({MyPromise: 3})); 

  console.log({MyPromise: 4});


class ReversedPromise extends Promise {
    fnQueue = []

    then(fn) {
        this.fnQueue.push(fn);

        queueMicrotask(() => {
            this.fnQueue.reverse().forEach(fn => fn());
            this.fnQueue = [];
        })

        return this;
    }
}

new ReversedPromise(resolve => {
    console.log({ReversedPromise: 1});
    resolve();
})
.then(() => console.log({ReversedPromise: 2}))
.then(() => console.log({ReversedPromise: 3}))
.then(() => console.log({ReversedPromise: 4}))
