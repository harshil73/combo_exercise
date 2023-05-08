const model = require("../models");
// console.log(model.control_type)
const select_combo = require("../models").select_combo;
const option_combo = require("../models").option_combo;

console.log(select_combo, option_combo);

const generateData = (req, res) => {
  option_combo
    .bulkCreate([
      { option: "Hindi", selectId: 3 },
      { option: "Gujarati", selectId: 3 },
      { option: "English", selectId: 3 },
    ])
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// generate html -> switch -> return generate dropdown
// generate dropdown(select,option) =>
// concat -> return html

 function getData(data){
   for(i=0;i<data.length;i++){
    return data[i].option
   }
}

const choice = async (req, res) => {
  let control = req.query.control;
  let type = req.query.type;
  console.log(control);
  console.log(type)

  if (control == "Languages") {
    // res.send('Generate Checkboxes Here!')
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "Languages",
      },
    });
    // console.log(data[0].option_combos);
    res.send(getData(data[0].option_combos))
    // res.render('choicepage',{data:data[0].option_combos});
    // console.log("Data options are", data[0].option);
  }

  if (control == "State") {
    // res.send("Generate Dropdownmenu Here!");
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "State",
      },
    });
    // console.log(data[0].option_combos);
    // res.send(data[0].option_combos);
    res.render('choicepage',{ data: data[0].option_combos });
  }


  if (control == "Gender") {
    // res.send("Generate Radio Button Here!");
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "Gender",
      },
    });
    // console.log(data[0].option_combos);
    res.send(data[0].option_combos);
    res.render('choicepage',{ data: data[0].option_combos });
}
};

module.exports = { generateData, choice };
