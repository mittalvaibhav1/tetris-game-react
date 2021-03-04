import { colors } from "./colors";

export const shapes = ["Stick", "Square", "Z", "InvertedZ", "Pyramid", "L"];

export class Stick {
  constructor(activeState) {
    this.color = colors[Math.floor(Math.random() * 100) % colors.length];
    this.activeState = activeState;
    this.totalStates = 2;
    switch (this.activeState) {
      case 0:
        this.coordinatesList = [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3]
        ];
        break;
      case 1:
        this.coordinatesList = [
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0]
        ];
        break;
      default:
        throw new Error("Invalid State");
    }
  }
  getNextState() {
    return (this.activeState + 1) % this.totalStates;
  }
  setNextState() {
    this.activeState = (this.activeState + 1) % this.totalStates;
  }
  rotate() {
    const rotatedList = [];
    let x = this.coordinatesList[0][0];
    let y = this.coordinatesList[0][1];
    switch (this.getNextState()) {
      case 0:
        rotatedList.push([x, y]);
        rotatedList.push([x, y + 1]);
        rotatedList.push([x, y + 2]);
        rotatedList.push([x, y + 3]);
        break;
      case 1:
        rotatedList.push([x, y]);
        rotatedList.push([x + 1, y]);
        rotatedList.push([x + 2, y]);
        rotatedList.push([x + 3, y]);
        break;
      default:
        throw new Error("Invalid Rotation");
    }
    return rotatedList;
  }
}

export class Square {
  constructor(activeState) {
    this.color = colors[Math.floor(Math.random() * 100) % colors.length];
    this.activeState = activeState;
    switch (this.activeState) {
      case 0:
        this.coordinatesList = [
          [0, 0],
          [0, 1],
          [1, 0],
          [1, 1]
        ];
        break;
      default:
        throw new Error("Invalid State");
    }
  }
  getNextState() {
    return (this.activeState + 1) % this.totalStates;
  }
  setNextState() {
    this.activeState = (this.activeState + 1) % this.totalStates;
  }
  rotate() {
    return this.coordinatesList;
  }
}

export class Z {
  constructor(activeState) {
    this.color = colors[Math.floor(Math.random() * 100) % colors.length];
    this.activeState = activeState;
    this.totalStates = 2;
    switch (this.activeState) {
      case 0:
        this.coordinatesList = [
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 2]
        ];
        break;
      case 1:
        this.coordinatesList = [
          [0, 1],
          [1, 1],
          [1, 0],
          [2, 0]
        ];
        break;
      default:
        throw new Error("Invalid State");
    }
  }
  getNextState() {
    return (this.activeState + 1) % this.totalStates;
  }
  setNextState() {
    this.activeState = (this.activeState + 1) % this.totalStates;
  }
  rotate() {
    const rotatedList = [];
    let x = this.coordinatesList[1][0];
    let y = this.coordinatesList[1][1];
    switch (this.getNextState()) {
      case 0:
        rotatedList.push([x, y - 1]);
        rotatedList.push([x, y]);
        rotatedList.push([x + 1, y]);
        rotatedList.push([x + 1, y + 1]);
        break;
      case 1:
        rotatedList.push([x - 1, y]);
        rotatedList.push([x, y]);
        rotatedList.push([x, y - 1]);
        rotatedList.push([x + 1, y - 1]);
        break;
      default:
        throw new Error("Invalid Rotation");
    }
    return rotatedList;
  }
}

export class InvertedZ {
  constructor(activeState) {
    this.color = colors[Math.floor(Math.random() * 100) % colors.length];
    this.activeState = activeState;
    this.totalStates = 2;
    switch (this.activeState) {
      case 0:
        this.coordinatesList = [
          [0, 2],
          [0, 1],
          [1, 1],
          [1, 0]
        ];
        break;
      case 1:
        this.coordinatesList = [
          [0, 0],
          [1, 0],
          [1, 1],
          [2, 1]
        ];
        break;
      default:
        throw new Error("Invalid State");
    }
  }
  getNextState() {
    return (this.activeState + 1) % this.totalStates;
  }
  setNextState() {
    this.activeState = (this.activeState + 1) % this.totalStates;
  }
  rotate() {
    const rotatedList = [];
    let x = this.coordinatesList[1][0];
    let y = this.coordinatesList[1][1];
    switch (this.getNextState()) {
      case 0:
        rotatedList.push([x, y + 1]);
        rotatedList.push([x, y]);
        rotatedList.push([x + 1, y]);
        rotatedList.push([x + 1, y - 1]);
        break;
      case 1:
        rotatedList.push([x - 1, y]);
        rotatedList.push([x, y]);
        rotatedList.push([x, y + 1]);
        rotatedList.push([x + 1, y + 1]);
        break;
      default:
        throw new Error("Invalid Rotation");
    }
    return rotatedList;
  }
}

