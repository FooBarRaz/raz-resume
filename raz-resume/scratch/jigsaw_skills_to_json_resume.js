#!/bin/node fs = require('fs');


fs.readFile('./jigsaw_skills.json', 'utf8', (err, data) => {
    if (err) {
        return console.log(`bad stuff: ${err}`);
    }

    transform(data);
});


function transform(skillsText) {
    const skillsData = JSON.parse(skillsText);
    const actualSkills = skillsData
        .filter(skill => skill.rating !== 0)
        .map(transformBySkill);

    console.log(actualSkills);

}

function transformBySkill(skillData) {
    const name = skillData.name;
    const level = skillData.rating * 20;
    const keywords = [skillData.group.name]
    return {
        name: name,
        level: level,
        keywords: keywords
    };
}

function transformByGroup(skillData) {
    return null;
}


/**
 *
 *
 * {
        "name": "Executive Advisory",
        "rating": 3,
        "group": {
            "name": "Consulting"
        }
    },

     {
      name: 'Style',
      level: '60',
      keywords: [
        "Clothes: black turtlenecks to maximize 'jobbiness'",
        'Kimonos: To assert power and relay awesomeness',
      ],
    },
 */