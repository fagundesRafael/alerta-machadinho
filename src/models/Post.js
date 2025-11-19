import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  subtitle: String,
  content: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['policial', 'educacao', 'cultura', 'politica', 'esportes', 'rondonia', 'brasil', 'mundo'] 
  },
  imageUrl: String, // URL do ImageKit
  imageCredit: String,
  author: String,
  views: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);