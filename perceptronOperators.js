// AND PERCEPTRON

let testExamples = {
    1: [0,0], // false
    2: [0,1], // false
    3: [1,0], // false
    4: [1,1]  // true
};

let weight1 = 1;
let weight2 = 1;
let bias = -1.5;

const prediction = (result) => {
    console.log(result)
    console.log(result >= 0)
}

for (const arr in testExamples) {
    prediction((testExamples[arr][0] * weight1) + (testExamples[arr][1] * weight2) + bias)
}

console.log("---- DONE PREDICTION -----")

// OR PERCEPTRON

let testExamples1 = {
    1: [0,0], // false
    2: [0,1], // true
    3: [1,0], // true
    4: [1,1]  // true
};

let testExamples1Weight1 = 10;
let testExamples1Weight2 = 10;
let testExamples1Bias = 0;



for (const arr in testExamples1) {
    prediction((testExamples1[arr][0] * testExamples1Weight1) + (testExamples1[arr][1] * testExamples1Weight2) + testExamples1Bias)
}

console.log("---- DONE PREDICTION -----")