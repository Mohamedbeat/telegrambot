import * as mongoose from "mongoose";

interface hadithI {
  title: String;
  text: String;
}

const hadithSchema = new mongoose.Schema<hadithI>({
  title: String,
  text: String,
});

const hadithModel = mongoose.model<hadithI>("Hadith", hadithSchema);

export default hadithModel;
