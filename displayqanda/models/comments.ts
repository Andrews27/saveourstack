import * as mongoose from 'mongoose';

export interface Comments extends mongoose.Document {
  cDate;
  answerId;
  aComment;
  userId;
  likeCount;
}

let commentsSchema = new mongoose.Schema ({
  cDate: {
    type: Date,
    required: true
  },
  answerId: {
    type: String,
    required: true
  },

  aComment: {
    type: String

  },
  userId: {
    type: String
  },
  likeCount: Number

});

export default mongoose.model<Comments>('Comments', commentsSchema);
