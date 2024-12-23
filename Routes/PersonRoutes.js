const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.work = data.work;
    // newPerson.email = data.email;
    // newPerson.salary = data.salary;
    const response = await newPerson.save();
    console.log("data saved ");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Interal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Interal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Interal Server Error" });
  }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Ensure 'id' matches the route parameter
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(
            personId,
            updatePersonData,
            {
                new: true,
                runValidators: true,
            }
        );

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log("Data Updated");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Ensure 'id' matches the route parameter
        

        const response = await Person.findByIdAndDelete(personId);
        

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log("Data Deleted");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




module.exports = router;