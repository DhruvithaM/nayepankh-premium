const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const Volunteer = require("./models/Volunteer");

const Contact = require("./models/Contact");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.post(
  "/volunteer",

  async (req, res) => {

    try {

      const volunteer =
        new Volunteer(req.body);

      await volunteer.save();

      res.status(201).json({
        message:
          "Volunteer Registered Successfully"
      });

    }

    catch (error) {

      res.status(500).json({
        error:
          "Something went wrong"
      });

    }

  }
);

app.get(
  "/volunteers",

  async (req, res) => {

    try {

      const volunteers =
        await Volunteer.find();

      res.status(200).json(
        volunteers
      );

    }

    catch (error) {

      res.status(500).json({
        error:
          "Failed to fetch volunteers"
      });

    }

  }
);

app.delete(
  "/volunteer/:id",

  async (req, res) => {

    try {

      await Volunteer.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Volunteer Deleted"
      });

    }

    catch (error) {

      res.status(500).json({
        error:
          "Delete failed"
      });

    }

  }
);

app.post(
  "/contact",

  async (req, res) => {

    try {

      const contact =
        new Contact(req.body);

      await contact.save();

      res.status(201).json({
        message:
          "Message Sent Successfully"
      });

    }

    catch (error) {

      res.status(500).json({
        error:
          "Failed to send message"
      });

    }

  }
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});