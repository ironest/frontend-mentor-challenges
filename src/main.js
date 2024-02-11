fetch("./src/data.json")
  .then((response) => response.json())
  .then(({ projects, difficulties }) => {
    const projectList = document.querySelector("#project-list");

    const htmlBlock = projects
      .map((proj) => {
        return `
          <div class="project-card">
            <div class="preview">
              <a href="./${proj.folder}">
                <img src="./${proj.folder}/design/desktop-preview.jpg" />
              </a>
            </div>
            <div class="info">
              <h2 class="project-name">
                <a href="./${proj.folder}">
                  ${proj.name}
                </a>
              </h2>
              <ul class="skills">
                ${proj.skills
                  .map(
                    (skill) =>
                      `<li class="${skill.toLowerCase()}">${skill}</li>`
                  )
                  .join("")}
                <li class="difficulty">
                  <span class="${difficulties[proj.difficulty].toLowerCase()}">${proj.difficulty + 1}</span>
                  <span class="${difficulties[proj.difficulty].toLowerCase()}">${difficulties[proj.difficulty]}</span>
                </li>
              </ul>
              <p class="description">
                ${proj.description}
              </p>
            </div>
          </div>
        `;
      })
      .join("");

    projectList.innerHTML = htmlBlock;
  });
