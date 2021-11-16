import  Mongoose,{Schema, model, Document} from "mongoose";

interface PostModel extends Document{
    creator: string;
    title: string;
    description: string;
    tags: string;
    pic: string
}


const PostSchema = new Schema({
    creator: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: String, required: true },
    pic: { type: String, required: true },
    //tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', min: 1 }]
    //creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true, toJSON: { virtuals: true } });


export  const PostModel = model<PostModel>('post', PostSchema )

//export const Article = Mongoose.model<ArticleI>('Article', ArticleSchema, 'articles');