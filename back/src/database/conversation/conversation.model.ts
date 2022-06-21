import mongoose from "mongoose";
import { IConversation } from "./conversation.interface";

const ConversationSchema = new mongoose.Schema({

});

export const Conversation = mongoose.model<IConversation & mongoose.Document>('conversations', ConversationSchema);