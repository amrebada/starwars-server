/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import films from "../models/films";

export const getLongestOpeningCredit = async () => {
  const allFilms = await films.find({});
  return allFilms.reduce((prev, next) => {
    if (!prev.max) {
      prev = { max: prev.opening_crawl.length, name: prev.title };
    }
    if (next.opening_crawl.length > prev.max) {
      return {
        max: next.opening_crawl.length,
        name: next.title
      };
    }
    return prev;
  }).name;
};
