let gorceries = [];
export const getGrocery = (req, res) => {
  res.status(200).send(name);
};
export const addGrocery = (req, res) => {
  console.log("I am  in addUser function");
  name = req.body.name;
  console.log(req.body.name);
  res.status(201).send({
    message: "Your data got saved",
  });
};
