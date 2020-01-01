/* eslint-disable import/first */
import Films from "../src/models/films";
import Config from "../src/config";
import { MostAppearedCharacter } from "../src/controllers/task2.controller";
// jest.mock("mongoose");
// eslint-disable-next-line import/order
import { connection, connect, disconnect } from "mongoose";

beforeAll(async () => {
  jest
    .spyOn(Films, "find")
    .mockImplementationOnce(() =>
      Promise.resolve([
        { characters: [1, 2, 3, 4, 5] },
        { characters: [10, 2, 6, 7] },
        { characters: [2, 6, 3] },
        { characters: [9, 5, 8, 4] }
      ])
    );
  await connect(Config.DB_URL);

  jest.spyOn(connection.db, "collection").mockImplementationOnce(() => ({
    findOne: ({ id }) =>
      [
        { name: "Luke Skywalker" },
        { name: "Yoda" },
        { name: "C-3PO" },
        { name: "R2-D2" },
        { name: "Darth Vader" },
        { name: "Leia Organa" },
        { name: "Owen Lars" },
        { name: "Beru Whitesun lars" },
        { name: "R5-D4" },
        { name: "Biggs Darklighter" },
        { name: "Obi-Wan Kenobi" },
        { name: "Anakin Skywalker" }
      ][id - 1]
  }));
});

afterAll(async () => {
  await disconnect();
});

describe("Most Character Appeared in all movies", () => {
  it("should return Yoda", () => {
    return MostAppearedCharacter().then(value => expect(value).toEqual("Yoda"));
  });
});
