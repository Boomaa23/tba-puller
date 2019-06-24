class Test {
  test: string;

  constructor(newTest: string) {
    this.test = newTest;
  }

  testing() {
    return "Hello " + this.test;
  }
}

let bigTest = new Test("there");

document.body.innerHTML = bigTest.testing();
