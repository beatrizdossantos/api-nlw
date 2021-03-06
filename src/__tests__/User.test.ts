import request from 'supertest';
import { app } from "../app";
import { getConnection } from 'typeorm';
import createConnection from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            name: "Usuario",
            email: "user.testando@email.com",
        });

        expect(response.status).toBe(201);
    });

    it("Should not be able to create a user with exist email", async () => {
        const response = await request(app).post("/users").send({
            name: "Usuario",
            email: "user.testando@email.com",
        });

        expect(response.status).toBe(400);
    });

})

