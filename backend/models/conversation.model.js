import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId, // Capitalize ObjectId
        ref: "User",
      },
    ],
    messages: [
      // Fixed typo here
      {
        type: mongoose.Schema.Types.ObjectId, // Capitalize ObjectId
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true },
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
