const DATASET = "../team-dataset.json";

async function getMembers(){
  let result = await fetch(DATASET)
  return await result.json();
}


function getMoreInfo(data){
  return data.map((item) => {
    const member = {
      name: item.memberName,
      lastName: item.memberSurname,
    }
    return member
  })
}

function getMember(data) {
  return data.map((item) => item.memberName);
}

//const RESULT = 

getMembers()
  .then(getMoreInfo)
  .then((data) => {
    console.log(data)
    data.forEach((element) => {
      const contentName = document.createTextNode(element.name + element.lastName)
      const NAME = document.querySelector("h1");
      NAME.appendChild(contentName);

      const elementSelect = document.querySelector(".front")

      return elementSelect.appendChild(NAME)
    })
    // .then(getMember)
  })




// const CREATEPROMISE = function cleanData () {
//   return new Promise((resolve, reject) => {
//     const dataset = DATASET
//     resolve(dataset)
//   })
// }

// CREATEPROMISE()
//   .then((data) => {
//     return data.map((item) => {
//       const member = {
//         name: item.memberName,
//         lastName: item.memberSurname,
//         tribedesc: item.tribeDescription,
//       }
//       return member
//     })
//   })

// const DATASET = "https://tribe.api.fdnd.nl/v1/list";

// async function getStudents(){
//   let result = await fetch(DATASET)
//   return await result.json()
// }

// function getMember(i){
//   return i.tribeName === "Minor Web Tribe 2022"
// }

// function filterStudents(d){
//   const { data } = d;
//   return data.filter(getMember).map(el => el.memberName)
// }

// console.log(filterStudents)
