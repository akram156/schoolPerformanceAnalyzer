const Analyses = require("../models/Analyses");
exports.getAllAnalyses = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await Analyses.find({ user: id }).select(
      "_id name educationalLevel schoolYear stream trimester result.overview createdAt",
    );
    console.log("decode token", decodedToken);
    console.log("result", result);
    return res.status(200).json({
      analyses: result,
    });
  } catch (error) {
    console.log(error);
  }
};
