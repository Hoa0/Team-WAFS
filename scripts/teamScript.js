const DATASET = "https://tribe.api.fdnd.nl/v1/list";
//const naar de URL

async function getMembers(){
  let result = await fetch(DATASET)
  return await result.json();
}


getMembers().then(dataset => {
  // console.log(dataset)
  return dataset.data
}).then(
  dataset => {
    const arr = []
    const studentOne = dataset.filter(name => name.memberName == "Allyssa")
    const studentTwo = dataset.filter(name => name.memberName == "Thuan Hoa")

    arr.push(studentOne, studentTwo)
    // console.log(`show data`,arr)

    return arr
  }
).then(
  students => {
    const container = document.querySelector('.container')
    students.map(student => {
      // console.log(student[0])
      const studentCard =`
      <article class="card-profile">
      <h3 class="hide-elements">Information card</h3>
      <figure>
        <img src="${student[0].memberAvatar}" alt="profile picture of ${student[0].memberName}">
        <figcaption class="hide-elements">Profile picture</figcaption>
      </figure>
      <ul class="text-profile">
        <li>${student[0].memberBio}</li>
        <li><a href="https://github.com/${student[0].memberGithubHandle}">${student[0].memberGithubHandle}</a></li>
      </ul>
      </article>
  `
      container.insertAdjacentHTML('beforeend', studentCard)
    })
  }
)

function post(userID, userObj) {
  getMembers().then(
    data => {return data.data}
  ).then(data => {
    // console.log(`tet`, data)
    const res = data.filter(id => id.memberId == userID)
    if (res.memberBio === undefined) {
      postAndRenderData(userObj)
    } else {
      console.log('memberBio is not undef')
    }
  })
}
function postAndRenderData (userObj) {
  const postURL = 'https://tribe.api.fdnd.nl/v1/member'
  const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(userObj)
  }
  console.log('options',options)

  fetch(postURL,options).then(response => response.json())
  .then(data => {
      console.log('data posted successfully',data)
  }).catch(err => {
    console.log('some error')
      console.log(err)
  })
}


// post(52, {
//     squadId:2,
//     nickname:'thuan-hoa',
//     name: 'Thuan Hoa',
//     prefix:'',
//     surname:'Le',
//     avatar:'',
//     githubHandle:'Hoa0',
//     bio:'test',
//     url:'https://www.github.com/Hoa0'
//   })
  post(52, {
    memberId: 52,
    memberType: 'student',
    memberNickname: 't-smurf',
    memberName: 'Thuan Hoa',
    memberPrefix: 'ms',
    memberSurname: 'Le',
    memberAvatar: 'https://avatars.githubusercontent.com/u/49392248?v=4',
    memberGithubHandle: 'hoa0',
    memberBio: 'ik ben een student die graag programmeert',
    memberUrl: 'https://github.com/Hoa0/',
    squadId: 2,
    squadName: 'Squad 1',
    squadDesription: '',
    squadAvatar: '',
    squadUrl: '',
    tribeId: 8,
    tribeName: 'Minor Web Tribe 2022',
    tribeCohort: 2122,
    tribeDescription: 'This is the tribe for the minor web design & development 2122',
    tribeAvatar: 'https://avatars.githubusercontent.com/u/36165843?s=200&v=4',
    tribeUrl: 'https://github.com/cmda-minor-web',
    teams: [
        {
            teamId: 1,
            name: 'Team 1',
            description: '',
            avatar: '',
            url: ''
        }
    ]
})

post(22, {
  memberId: 22,
  memberType: 'student',
  memberNickname: 'Allyssa',
  memberName: 'Allyssa',
  memberPrefix: 'ms',
  memberSurname: 'Alimoestar',
  memberAvatar: 'https://avatars.githubusercontent.com/u/74106079?v=4',
  memberGithubHandle: 'hoa0',
  memberBio: 'Ik ben een student en ik ontwerp UX',
  memberUrl: 'https://github.com/AllyssaA/',
  squadId: 2,
  squadName: 'Squad 1',
  squadDesription: '',
  squadAvatar: '',
  squadUrl: '',
  tribeId: 8,
  tribeName: 'Minor Web Tribe 2022',
  tribeCohort: 2122,
  tribeDescription: 'This is the tribe for the minor web design & development 2122',
  tribeAvatar: 'https://avatars.githubusercontent.com/u/36165843?s=200&v=4',
  tribeUrl: 'https://github.com/cmda-minor-web',
  teams: [
      {
          teamId: 1,
          name: 'Team 1',
          description: '',
          avatar: '',
          url: ''
      }
  ]
})