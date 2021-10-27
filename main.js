const otherUsersRepositories = [
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    user: "radicbane",
    repName: "radicbane / loruki - website",
    date: "3 days ago",
    updated: "Oct 1",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    user: "radicbane",
    repName: "radicbane/teh-page",
    date: "3 days ago",
    updated: "Oct 1",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    user: "radicbane",
    repName: "radicbane/form-page",
    date: "7 days ago",
    updated: "Oct 1",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    user: "radicbane",
    repName: "radicbane/product-page",
    date: "11 days ago",
    updated: "Oct 1",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    user: "radicbane",
    repName: "radicbane/tehnicaldoc",
    date: "19 days ago",
    updated: "Oct 1",
  },
];

const myRepositories = [
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    name: "markovic-ana / product-landing-page",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    name: "markovic-ana / form-page",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    name: "markovic-ana / portfolio-page",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    name: "markovic-ana / github-page",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81993929?s=40&amp;v=4",
    name: "markovic-ana / technical-document-page",
  },
];

function myRepTemplate(myRep) {
  return `
<div class="myRepLeftSide">
<ul>
<li><a href=""><img class="leftSideAvatar" src="${myRep.avatar}"></a> <a href="">${myRep.name}</a></li>
</ul>
</div>
  `;
}

document.querySelector("#myRepositories-sidebar").innerHTML = `
${myRepositories.map(myRepTemplate).join("")}
`;

function otherUsersRepoTemplate(userRep) {
  return `
<div class="userRepBox">
    <ul>
    <li><img src="${userRep.avatar}"></a></li><div class="flex-baseline"><li><p><a href="">${userRep.user}</a> created a repository <a href="">${userRep.repName}</a> <span class="date">${userRep.date}</span></p></li>
   
    <li><div class="userRepBoxSmall">
      <div class="userRepBoxSmall-top">
        <h3><a href="#">${userRep.repName}</a></h3>
        <button class="repBoxbtn" type="button">
        <i class="far fa-star"></i>Star</button>
     </div>
     <div class="userRepBoxSmall-bottom">
        <span class="date">Updated ${userRep.updated}</span>
    </div>
  </div>
  </li></ul>
  </div>
</div>
  `;
}

document.querySelector("#otherUsersRepo").innerHTML = `
${otherUsersRepositories.map(otherUsersRepoTemplate).join("")}
`;
