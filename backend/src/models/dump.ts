import {Schema,model,Document} from "mongoose";

interface IDump extends Document {
  date:Date,
  img:string,
  description:string
}

const DumpModel = new Schema<IDump>({
    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now,
      },
      img:{
        type:String,
        required:[true,"İmg is required"],
      },
      description:{
        type:String,
        required:[true,"Description is required"],
        trim:true
      }
      
});

const Dump = model<IDump>("Dump",DumpModel);
export default Dump;