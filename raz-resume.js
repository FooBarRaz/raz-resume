import PropTypes from 'prop-types';

export const raz = {
  basics: {
    name: 'Mehraz Ali',
    label: 'Developer, Technologist, and Maker',
    picture: './erlich-bachman.jpg',
    email: 'mehraz.ali@live.com',
    phone: '1 (404) 889-6729',
    website: 'http://mehrazali.com',
    summary: '"Our whole corporate culture is that we don\'t have a corporate culture."',
    location: {
      address: '4591 Sims Ct',
      postalCode: '30084',
      city: 'Tucker',
      countryCode: 'USA',
      region: 'Georgia',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'fakeplasticdroid',
        url: 'https://www.github.com.com/fakeplasticdroid',
      },
      {
        network: 'Twitter',
        username: 'fakeplasticdroid',
        url: 'https://twitter.com/fakeplasticdroid',
      },
    ],
  },
  work: [
    {
      company: 'Kinexys',
      position: 'CEO',
      website: 'http://kinexys.com',
      startDate: '2017-01-01',
      summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
      highlights: ['Started the company', 'building shit'],
    },
    {
      company: '84.51°',
      position: 'CEO',
      website: 'http://piedpiper.com',
      startDate: '2013-01-01',
      endDate: '2014-01-01',
      summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
      highlights: ['Started the company', 'killed it'],
    },
    {
      company: 'ThoughtWorks',
      position: 'CEO',
      website: 'http://piedpiper.com',
      startDate: '2013-01-01',
      endDate: '2014-01-01',
      summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
      highlights: ['Started the company', 'killed it'],
    },
  ],
  volunteer: [
    {
      organization: 'ZipCode Wilmington',
      position: 'Volunteer',
      website: 'http://organization.com/',
      // startDate: '2015-03',
      // endDate: '2015-03',
      summary: 'Bachmanity Insanity, which has been hailed as the event of the century, was able to raise over 1,000 pounds of non-perishable canned goods to help the homeless of San Frnacisco who have been abandoned by tech companies. ',
      highlights: ['1,000 pounds of food donations', 'Event of the Century'],
    },
    {
      organization: 'Digital Youth Founders',
      position: 'Volunteer',
      website: 'http://organization.com/',
      // startDate: '2008-05',
      // endDate: '2008-05',
      summary: 'Aviatio (until its disbandment) was responsible for organizing a daily lunch for homeless employees',
      highlights: [
        'Organizer of the month (2008-05)',
        'Volunteer of the month (2008-05)',
        'Chef of the month (2008-05)',
        'Customer of the month (2008-06)',
      ],
    },
    {
      organization: 'Trees Atlanta',
      position: 'Volunteer',
      website: 'http://organization.com/',
      // startDate: '2015-03',
      // endDate: '2015-03',
      summary: 'Bachmanity Insanity, which has been hailed as the event of the century, was able to raise over 1,000 pounds of non-perishable canned goods to help the homeless of San Frnacisco who have been abandoned by tech companies. ',
      highlights: ['1,000 pounds of food donations', 'Event of the Century'],
    },
    {
      organization: 'Open Hand',
      position: 'Volunteer',
      website: 'http://organization.com/',
      // startDate: '2015-03',
      // endDate: '2015-03',
      summary: 'Bachmanity Insanity, which has been hailed as the event of the century, was able to raise over 1,000 pounds of non-perishable canned goods to help the homeless of San Frnacisco who have been abandoned by tech companies. ',
      highlights: ['1,000 pounds of food donations', 'Event of the Century'],
    },
  ],
  education: [
    {
      institution: 'Georgia State University',
      area: 'Computer Science',
      studyType: 'B.S. in Computer Science (incompleted)',
      startDate: '2005-08',
      endDate: '2006-01',
      gpa: '4.0 (presumed)',
      courses: [
        'CS289A - Intro to Machine Learning',
        'EECS 126 - Probability and Random Processes',
        'CS C100 - Principles & Techniques of Data Science.',
      ],
    },
    {
      institution: 'Reed College',
      area: 'Software Development',
      studyType: 'Bachelor (incomplete)',
      startDate: '2003-08',
      endDate: '2004-05',
      gpa: '2.7',
      courses: [
        'DB1101 - Basic SQL',
        'JS 087 - Javascript Fundamentals',
        'CS 095 - Advanced HTML',
      ],
    }
  ],
  awards: [],
  publications: [],
  skills: [
    {
      name: 'Incubating',
      level: '95',
      keywords: [
        'Managing Subordinates: At [pied](./) piper we strived to meet all of our incubator needs',
        'Evicting Jian Yang',
      ],
    },
    {
      name: 'Hex Arithmetic',
      level: '90',
      keywords: ['9 * F = fleventy-five'],
    },
    {
      name: 'Web Development',
      level: '37',
      keywords: ['HTML', 'CSS', 'Javascript'],
    },
    {
      name: 'Hydroponic Horticulture',
      level: '75',
      keywords: [
        "Garage Gardening: experienced at producing top quality 'produce'",
      ],
    },
    {
      name: 'Style',
      level: '60',
      keywords: [
        "Clothes: black turtlenecks to maximize 'jobbiness'",
        'Kimonos: To assert power and relay awesomeness',
      ],
    },
    {
      name: 'Negotiation',
      level: '45',
      keywords: [
        'Aggressive: Aggressive negotiation is they key to getting what you want',
      ],
    },
    {
      name: 'Making Mistakes',
      level: '30',
      keywords: ['1993: I made a mistake by thinking that I made a mistake'],
    },
    {
      name: 'Being Lame',
      level: '15',
      keywords: [
        'Jian Yang: This only happens when listening to his recipe for octupu',
      ],
    },
    {
      name: 'Losing',
      level: '5',
      keywords: ['Kickball: I lost a kickball game once in elementary school'],
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'Native speaker',
    },
    {
      name: 'Hexadecimal',
      level: 'Veteran',
    },
    {
      name: 'Spanish',
      level: 'Intermediate',
    },
  ],
  interests: [
    {
      name: 'Wildlife',
      keywords: [
        'Ferrets: More of a hatred than an interest, ferrets are  detrimental to society and any neighbors who would dare to keep them among people are evil',
        'California Varmint Laws: California penal code says that is is illegal to keep ferrets',
      ],
    },
    {
      name: 'Japanese Culture',
      keywords: [
        '切腹: the act of falling on ones sword in shame',
        'おみやげ: giving of gifts to incubees and other people who have earned my respect',
      ],
    },
  ],
  references: [
    {
      name: 'Jian Yang',
      reference: "I do not respect you. You're not any kind of investor, you own nothing",
    },
    {
      name: 'Jian Yang',
      reference: "Erlich Bachman...This is you as and old man. I'm ugly and I'm dead. Alone",
    },
    {
      name: 'CJ Cantwell',
      reference: 'Bachman recently founded venture capital firm Bachmanity Capital with tech icon (soon to be legend, I’m sure) Nelson “Big Head” Bighetti, and the pair hosted a lavish launch event, aptly titled “Bachmanity Insanity.” The party, like Bachman, was loud, extravagant and a bit of a farce. It was a luau. At Alcatraz. One for which Bachman chose to pay for all liquor at retail cost, and one where he lost a giant fiberglass Tiki head at the bottom of the bay. The expenses for fire dancers, flair bartenders and exotic caterers totaled over $1 million. Bachman maintains these were “practical costs for any groundbreaking business.”',
    },
    {
      name: 'CJ Cantwell',
      reference: 'Bachmanity burned too bright, like the custom lighting at its luau and, like that lighting, the bulb burned out.',
    },
  ],
};

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const volunteerType = PropTypes.arrayOf(PropTypes.shape({
  organization: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  awarder: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  publisher: PropTypes.string,
  releaseDate: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType,
});
