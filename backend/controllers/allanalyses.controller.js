const Analyses = require("../models/Analyses");

exports.getAllAnalyses = async (req, res) => {
  try {
    const result = await Analyses.find().select(
      "_id name educationalLevel schoolYear stream trimester result.overview createdAt",
    );
    return res.status(200).json({
      analyses: result,
    });
  } catch (error) {
    console.log(error);
  }
};