export class Pyramid {
  constructor(activeState) {
    this.color = colors[Math.floor(Math.random() * 100) % colors.length];
    this.activeState = activeState;
    this.totalStates = 4;
    switch (this.activeState) {
      case 0:
        this.coordinatesList = [
          [0, 1],
          [1, 1],
          [1, 0],
          [1, 2]
        ];
        break;
      case 1:
        this.coordinatesList = [
          [1, 1],
          [1, 0],
          [0, 0],
          [2, 0]
        ];
        break;
      case 2:
        this.coordinatesList = [
          [1, 1],
          [0, 1],
          [0, 2],
          [0, 0]
        ];
        break;

      case 3:
        this.coordinatesList = [
          [1, 0],
          [1, 1],
          [2, 1],
          [0, 1]
        ];
        break;
      default:
        throw new Error("Invalid State");
    }
  }
  getNextState() {
    return (this.activeState + 1) % this.totalStates;
  }
  setNextState() {
    this.activeState = (this.activeState + 1) % this.totalStates;
  }
  rotate() {
    const rotatedList = [];
    let x = this.coordinatesList[1][0];
    let y = this.coordinatesList[1][1];
    switch (this.getNextState()) {
      case 0:
        rotatedList.push([x - 1, y]);
        rotatedList.push([x, y]);
        rotatedList.push([x, y - 1]);
        rotatedList.push([x, y + 1]);
        break;
      case 1:
        rotatedList.push([x, y + 1]);
        rotatedList.push([x, y]);
        rotatedList.push([x - 1, y]);
        rotatedList.push([x + 1, y]);
        break;
      case 2:
        rotatedList.push([x + 1, y]);
        rotatedList.push([x, y]);
        rotatedList.push([x, y + 1]);
        rotatedList.push([x, y - 1]);
        break;
      case 3:
        rotatedList.push([x, y - 1]);
        rotatedList.push([x, y]);
        rotatedList.push([x + 1, y]);
        rotatedList.push([x - 1, y]);
        break;
      default:
        throw new Error("Invalid Rotation");
    }
    return rotatedList;
  }
}

export class L {
  constructor(activeState) {
    this.color = colors[Math.floor(Math.random() * 100) % colors.length];
    this.activeState = activeState;
    this.totalStates = 4;
    switch (this.activeState) {
      case 0:
        this.coordinatesList = [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1]
        ];
        break;
      case 1:
        this.coordinatesList = [
          [0, 2],
          [0, 1],
          [0, 0],
          [1, 0]
        ];
        break;
      case 2:
        this.coordinatesList = [
          [2, 1],
          [1, 1],
          [0, 1],
          [0, 0]
        ];
        break;
      case 3:
        this.coordinatesList = [
          [1, 0],
          [1, 1],
          [1, 2],
          [0, 2]
        ];
        break;
      default:
        throw new Error("Invalid State");
    }
  }
  getNextState() {
    return (this.activeState + 1) % this.totalStates;
  }
  setNextState() {
    this.activeState = (this.activeState + 1) % this.totalStates;
  }
  rotate() {
    const rotatedList = [];
    let x = this.coordinatesList[2][0];
    let y = this.coordinatesList[2][1];
    switch (this.getNextState()) {
      case 0:
        rotatedList.push([x - 2, y]);
        rotatedList.push([x - 1, y]);
        rotatedList.push([x, y]);
        rotatedList.push([x, y + 1]);
        break;
      case 1:
        rotatedList.push([x, y + 2]);
        rotatedList.push([x, y + 1]);
        rotatedList.push([x, y]);
        rotatedList.push([x + 1, y]);
        break;
      case 2:
        rotatedList.push([x + 2, y]);
        rotatedList.push([x + 1, y]);
        rotatedList.push([x, y]);
        rotatedList.push([x, y - 1]);
        break;
      case 3:
        rotatedList.push([x, y - 2]);
        rotatedList.push([x, y - 1]);
        rotatedList.push([x, y]);
        rotatedList.push([x - 1, y]);
        break;
      default:
        throw new Error("Invalid Rotation");
    }
    return rotatedList;
  }
}
