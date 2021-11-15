"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    imageUri: { type: String, required: true },
    creator: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: String, required: true }
    //tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', min: 1 }]
    //creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
exports.PostModel = (0, mongoose_1.model)('post', PostSchema);
//export const Article = Mongoose.model<ArticleI>('Article', ArticleSchema, 'articles');
