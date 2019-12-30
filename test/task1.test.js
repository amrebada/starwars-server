import Films from "../src/models/films";
import { getLongestOpeningCredit } from "../src/controllers/task1.controller";

jest
  .spyOn(Films, "find")
  .mockImplementationOnce(() =>
    Promise.resolve([
      { title: "film1", opening_crawl: "123456" },
      { title: "film2", opening_crawl: "12345" },
      { title: "film3", opening_crawl: "1234" },
      { title: "film4", opening_crawl: "123" }
    ])
  );

describe("Longest Opening Crawl", () => {
  it("should return film1", () => {
    return getLongestOpeningCredit().then(value =>
      expect(value).toEqual("film1")
    );
  });
});
