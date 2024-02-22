// Ejercicio de entrevista:

// Escribe una función en JavaScript que tome un arreglo de números como entrada y devuelva un nuevo arreglo que contenga solo los números pares.
// Puedes implementar esta función de varias maneras, ya sea utilizando un bucle, el método filter() u otras técnicas que consideres apropiadas.
// El objetivo es demostrar tu habilidad para manipular arreglos y trabajar con lógica condicional en JavaScript.

const nums = [1, 5, 6, 8, 7, 23, 1263, 4856, 78, 85, 546, 45, 456, 4556, 561, 561, 564];

const getPairs = (nums) => {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            ans.push(nums[i]);
        }
    }
    return ans;
};

const getPairsFiltered = (nums) => {
    const ans = nums.filter((num) => num % 2 === 0);
    return ans;
};

console.log(getPairsFiltered(nums));
