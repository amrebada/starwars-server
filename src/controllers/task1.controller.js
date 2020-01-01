/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import films from "../models/films";

export const getLongestOpeningCredit = async () => {
  const allFilms = await films.find({});
  return allFilms.reduce((prev, current) => {
    if (!prev.max) {
      prev = { max: prev.opening_crawl.length, name: prev.title };
    }
    if (current.opening_crawl.length > prev.max) {
      return {
        max: current.opening_crawl.length,
        name: current.title
      };
    }
    return prev;
  }).name;
};
