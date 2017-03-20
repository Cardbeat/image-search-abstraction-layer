import mongoose from 'mongoose';


const searchHistorySchema = mongoose.Schema({
  timestamp: Number,
  query: String
});
searchHistorySchema.index({ timestamp: 1});

export const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);
