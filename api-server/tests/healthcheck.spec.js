const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("healthcheck are returned as json", async () => {
  await api.get("/healthcheck").expect(200).expect("Content-Type", /json/);
});
