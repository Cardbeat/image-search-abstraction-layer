import express from 'express';
import Search from 'bing.search';
import { SearchHistory } from '../models/searchHistory';

const search = new Search('KxoaZT159uXdGog37Dbgj6HZKER8RV4UDN8mSgXQUDw');

export const searchApi = express.Router();

searchApi.get('/search/:query', (req,res) => {
    let query = req.params.query,
        offset = req.query.offset || 10,
        timestamp = Date.now();

    search.images(query, (error, results) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json(results.map(createresults));
      }
    });

    let queryHistory = new SearchHistory({ query, timestamp });
    queryHistory.save();
});



searchApi.get('/latest', (req, res) => {
  SearchHistory
    .find()
    .select({ _id: 0, query: 1, timestamp: 1 })
    .sort({ timestamp: -1 })
    .limit(10)
    .then(results => {
      res.status(200).json(results);
    });
});

function createResults(image) {
  return {
    url: image.url,
    title: image.title,
    thumbnail: image.thumbnail.url,
    source: image.sourceUrl,
    type: image.type
  }
}
