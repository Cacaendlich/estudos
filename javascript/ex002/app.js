//2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela: //Ex: Qual é o seu nome? João da Silva // Olá João da Silva, é um prazer te conhecer!

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); // configurei a interface readline para ler a entrada de dados do usuário a partir do console. A interface será armazenada na constante "readLine".

readLine.question("Qual seu nome? ", input => {
    console.log(`Olá ${input}, é um prazer te conhecer!`);
    readLine.close(); // encerrar a leitura do stdin.
});
