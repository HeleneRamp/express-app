const request = require("supertest");
const app = require ("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies");

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
});

describe("Get /api/movies/:id", () => {
    it("return movies by id", async () => {
        const response = await request(app).get("/api/movies/1");

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    })
})

describe("Get /api/movies/", () => {
    it("return error", async () => {
        const response = await request(app).get("/api/movies/0");

        expect(response.status).toEqual(404, "not found")
    })
})
