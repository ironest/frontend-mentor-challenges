fetch("./src/data.json")
  .then((response) => response.json())
  .then(({ projects }) => {
    const projectList = document.querySelector("#project-list");

    const htmlBlock = projects
      .map((proj) => {
        return `
          <div class="project-card">
            <div class="preview">
              <img src="./${proj.folder}/design/desktop-preview.jpg" />
            </div>
            <div class="info">
              <h2 class="project-name">${proj.name}</h2>
              <ul class="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>JUNIOR</li>
              </ul>
              <p class="description">
                ${proj.description}
              </p>
            </div>
          </div>
        `;
      })
      .join('');

      projectList.innerHTML = htmlBlock;
  });
