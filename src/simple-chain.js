const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  resultArray: [],

  getLength() {
    return this.resultArray.length
  },

  addLink(value) {
    this.resultArray.push('( ' + value + ' )')
    return this
  },

  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof(position) !== 'number') {
      this.resultArray = []
      throw Error
    }
    this.resultArray.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.resultArray.reverse()
    return this;
  },

  finishChain() {
    let result = this.resultArray.join('~~')
    this.resultArray = []
    return result
  }
}


module.exports = {
  chainMaker
};
