const popupps = [
  {
    id: 1,
    name: 'Profesional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Placeholder5.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
  {
    id: 2,
    name: 'Profesional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Plholder03.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
  {
    id: 3,
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Plholder02.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Placeholder5.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Plholder03.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
  {
    id: 6,
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Plholder02.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linkVersion: 'See Live',
    linkSource: 'See Source',
  },
];

const renderPopupp = (popupp) => {
  const {
    id,
    name,
    description,
    featuredImage,
    technologies,
    linkVersion,
  } = popupp;

  const container = document.createElement('div');
  container.classList.add('container-poppup');

  container.innerHTML = `
  <div data-id=${id} class='pupopp lg-screen pupopp-form${id}' style="background:url(${featuredImage});">
  <div class="section-art sm-screen">
      <h2>${name}</h2>
      <p>
      ${description}
      </p>
      <div class="luang">
          <ul>
          ${technologies.map((technology) => `<li>${technology}</li>`).join('')}
          </ul>
      </div>
  </div>
  <button data-modal-target="#modal" class="btn btn-style btn-style-btn " onclick="showModal('${id}')" id="" href="${linkVersion}" target="_blank">${linkVersion}</button>
</div>

  `;

  return container;
};

const renderPopupps = () => {
  const container = document.querySelector('.container-block');

  const popuppsElement = document.createElement('div');
  const containerFull = document.createElement('div');
  containerFull.classList.add('container-full');
  popuppsElement.appendChild(containerFull);
  popuppsElement.classList.add('container-form');

  popupps.forEach((popupp) => {
    containerFull.appendChild(renderPopupp(popupp));
    container.appendChild(popuppsElement);
  });
};
renderPopupps();

const showModal = (id, isMultipost) => {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  if (isMultipost) {
    document.getElementById('model-dynamic-content').innerHTML = `
    <div class='pupopp-item'>
    <img src="./Images/Placeholder.svg" alt="here's placeholder image where the alternatives text goes">
  <div class="section-art sm-screen">
      <h2>Multi-Post Stories</h2>
      <p>
      A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
      </p>
      <div class="luang">
          <ul>
          <li>CSS</li>
          <li>html</li>
          <li>bootstrap</li>
          <li>Ruby</li>
          </ul>
      </div>
      <a data-modal-target="#modal" class="btn btn-style btn-style-btn " href="" target="_blank">See Live</a>
      <a data-modal-target="#modal" class="btn btn-style btn-style-btn " href="" target="_blank">See Source</a>
  </div>
  </div>
    `;
  } else {
    const item = popupps.find((p) => p.id.toString() === id);
    const {
      name, description, featuredImage, technologies, linkVersion,
    } = item;

    document.getElementById('model-dynamic-content').innerHTML = `
  <div class='pupopp-item'>
  <div data-id=${id} class='pupopp lg-screen pupopp-form${id}' style="background:url(${featuredImage}); width: 97vh;"></div>
  <div class="section-art sm-screen">
      <h2>${name}</h2>
      <p>
      ${description}
      </p>
      <div class="luang">
          <ul>
          ${technologies.map((technology) => `<li>${technology}</li>`).join('')}
          </ul>
      </div>
      <a data-modal-target="#modal" class="btn btn-style btn-style-btn " onclick="showModal('${id}')" id="" href="${linkVersion}" target="_blank">${linkVersion}</a>
      <a data-modal-target="#modal" class="btn btn-style btn-style-btn " onclick="showModal('${id}')" id="" href="${linkVersion}" target="_blank">${linkVersion}</a>
  </div>
  </div>
  `;
  }
};

const closeModal = () => {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
};

document.getElementById('open-modal').onclick(showModal);
document.getElementById('close-modal').onclick(closeModal);
