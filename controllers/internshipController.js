import Internship from "../models/internshipModel.js";

export const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find({});
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch internships" });
  }
};
