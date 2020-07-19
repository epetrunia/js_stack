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

function correctBrackets(str, options = {
    '(': ')',
    '[': ']',
    '{': '}',
}) {
    const bracketStack = new Stack();
    const brackets = options;

    for (const s of str) {
        if (brackets[s]) {
            bracketStack.push(s);
            continue;
        }
        if (brackets[bracketStack.pick()] === s) {
            bracketStack.pop();
        }
    }
    return bracketStack.isEmpty;
}

const userInput = prompt('Enter your text:');
alert(correctBrackets(userInput) ? 'Your brackets are correct' : 'Your brackets are wrong');