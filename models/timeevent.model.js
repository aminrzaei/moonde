import mongoose, { model, Schema } from 'mongoose';

// 2. Create a Schema corresponding to the document interface.
const TimeEventSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    stable: { type: Boolean, required: true, default: false },
    date: { type: Date, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  },
  { timestamps: true }
);

export default model('TimeEvent', TimeEventSchema);
