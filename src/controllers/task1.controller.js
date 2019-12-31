/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import films from "../models/films";

export const getLongestOpeningCredit = async () => {
  const longest = { title: null, max: null };
  await films
    .find({})
    .lean()
    .cursor()
    .eachAsync(film => {
      if (!longest.max) {
        longest.title = film.title;
        longest.max = film.opening_crawl.length;
      }
      if (film.opening_crawl.length > longest.max) {
        longest.title = film.title;
        longest.max = film.opening_crawl.length;
      }
    });

  return longest.title;
};
