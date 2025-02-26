import { Schema,model,Document } from "mongoose";

interface IBookmark extends Document {
    title:string,
    description?:string,
    url:string
}

const BookmarkSchema = new Schema<IBookmark>({
    title:{
        type:String,
        required:[true,"Name is required"],
        unique:true,
        trim:true
    },
    description:{
        type:String,
    },
    url:{
        type:String,
        required:[true,"Url is required"],
        unique:true,
        trim:true
    }
});

const Bookmark = model<IBookmark>("Bookmark",BookmarkSchema);
export default Bookmark;