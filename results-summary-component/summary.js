fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response

    data.forEach((entry, idx) => {

      const summary = document.querySelector("#dynamic-skill-list");
      const colors = ['red', 'yellow', 'green', 'blue'];

      const summarySkill = document.createElement('div');
      summarySkill.classList.add('summary-skill');
      summarySkill.classList.add(colors[idx % colors.length]);
      
      const skillName = document.createElement('span');
      skillName.classList.add('skill-name');

      const skillIcon = document.createElement('img');
      skillIcon.setAttribute('src', entry.icon);
      skillIcon.setAttribute('alt', 'Icon for ' + entry.category);

      const skillCategory = document.createTextNode(entry.category);

      const skillValue = document.createElement('span')
      skillValue.classList.add('skill-value')
      skillValue.appendChild(document.createTextNode(entry.score))
      
      const skillLight = document.createElement('span')
      skillLight.classList.add('light');
      skillLight.appendChild(document.createTextNode(' / 100'));

      skillValue.appendChild(skillLight);
      skillName.appendChild(skillIcon);
      skillName.appendChild(skillCategory);

      summarySkill.appendChild(skillName);
      summarySkill.appendChild(skillValue);

      summary.appendChild(summarySkill)

    });

    const scoreSum = data.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    const scoreAvg = Math.floor(scoreSum/data.length);
    const scoreBig = document.querySelector(".score-result > .big");
    scoreBig.innerHTML = scoreAvg;

  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
