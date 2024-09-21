import Lead from "../../../models/lead";

module.exports = (app: any) => {
  app.post("/v0/prelaunch/subscribe", async (req: any, res: any) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).send("Email is required");
      }

      const existingLead = await Lead.findOne({ email });
      if (existingLead) {
        return res.status(409).send("Email already exists");
      }

      const lead = new Lead({ email });
      await lead.save();
      return res.status(201).send("Subscribed successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal server error");
    }
  });
};
