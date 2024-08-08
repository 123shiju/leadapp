const Lead = require("../Modals/LeadModals");

const createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(200).json({ message: "leads created sucessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const editLeads = async (req, res) => {
  try {
    const { id } = req.params;
    const leads = await Lead.findById(id);
    console.log("editlead", leads);
    res.status(200).json(leads);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!lead) return res.status(404).json({ error: "Lead not found" });
    res.status(200).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ error: "Lead not found" });
    res.status(200).json({ message: "Lead deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// const searchLeads = async (req, res) => {
//   try {
//     const { search } = req.query;

//     if (!search) {
//       return res
//         .status(400)
//         .json({ error: "Search query parameter is required" });
//     }

//     const query = {
//       $or: [
//         { name: { $regex: search, $options: "i" } },
//         { email: { $regex: search, $options: "i" } },
//         { number: { $regex: search, $options: "i" } },
//         { productName: { $regex: search, $options: "i" } },
//       ],
//     };

//     const leads = await Lead.find(query);

//     res.status(200).json(leads);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  // searchLeads,
  editLeads,
};
