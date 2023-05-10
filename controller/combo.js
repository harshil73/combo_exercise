const model = require("../models");
const select_combo = require("../models").select_combo;
const option_combo = require("../models").option_combo;

console.log(select_combo, option_combo);

const addSelectMenu = async (req, res) => {
  let select = req.query.select;
  console.log(select);

  let add_select = await select_combo.create({
    name: select,
  });
  console.log(add_select);
  res.send(add_select);
};

const addOptionMenu = async (req, res) => {
  let x = req.body;
  console.log(x);

  let add_options = await option_combo.bulkCreate(req.body);
  console.log(add_options);
  res.json(add_options);
};

const removeOptionMenu = async (req, res) => {
  let id = req.query.optionid;
  console.log(id);

  let remove_option = await option_combo.destroy({
    where: {
      selectId: id,
    },
  });
  console.log(remove_option);
  res.send(`Options Deleted Successfully!`);
};

const removeSelectMenu = async (req, res) => {
  let select_name = req.query.select;
  console.log(select_name);

  let remove_select = await select_combo.destroy({
    where: {
      name: select_name,
    },
  });
  console.log(remove_select);
  res.send(`${select_name} Deleted Successfully!`);
};

const home = async (req, res) => {
  let data = await option_combo.findAll({ where: { selectId: 8 } });
  // console.log(data[0].name)
  res.render("choicepage", { data: data });
};

const addData = async (req, res) => {
  let question = req.body.ques;
  let options = req.body.ans;

  let str = options.toString()
  console.log(str)

  //  res.send(`gentalman welcome to fight club! ${options}`)
try{
  // const data = await select_combo.create(
  //   {
  //     name:questions,
  //     option_combos:{option:str}
  // },{
  //  include:option_combo
  // })

  const questionData = await select_combo.create({
    name:question
  })
  
  let qId = questionData.id
  console.log(qId)

  for(i=0;i<options.length;i++){
  const optionData = await option_combo.create({
    where:{
      selectId:qId
    },
    option:options[i],
  })
  console.log(optionData)
}
  
  // res.send(data)
}catch(err){
  console.log(err)
}

  
};

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
        `;
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
  if (control == "languages") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "languages",
      },
    });
    if (type == "dropdown") res.send(dropDownData(data[0].option_combos));
    if (type == "radio") res.send(radioData(data[0].option_combos));
    if (type == "checkbox") res.send(checkboxData(data[0].option_combos));
  } else if (control == "state") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "state",
      },
    });
    if (type == "dropdown") res.send(dropDownData(data[0].option_combos));
    if (type == "radio") res.send(radioData(data[0].option_combos));
    if (type == "checkbox") res.send(checkboxData(data[0].option_combos));
  } else if (control == "gender") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "gender",
      },
    });
    if (type == "dropdown") res.send(dropDownData(data[0].option_combos));
    if (type == "radio") res.send(radioData(data[0].option_combos));
    if (type == "checkbox") res.send(checkboxData(data[0].option_combos));
  } else if (control == "movie") {
    let data = await select_combo.findAll({
      include: option_combo,
      where: {
        name: "movie",
      },
    });
    if (type == "dropdown") res.send(dropDownData(data[0].option_combos));
    if (type == "radio") res.send(radioData(data[0].option_combos));
    if (type == "checkbox") res.send(checkboxData(data[0].option_combos));
  } else {
    res.send("404 plz enter proper url" + req.ip);
  }
};

module.exports = {
  home,
  choice,
  addSelectMenu,
  addOptionMenu,
  removeOptionMenu,
  removeSelectMenu,
  addData,
};

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
