import {html} from 'https://unpkg.com/lit-html@1.1.0?module';

export const resume = {
  personal: {
    name: "Aaron Neustedter",
    separator: "",
    contact: [
      html`<a href='mailto:aneusted@purdue.edu'>aneusted@purdue.edu</a>`,
      html`<a href='https://www.linkedin.com/in/aneustedter'>linkedin.com/in/aneustedter</a>`,
      html`<a href='https://github.com/aaron97neu'>github.com/aaron97neu</a>`
    ],
  },
  blocks: [
    {
      title: "Summary",
      subheadings: [
        {
          title: "Software Engineer pursuing Masters degree in Computer Science at Purdue University.\
                    Seeking a full time position Spring of 2021",
          notes: []
        }
      ]
    },
  
    {
      title: "Education",
      subheadings: [
        {
          title: "Purdue University",
          duration: "West Lafayette IN • Fall 2016 - Winter 2020",
          notes: [
            "Master's in Computer Science, December 2020",
            "Bachelor's in Computer Science - Software Engineering Concentration, May 2019", 
            "Treasurer for the Purdue Waterski Team 2018 - 2019, collegiate 3 event skier"
          ]
        },
      ]
    },
  
    {
      title: "Experience",
      subheadings: [
        {
          title: "Purdue University - Graduate Research Assistant",
          duration: "West Lafayette, IN • Fall 2019 - Present",
          notes: [
            "Developed various applications and tools for The Purdue Open Ag Technology and Systems Center",
            "Architected new software stack for existing ISOBlue edge computing device that runs on tractors, combines, and other agricultural equipment",
            "ISOBlue Avena stack hosts Docker containers on Toradex ARM SBCs running Debian Linux. Uses Wireguard for VPN connection and Ansible to deploy and update nodes",
          ]
        },
        {
          title: "GE Transportation/Wabtec - Customer Application Engineering Intern",
          duration: "Melbourne FL • Summer 2019",
          notes: [
            "Simulated train runs with Matlab to ensure product viability of specific tracks",
            "Analyzed and advised in re-creation of algorithm that aligns train data recorder information from different trains and starting points",
            "Led project to artificially inject error in track database to determine effects of incorrect track elevation"
          ]
        },
        
        {
          title: "CNH Industrial - Systems/Model Based Design Engineering Intern",
          duration: "New Holland PA • Summer 2018",
          notes: [
            "Supported the Case IH Flagship Combine team with the development of the model year 2019 combine",
            "Modeled and corrected the combine's automatic cleaning fan function",
            "Verified safety-critical communication protocol between the control handle and processing module",
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
      title: "Software Development Skills",
      subheadings: [
        {
          notes: [
            "Proficient in C/C++, Python, Bash, Type/JavaScript, and Java",
            "Familiar with ARM/x86, C#, R and Matlab/Simulink",
            "Formally educated and experienced working in Scrum/SAFe development methodologies",
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
          "Eagle Scout service project created organ donation campaign resulting in over 120 people becoming donors",
          "Advanced Open Water diver, hunted invasive lionfish and surveyed queen conch and reef health in Belize",
          "Taught English and built an educational hydroponic farming system for children in Costa Rica"
        ]
      }
    ]
  },
]
};
