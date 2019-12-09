const code = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,9,19,23,2,23,13,27,1,27,9,31,2,31,6,35,1,5,35,39,1,10,39,43,2,43,6,47,1,10,47,51,2,6,51,55,1,5,55,59,1,59,9,63,1,13,63,67,2,6,67,71,1,5,71,75,2,6,75,79,2,79,6,83,1,13,83,87,1,9,87,91,1,9,91,95,1,5,95,99,1,5,99,103,2,13,103,107,1,6,107,111,1,9,111,115,2,6,115,119,1,13,119,123,1,123,6,127,1,127,5,131,2,10,131,135,2,135,10,139,1,13,139,143,1,10,143,147,1,2,147,151,1,6,151,0,99,2,14,0,0];

const code1 = [1,0,0,0,99];
const code1Result = [2,0,0,0,99];

const code2 = [2,3,0,3,99];
const code2Result = [2,3,0,6,99];

const code3 = [2,4,4,5,99,0];
const code3Result = [2,4,4,5,99,9801];

const code4 = [1,1,1,4,99,5,6,0,99];
const code4Result = [30,1,1,4,2,5,6,0,99];

function program(data) {
    let index = 0;

    while(1) {
        const command = data[index];
        const op1Pos = data[index+1];
        const op2Pos = data[index+2];
        const resPosition = data[index+3];
    
        const op1 = data[op1Pos];
        const op2 = data[op2Pos];
        let opResult = 0;

        switch(command) {
            case 1: {
                opResult = op1 + op2;
                break;
            }
            case 2: {
                opResult = op1 * op2;
                break;
            }
            case 99: {
                return data;
            }
        }
        data[resPosition] = opResult;

        index+=4;
    }
}
const expectedResult = 19690720;
for (let i=0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        const newCode = [...code];
        newCode[1] = i;
        newCode[2] = j;
        const result = program(newCode);
        if (result[0] === expectedResult) {
            console.log(i, j);
            break;
        }
    }
}
// const result = program();
// console.log(result[0]);

// const result1 = program(code1);
// console.log(code1Result, result1);

// const result2 = program(code2);
// console.log(code2Result, result2);

// const result3 = program(code3);
// console.log(code3Result, result3);

// const result4 = program(code4);
// console.log(code4Result, result4);