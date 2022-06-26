import mongoose from "mongoose";
import { IGroupe } from "./groupe.interface";

const GroupeSchema = new mongoose.Schema({

});

export const Groupe = mongoose.model<IGroupe & mongoose.Document>('groupes', GroupeSchema);