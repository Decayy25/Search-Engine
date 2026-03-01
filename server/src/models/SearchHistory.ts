import mongoose from "mongoose";

const seachSchema = new mongoose.Schema({
    keyword: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const SearchHistory = mongoose.model("SearchHistory", seachSchema);