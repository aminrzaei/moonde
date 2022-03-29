import mongoose, { model, Schema } from 'mongoose';

// 2. Create a Schema corresponding to the document interface.
const TagSchema = new Schema({
  title: { type: String, required: true, trim: true },
  color: { type: String, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: 'TimeEvent' }],
});

// 3. Create a Model.
export default model('Tag', TagSchema);
