import { Schema, model, Document } from "mongoose";

// IBlog arayüzü, "tags" alanını string dizisi olarak düzelttim
interface IBlog extends Document {
  title: string;
  date: Date;
  description: string;
  tags: string[]; // "any" yerine "string[]" olarak güncellendi
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    tags: {
      type: [String], // Dizi olarak doğru şekilde tanımlandı
      required: [true, "At least one tag is required"],
    },
  },
  { timestamps: true } // createdAt ve updatedAt otomatik eklenir
);

const Blog = model<IBlog>("Blog", BlogSchema);
export default Blog;
