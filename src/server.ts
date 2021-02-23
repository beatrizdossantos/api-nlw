import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ Message: "Hello World!" })
});

app.post("/", (request, response) => {
    return response.json({ Message: "Dados salvos com sucesso!" })
});

app.listen(3322, () => console.log("O servidor está rodando!"));