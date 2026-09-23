const Analyses = require("../models/Analyses");
const jwt = require("jsonwebtoken");
exports.getAllAnalyses = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    console.log("token", token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const result = await Analyses.find({ user: decodedToken.id }).select(
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
