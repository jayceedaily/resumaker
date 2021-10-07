const resume = [
    {
      "component": "Row",
      "attribute": "w-full",
      "children": [
        {
          "component": "Column",
          "attribute": "w-1/2",
          "children": [
            {
              "component": "Image",
              "attribute": "w-1/2",
              "value": "https://avatars.dicebear.com/api/big-smile/sidestep.svg"
            },
            {
              "component": "TitleText",
              "attribute": "w-1/2",
              "value": "Jaycee Mariano"
            }
          ]
        },
        {
          "component": "Column",
          "attribute": "w-1/2",
          "children": [
            {
              "component": "HThree",
              "value": "Full Stack Developer"
            },
            {
              "component": "Paragraph",
              "value": "5+ years of demonstrated experience in designing and creating web applications deployed both on Cloud, or On-premise technologies."
            }
          ]
        }
      ]
    },
    {
      "component": "HorizontalLine",
      "attribute": "w-full"
    },
    {
      "component": "Row",
      "attribute": "w-full",
      "children": [
        {
          "component": "Column",
          "attribute": "w-1/2",
          "children": [
            {
              "component": "HThree",
              "value": "Development Stack"
            },
            {
              "component": "BasicList",
              "attribute": "grid",
              "options": {
                "column": 3,
                "gap": 4
              },
              "value": ["Laravel", "Vue", "Bulma", "Tailwind", "SASS", "Node", "Codeigniter", "Linux", "PHP", "JavaScript", "Vagrant", "jQuery", "Flutter", "SPA", "Wordpress", "Redis", "MySQL", "Azure", "Vagrant", "API Dev", "Bash", "Git", "Web Socket", "HTML+CSS" ]
            }
          ]
        }
      ]
    }
  ];

  export default resume;