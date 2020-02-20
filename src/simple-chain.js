const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!(position - 1 in Object.keys(this.chain))) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
