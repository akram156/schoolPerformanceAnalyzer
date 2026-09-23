const Analyses = require("../models/Analyses");
const mongoose = require("mongoose");

exports.getAllAnalyses = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "User ID is required in query params" });
    }

    // Safely query using Mongoose ObjectId
    const result = await Analyses.find({ 
      user: new mongoose.Types.ObjectId(id) 
    }).select(
      "_id name educationalLevel schoolYear stream trimester result.overview createdAt"
    );

    console.log("Found analyses count:", result.length);

    return res.status(200).json({
      analyses: result,
    });
  } catch (error) {
    console.error("Error in getAllAnalyses:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};