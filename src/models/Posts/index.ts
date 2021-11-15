import  Mongoose,{Schema, model, Document} from "mongoose";

interface PostModel extends Document{
    title : string
    imageUri : string
    creator: string
    description: string
    tags: string
}


const PostSchema = new Schema({
    title: { type: String, required: true },
    imageUri: { type: String, required: true },
    creator: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: String, required: true }
    //tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', min: 1 }]
    //creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true, toJSON: { virtuals: true } });


export  const PostModel = model<PostModel>('post', PostSchema )

//export const Article = Mongoose.model<ArticleI>('Article', ArticleSchema, 'articles');