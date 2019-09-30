import {html} from 'https://unpkg.com/lit-html@1.1.0?module';

export const resume = {
  personal: {
    name: "Aaron Neustedter",
    seperator: "",
    contact: [
      "262-278-1106",
      html`<a href='mailto:aneusted@purdue.edu'>aneusted@purdue.edu</a>`,
      html`<a href='https://www.linkedin.com/in/aneustedter'>linkedin.com/in/aneustedter</a>`
    ],
  },
  blocks: [
    {
      title: "Summary",
      subheadings: [
        {
          title: "Graduate student at Purdue University pursuing a Master's in Computer Science. Expected graduation Fall 2020,\
			Seeking an internship for Summer 2020",
          notes: []
        }
      ]
    },
  
    {
      title: "Education",
      subheadings: [
        {
          title: "Purdue University",
          duration: "West Lafayette IN • Fall 2016 - Fall 2020",
          notes: [
            "Master's in Computer Science, Fall 2020",
            "Graduate research centered around developing agricultural IOT devices that stream information about farm machinery usage",
            "Bachelor's in Computer Science - Software Engineering Concentration, Spring 2019", 
            //"Undergraduate centered around refactoring and implementing software engineering best practices in existing research project",
			"Treasurer for the Purdue Waterski Team"
          ]
        },
      ]
    },
  
    {
      title: "Experience",
      subheadings: [
        {
          title: "GE Transportation/Wabtec - Customer Application Engineering Intern",
          duration: "Melbourne FL • Summer 2019",
          notes: [
            "Simulated train runs to ensure product viability of specific tracks",
            "Analyzed and advised in recreation of algorithm that aligns train data recorder information from different trains and starting points",
            "Led project to artificially inject error in track database to determine effects of incorrect track elevation"
          ]
        },
        
        {
          title: "CNH Industrial - Systems/Model Based Design Engineering Intern",
          duration: "New Holland PA • Summer 2018",
          notes: [
            "Supported the Case IH Flagship Combine team with the development of the model year 2019 combine",
            "Modeled and programmed the combine's automatic cleaning fan function",
            "Verified safety-critical communication protocol between the control handle and processing module",
            "Created a combine cabin simulator to enable testing of embedded code in a semi-virtual environment"
          ]
        },
        
        {
          title: "Rockwell Automation - Firmware Test Engineering Intern",
          duration: "Mequon WI • Summer 2015 - 2017",
          notes: [
            "Automated firmware tests designed to replace manual testing of Rockwell’s drives",
            "Reduced test runtime from 4-40 man-hours to 1-20 mins via automated tests",
            "Built automated test infrastructure to develop and run automated tests",
          ]
        }
      ]
    },
    
    {
      title: "Skills",
      subheadings: [
        {
          notes: [
            "Proficient in C/C++, Python, Bash, and Java",
            "Familiar with ARM/x86, C#, R and Matlab/Simulink",
            "Formally educated and experienced working in Scrum/SAFe development methodologies",
            "Repurposed a pair of desktop computers for use as Linux servers for backup, data storage, media streaming, and software development"
          ]
        }
      ]
    },
  
    {
      title: "Volunteering",
      subheadings: [
        {
        notes: [
          "Mentored West Lafayette FRC Team 1747 high school students",
          "Eagle Scout service project created organ donation campaign resulting in over 120 people becoming organ donors",
          "Hunted invasive lionfish and surveyed queen conch and reef health in Belize",
          "Taught English and built an educational hydroponic farming system for children in Costa Rica"
        ]
      }
    ]
  },
]
};
