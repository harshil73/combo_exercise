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

function checkboxData(data) {
  let checkbox = "";
  for (i = 0; i < data.length; i++) {
    checkbox += `<input type="checkbox" value="${data[i].option}"> ${data[i].option} </br>`;
  }
  return checkbox;
}

function radioData(data) {
  let radioButton = "";
  for (i = 0; i < data.length; i++) {
    radioButton += `<input type="radio" value="${data[i].option}" name="gender"> ${data[i].option} </br>`;
  }
  return radioButton;
}

function dropDownData(data) {
  let dropDown = "";
  dropDown += `<select>`;
  for (i = 0; i < data.length; i++) {
    dropDown += `
        <option value="${data[i].option}">
            ${data[i].option}
        </option>
        `
  }
  dropDown += `</select>`;
  return dropDown;
}

const choice = async (req, res) => {
  let control = req.query.control;
  let type = req.query.type;
  console.log(control);
  console.log(type);

// ------------------------------------------------------------
// Reduce Redundancy(Final Code)
   if (control == "Languages") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "Languages",
      },
    });
    if(type == 'dropdown')
    res.send(dropDownData(data[0].option_combos));
    if(type=='radio')
    res.send(radioData(data[0].option_combos));
    if(type=='checkbox')
    res.send(checkboxData(data[0].option_combos));
  }


  else if (control == "State") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "State",
      },
    });
    if(type == 'dropdown')
    res.send(dropDownData(data[0].option_combos));
    if(type=='radio')
    res.send(radioData(data[0].option_combos));
    if(type=='checkbox')
    res.send(checkboxData(data[0].option_combos));
  }

  else if (control == "Gender") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "Gender",
      },
    });
    if(type == 'dropdown')
    res.send(dropDownData(data[0].option_combos));
    if(type=='radio')
    res.send(radioData(data[0].option_combos));
    if(type=='checkbox')
    res.send(checkboxData(data[0].option_combos));
  }

  else{
    res.send('404 plz enter proper url')
  }



// First Attempt Code
// checkbox type search
//   if (control == "Languages" && type == "checkbox") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "Languages",
//       },
//     });
//     // console.log(data[0].option_combos);
//     res.send(checkboxData(data[0].option_combos));
//     // res.render('choicepage',{data:data[0].option_combos});
//   }

//  else if (control == "State" && type == "checkbox") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "State",
//       },
//     });
//     res.send(checkboxData(data[0].option_combos));
//   }

//  else if (control == "Gender" && type == "checkbox") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "Gender",
//       },
//     });
//     res.send(checkboxData(data[0].option_combos));
//   }

//   // ---------------------------------------------------------------------
//   // Radio type search

//  else if (control == "Languages" && type == "radio") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "Languages",
//       },
//     });
//     res.send(radioData(data[0].option_combos));
//   }

//  else if (control == "State" && type == "radio") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "State",
//       },
//     });
//     res.send(radioData(data[0].option_combos));
//   }

//  else if (control == "Gender" && type == "radio") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "Gender",
//       },
//     });
//     res.send(radioData(data[0].option_combos));
//   }

//   // ---------------------------------------------------------------------
//   // DropDown type search

//   else if (control == "Languages" && type == "dropdown") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "Languages",
//       },
//     });
//     res.send(dropDownData(data[0].option_combos));

//     if(type == 'dropdown')
//     res.send(dropDownData(data[0].option_combos));
//     if(type=='radio')
//     res.send(radioData(data[0].option_combos));
//     if(type=='checkbox')
//     res.send(checkboxData(data[0].option_combos));
//   }

//   else if (control == "State" && type == "dropdown") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "State",
//       },
//     });
//     res.send(dropDownData(data[0].option_combos));
//   }

//  else if (control == "Gender" && type == "dropdown") {
//     let data = await select_combo.findAll({
//       include: option_combo,
//       where: {
//         name: "Gender",
//       },
//     });
//     res.send(dropDownData(data[0].option_combos));
//   }
};

module.exports = { generateData, choice };
