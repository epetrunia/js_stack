'use strict';

class Stack {
    constructor() {
        this._size = 0;
    }

    get size() {
        return this._size;
    }

    push(value) {
        this[this._size] = value;
        this._size++;
        return this._size
    }

    pop() {
        if (this.isEmpty) {
            return undefined;
        }
        const value = this[--this._size];
        delete this[this._size];
        return value;
    }

    pick() {
        if (this.isEmpty) {
            return undefined;
        }
        return this[this._size - 1];
    }

    get isEmpty() {
        return this.size === 0;
    }
}
