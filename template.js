import {html} from 'https://unpkg.com/lit-html@1.1.0?module';
const header = (personal) => {
  return html`
  <style>
  h1 {
    border-bottom: 0.6pt solid #3F3F3F;
    margin-top: 0in;
    margin-bottom: 0.05in;
  }
  .contact-options {
    font-size: 12pt;
    list-style-type: none;
    display: flex;
    justify-content:space-between;
    padding: 0px;
    margin: 0px;
  }
  .contact-options li {
    display:inline;
  }
  </style>
  <h1>${personal.name} </h1>
  <ul class="contact-options">
    ${[...intersperse(personal.contact.map((option) => html`<li>${option}</li>`), html`<li>${personal.seperator}</li>`)]}
  </ul>
  
  `;
};

const subsection = (info) => {
  return html`
  <style>
    .notes {
      list-style: none;
      padding-left: 0.2in;
      margin: 0.05in 0in;
      color: #3F3F3F;
    }
    .notes li:before {
      content:"•"; 
      font-size:11pt;
      position: absolute;
      left: -6pt;
    }
    .notes li {
      margin: 2pt 0;
      position: relative;
    }
    .subsection-head {
      font-size: 11pt;
      display: flex;
      justify-content: space-between;
      font-weight: 500;
    }
    .left-head {
      //font-style: italic;
    }
  </style>
  ${
    ((typeof info.title !== 'undefined') || (typeof info.duration !== 'undefined'))
    ? html`
      <div class="subsection-head">
        <span class="left-head">${info.title}</span>
        <span class="right-head">${info.duration}</span>
      </div>`
    : ""
  }
  
  <ul class="notes">
    ${info.notes.map((note) => html`<li>${note}</li>`)}
  </ul>
  `
}

const section = (info) => {
  return html`
  <style>
    h2 {
      margin-bottom: 0.08in;
    }
    .section {
      border-left: 1pt solid black;
      padding-left: 0.1in;
      margin: 0.2in 0in;
    }
  </style>
  <div class="section">
    <h2>${info.title}</h2>
    ${info.subheadings.map((heading) => subsection(heading))}
  </div>
  `;
};

export const template = (resumeJson) => {
  return html`
  <style>
    @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,500,700&display=swap');
    .resume {
      font-family: 'Libre Franklin', sans-serif;
      font-size: 10.5pt;
    }
    h1 {
      font-size: 24pt;
      font-weight: 700;
    }
    h2 {
      font-size: 12pt;
      font-weight: 700;
    }
    html {
      letter-spacing: 0.4pt;
    }
    @media print {
      html {
        letter-spacing: 0pt;
      }
    }
  </style>
  <div class="resume">
    ${header(resumeJson.personal)}
    ${resumeJson.blocks.map((block) => section(block))} 
  </div>
  `;
};

// generator function to intersperse elements into an array
function *intersperse(a, delim) {
  let first = true;
  for (const x of a) {
    if (!first) yield delim;
    first = false;
    yield x;
  }
}

