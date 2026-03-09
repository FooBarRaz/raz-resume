import PropTypes from "prop-types";

export const raz = {
  basics: {
    name: "Mehraz Ali",
    label: "Consultant | Builder | Leader | Entrepreneur",
    picture: "./profile.png",
    email: "mehraz.ali@live.com",
    phone: "1 (404) 889-6729",
    website: "https://www.mehrazali.com",
    summary: `Senior Principal Engineer, AI-forward founder, and seasoned technology consultant with 13+ years of experience building and shipping software across consulting and industry. Currently leading large-scale client engagements at Slalom Build while building DogFoodLab — a product studio focused on eliminating friction from everyday life through smart, AI-powered tools. Proven track record of designing complex distributed systems, leading cross-functional teams, and driving AI adoption and acceleration at scale. Passionate about leveraging AI-driven development practices — including Spec-Driven Development (SDD), agentic workflows, and workflow automation — to ship faster and smarter. Equal parts hands-on builder and strategic leader.`,
    location: {
      postalCode: "30319",
      city: "Brookhaven",
      countryCode: "USA",
      region: "Georgia",
    },
    profiles: [
      {
        network: "GitHub",
        username: "FooBarRaz",
        url: "https://www.github.com/FooBarRaz",
      },
      {
        network: "Twitter",
        username: "fakeplasticdroid",
        url: "https://twitter.com/fakeplasticdroid",
      },
      {
        network: "LinkedIn",
        username: "mehraz-ali",
        url: "https://www.linkedin.com/in/mehraz-ali-b42b8412/",
      },
    ],
  },
  work: [
    {
      company: "DogFoodLab",
      position: "Founder & CEO",
      website: "https://dogfoodlab.io",
      startDate: "2025-02-01",
      endDate: "Present",
      summary: `Founder and sole operator of DogFoodLab — a product studio dedicated to cutting through the everyday nonsense. We build smart, innovative tools that let you focus on what truly matters — creating moments of magic in a world full of distractions. The flagship product, StashDog, is currently in active development. DogFoodLab operates at the intersection of AI-driven development, workflow automation, and practical product design.`,
      highlights: [
        "Founded and launched a solo product studio from the ground up",
        "Building StashDog — flagship product in active development",
        "AI-native development workflow using Claude Code, Kiro, and agentic tooling",
        "End-to-end product ownership: ideation, design, architecture, implementation, and GTM",
        "n8n workflow automation for business process pipelines",
        "Supabase",
        "React",
        "TypeScript",
        "Node.js",
        "Serverless Architecture",
      ],
    },
    {
      company: "Slalom Build",
      position: "Senior Principal, Software Engineering",
      website: "https://slalombuild.com",
      startDate: "2019-09-16",
      endDate: "Present",
      summary: `Leading complex, large-scale client engagements from discovery through delivery as a Senior Principal Engineer. Managing and mentoring teams of engineers — providing career guidance, professional development, and technical coaching. Driving AI adoption and acceleration across teams, training and guiding organizations toward effective AI integration at scale. Assessing client business challenges and architecting best-fit technology solutions. Collaborating with delivery managers, stakeholders, and cross-functional teams to scope, estimate, and deliver modern cloud-native applications.`,
      highlights: [
        "Promoted to Senior Principal (July 2025)",
        "Leading AI adoption and acceleration initiatives across client teams at scale",
        "Training and coaching teams on effective AI-driven development practices",
        "Managing complex, multi-pod client engagements end-to-end",
        "People management and professional development for a growing engineering cohort",
        "Technical strategy, architecture, and solution design",
        "Engagement management and client relationship building",
        "Thought leadership and public speaking",
        "Agile delivery, continuous improvement, and process optimization",
      ],
    },
    {
      company: "Regional Bank in Birmingham, Alabama",
      position: "Principal Engineer",
      startDate: "2023-03-01",
      endDate: "2025-01-31",
      summary: `Led the design and delivery of a cloud-native platform for a regional bank, digitizing and consolidating multiple business applications into a unified system. This was the client's first cloud-native initiative, requiring extensive experimentation, stakeholder alignment, organizational change management, and hands-on technical execution. Designed and implemented services, application UIs, and infrastructure in compliance with internal banking policies. Also developed a suite of applications to ensure compliance with upcoming banking regulations.`,
      highlights: [
        "AWS",
        "Lambda",
        "PostgreSQL",
        "Node.js",
        "React",
        "TypeScript",
        "Terraform",
        "DynamoDB",
        "SNS",
        "EventBridge",
        "Step Functions",
        "Prisma",
        "tsoa",
        "RJSF",
        "Regulatory Compliance",
        "Cloud-Native Transformation",
      ],
    },
    {
      company: "Payment Products and Services Provider in Atlanta, GA",
      position: "Principal Engineer",
      startDate: "2022-06-01",
      endDate: "2023-02-28",
      summary: `Designed and built a multi-tenant whitelabel e-commerce platform enabling restaurants to manage and fulfill online orders — essentially a customizable DoorDash-style solution. Implemented real-time order management, menu configuration, and payment processing capabilities across a multi-tenant architecture.`,
      highlights: [
        "Google Cloud Platform",
        "Next.js",
        "React",
        "Firebase",
        "Realtime Database",
        "GraphQL",
        "Multi-tenancy",
        "Accessibility",
        "SEO",
        "Performance Optimization",
      ],
    },
    {
      company: "Automotive Services and Technology Provider in Atlanta, GA",
      position: "Principal Engineer",
      startDate: "2022-06-01",
      endDate: "2023-02-28",
      summary: `Developed and launched an online e-commerce platform to facilitate selling cars digitally. Built out the full buying experience including vehicle search, credit applications, payment processing, and multi-tenant support for dealer networks.`,
      highlights: [
        "Node.js",
        "AWS",
        "React",
        "ElasticSearch",
        "REST APIs",
        "Multi-tenancy",
        "DynamoDB",
        "Step Functions",
        "E-Commerce",
        "Credit Applications",
        "Payment Processing",
      ],
    },
    {
      company: "Leading Cruise Line in Miami, FL",
      position: "Solution Architect",
      startDate: "2022-06-01",
      endDate: "2023-02-28",
      summary: `Architected and developed a system for capturing, storing, managing, and selling photos and media taken on cruise ships — including passenger photos, event coverage, and onboard experiences. The system was designed to run on on-prem hardware aboard the ships with cloud sync capabilities.`,
      highlights: [
        "Photo Management",
        "On-Prem / Hybrid Architecture",
        "Android",
        "Kotlin",
        "AWS",
        "Java",
        "Spring Boot",
        "Angular",
        "MinIO",
      ],
    },
    {
      company: "Animation and Television Studio in Atlanta, GA",
      position: "Solution Architect",
      startDate: "2022-06-01",
      endDate: "2023-02-28",
      summary: `Led the effort to bring a portfolio of mobile games up to spec with new SDKs, platform standards, and California Consumer Privacy Act (CCPA) compliance requirements. Coordinated across a multidisciplinary team spanning legal, development, and QA to evaluate, plan, and execute privacy and technical updates across iOS, Android, and iPad OS titles without disrupting user experience.`,
      highlights: [
        "iOS",
        "Android",
        "iPad OS",
        "Unity",
        "C# .NET",
        "CCPA Compliance",
        "SDK Upgrades",
        "Cross-functional Team Leadership",
        "Mobile Game Portfolio Management",
      ],
    },
    {
      company: "ThoughtWorks",
      position: "Lead Developer, Consultant (prev: Senior Developer)",
      website: "http://thoughtworks.com",
      startDate: "2014-02-01",
      endDate: "2019-09-13",
      summary: `Consultant at a leading global IT services firm, delivering across a wide variety of client projects in financial services, retail, logistics, and more. Responsibilities spanned the full spectrum — from hands-on delivery and architecture to coaching, enablement, and organizational transformation. Built a reputation for technical excellence, clear communication, and elevating team capabilities.`,
      highlights: [
        "Consulting",
        "Agile",
        "Lean and Continuous Delivery",
        "Test-Driven Development",
        "Pair Programming",
        "Education and Mentorship",
        "Public Speaking",
        "Clean Coding Practices",
        "Architecture and Design",
        "Workshops",
        "Process Improvement",
        "Organizational Transformation",
        "Conflict Management",
        "Relationship Building",
      ],
    },
    {
      company: "Kinexys",
      position: "Founder/CXO",
      website: "http://kinexys.com",
      startDate: "2017-01-01",
      endDate: "2024-12-31",
      summary: `Founded Kinexys as a holding company and legal entity for passion projects. Flagship product was Shotcaller — a location-based social media app published to both the Apple App Store and Google Play Store. Took Shotcaller from concept through design, development, and production launch as a solo founder. Company has since been folded; Shotcaller has been sunsetted.`,
      highlights: [
        "Took Shotcaller from inception to production as sole founder",
        "Published to Apple App Store and Google Play Store",
        "Social Media App",
        "iOS",
        "Android",
        "Mobile Web",
        "OAuth 2.0",
        "PostGIS",
        "React Native",
        "Heroku",
        "Ruby on Rails",
        "AWS",
      ],
    },
    {
      company: "Business Development/Analytics Company in Cincinnati, OH",
      position: "Technical Lead/Sr. Software Engineer",
      startDate: "2017-10-01",
      endDate: "2019-04-30",
      summary: `Led a team of 12 developers to build a greenfield analytics platform for a major retailer's vendor ecosystem. The application provided vendors with actionable insights based on retail sales data. Built a full-stack solution with an Angular frontend and a cluster of Spring Boot-powered Java microservices. Coached the team on development and testing best practices while enabling distributed collaboration across multiple locations.`,
      highlights: [
        "Greenfield",
        "Stream Lead",
        "Code-zero to Production",
        "Production Support",
        "Microservices",
        "Pivotal Cloud Foundry",
        "Distributed Team",
        "Feature Toggles",
        "CLI Development",
        "Angular 2/4/6/7",
        "RxJS / NgRx",
        "Java",
        "Spring Boot",
        "Spring Cloud Stream",
        "Spring Batch",
        "RabbitMQ",
      ],
    },
    {
      company: "Consumer Credit Reporting Agency in Atlanta, GA",
      position: "Sr. Software Engineer",
      startDate: "2017-06-01",
      endDate: "2017-10-01",
      summary: `Built a fraud detection and risk analysis system for a consumer credit reporting agency. The system tracked access patterns across factual, situational, and behavioral metrics to build risk profiles and flag fraudulent authentication attempts. Worked on an 8-person team to stand up the backend infrastructure using Java, CassandraDB, Apache Avro, Apache Kafka, and clickstream aggregation tools.`,
      highlights: [
        "Greenfield",
        "Cassandra",
        "Security",
        "Distributed Team",
        "Java",
        "Spring Config Server",
        "Apache Kafka",
        "Apache Avro",
        "Fraud Detection",
      ],
    },
    {
      company: "Credit Card and Payment Services Provider in Wilmington, DE",
      position: "Sr. Software Engineer",
      startDate: "2017-01-01",
      endDate: "2017-06-01",
      summary: `Worked on a large-scale, event-sourced microservices platform serving tens of thousands of daily users for a major payment services provider. Contributed across production support, new product inceptions, and experimental R&D initiatives. Built a developer CLI tool to automate routine development tasks.`,
      highlights: [
        "Microservices",
        "CQRS/Event Sourcing",
        "Production Support",
        "CLI Development",
        "Java",
        "Ruby",
        "Golang",
        "Spring Boot",
        "Spring Cloud Dataflow",
        "Kafka",
        "Axon Framework",
        "Distributed Team",
      ],
    },
    {
      company: "Mortgage Loan and Financial Services Company in Reston, VA",
      position: "Technical Lead/Sr. Developer",
      startDate: "2016-06-01",
      endDate: "2016-12-01",
      summary: `Delivered two engagements for a mortgage and financial services company. First, built a custom testing framework for data engineers to validate ETL jobs — resulting in over 50% reduction in testing time. Then transitioned to coaching 5 scrum teams on Agile development practices through pairing, structured learning, and presentations as they built a next-generation loan delivery system.`,
      highlights: [
        "Greenfield",
        "Coaching and Enablement",
        "AWS",
        "Angular",
        "Full-stack",
        "Spring Boot",
        "Trunk-based Development",
        "Test-Driven Development",
        "Data Testing Framework",
        "ETL",
        "Behaviour Driven Development",
      ],
    },
    {
      company: "Automobile Auction Company in Atlanta, GA",
      position: "Sr. Software Engineer",
      startDate: "2015-03-01",
      endDate: "2016-06-01",
      summary: `Enhanced the capabilities of a legacy messaging platform for an automobile auction company. Built and deployed new services for financial settlements of auctioned vehicles. Coached client developers on best practices for working with legacy systems, including testing, automation, and refactoring techniques.`,
      highlights: [
        "Legacy Modernization",
        "Java",
        "ETL",
        "ActiveMQ",
        "Production Support",
        "Tibco ActiveMatrix/EMS",
        "Informatica",
        "Oracle SQL",
        "AS/400",
      ],
    },
    {
      company: "Cooking Appliances Manufacturer in Columbus, GA",
      position: "Software Developer",
      startDate: "2014-09-01",
      endDate: "2015-02-01",
      summary:
        "Built a mobile application with a product recommendation engine for a cooking appliances manufacturer.",
      highlights: [
        "Greenfield",
        "Mobile",
        "Recommendation Engine",
        "Full-stack",
        "Ruby on Rails",
      ],
    },
    {
      company: "Human Capital Software Company in Weston, FL",
      position: "Software Developer",
      startDate: "2014-03-01",
      endDate: "2015-08-01",
      summary:
        "Developed an organizational management and charting application for an HR software company.",
      highlights: [
        "C#",
        ".NET MVC",
        "KnockoutJS",
        "D3.js",
        "Bootstrap",
        "NUnit",
        "Greenfield",
        "Full-stack",
        "Cucumber",
      ],
    },
    {
      company: "CineMassive Displays",
      position: "Software Engineer",
      startDate: "2011-12",
      endDate: "2014-02",
      summary:
        "Built a desktop application for managing video sources and interfacing with proprietary display hardware.",
      highlights: ["C#", "WPF", "Video Signal Processing", "Full-stack"],
    },
  ],
  volunteer: [
    {
      organization: "ZipCode Wilmington",
      position: "Volunteer",
      website: "https://www.zipcodewilmington.com/",
      startDate: "2017-03",
      highlights: [
        "Helping aspiring software developers work on group projects and prepare for interviews with potential employers",
      ],
    },
    {
      organization: "Digital Youth Founders",
      position: "Volunteer",
      website: "http://organization.com/",
      highlights: [
        "Helping middle and high-school kids learn to build software.",
      ],
    },
    {
      organization: "Trees Atlanta",
      position: "Volunteer",
      website: "http://organization.com/",
      summary: "Planting new trees to replace ones lost to urban development",
      highlights: [],
    },
    {
      organization: "Open Hand",
      position: "Volunteer",
      website: "http://organization.com/",
      summary:
        "Delivering food and groceries to people with disabilities and chronic illnesses.",
      highlights: ["1,000 pounds of food donations"],
    },
    {
      organization: "Atlanta Community Food Bank",
      position: "Volunteer",
      website: "https://www.acfb.org/",
      summary:
        "Sorting and packing food donations for distribution to local food pantries.",
    },
  ],
  education: [
    {
      institution: "Georgia State University",
      area: "Computer Science",
      studyType: "M.Sc. in Computer Science (incomplete)",
      startDate: "2005-08",
      endDate: "2006-01",
      gpa: "4.30",
      courses: [],
    },
    {
      institution: "University of Georgia",
      area: "Marketing",
      studyType: "Bachelor of Business Administration",
      startDate: "2003-08",
      endDate: "2004-05",
      gpa: "3.2 in Major (Dean's List)",
      courses: [],
    },
  ],
  skills: [
    // --- AI & Modern Tooling ---
    {
      name: "AI-Driven Development",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "Claude Code",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "GitHub Copilot",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Amazon Kiro",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Google Gemini",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "ChatGPT / OpenAI",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Cursor",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Spec-Driven Development (SDD)",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Agentic Workflows",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Workflow Automation (n8n)",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Prompt Engineering",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "AI Team Enablement & Adoption",
      level: 90,
      keywords: ["Technical"],
    },
    // --- Core Stack ---
    {
      name: "TypeScript",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "JavaScript",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "React",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "React Native",
      level: 75,
      keywords: ["Technical"],
    },
    {
      name: "Next.js",
      level: 75,
      keywords: ["Technical"],
    },
    {
      name: "Node.js",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Java",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "Spring Boot",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Python",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "Ruby",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Ruby on Rails",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "C#",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Kotlin",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Golang",
      level: 40,
      keywords: ["Technical"],
    },
    // --- Cloud & Infrastructure ---
    {
      name: "AWS",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Lambda",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Terraform",
      level: 75,
      keywords: ["Technical"],
    },
    {
      name: "Docker",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Google Cloud Platform",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Serverless Architecture",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "CI/CD Pipelines",
      level: 85,
      keywords: ["Technical"],
    },
    {
      name: "Supabase",
      level: 75,
      keywords: ["Technical"],
    },
    {
      name: "Firebase",
      level: 70,
      keywords: ["Technical"],
    },
    // --- Data ---
    {
      name: "PostgreSQL",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "DynamoDB",
      level: 75,
      keywords: ["Technical"],
    },
    {
      name: "MongoDB",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Cassandra",
      level: 65,
      keywords: ["Technical"],
    },
    {
      name: "ElasticSearch",
      level: 65,
      keywords: ["Technical"],
    },
    {
      name: "Kafka",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "RabbitMQ",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "GraphQL",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "Prisma",
      level: 70,
      keywords: ["Technical"],
    },
    // --- Frontend ---
    {
      name: "Angular (2+)",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "HTML / CSS",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "D3.js",
      level: 50,
      keywords: ["Technical"],
    },
    // --- Mobile ---
    {
      name: "Android",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "iOS",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Unity",
      level: 40,
      keywords: ["Technical"],
    },
    // --- Legacy (retained) ---
    {
      name: "AS/400",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "Tibco ActiveMatrix/EMS",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "KnockoutJS",
      level: 50,
      keywords: ["Technical"],
    },
    {
      name: "PhoneGap",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "Grunt",
      level: 50,
      keywords: ["Technical"],
    },
    {
      name: "Gulp",
      level: 50,
      keywords: ["Technical"],
    },
    {
      name: "Cloud Foundry (PCF)",
      level: 75,
      keywords: ["Technical"],
    },
    // --- Testing ---
    {
      name: "Test-Driven Development",
      level: 90,
      keywords: ["Testing"],
    },
    {
      name: "Behaviour Driven Development",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Selenium WebDriver",
      level: 70,
      keywords: ["Testing"],
    },
    {
      name: "Cucumber",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Jest / Mocha / JUnit",
      level: 85,
      keywords: ["Testing"],
    },
    {
      name: "Load & Performance Testing",
      level: 60,
      keywords: ["Testing"],
    },
    {
      name: "Security Testing",
      level: 40,
      keywords: ["Testing"],
    },
    {
      name: "Jenkins",
      level: 80,
      keywords: ["Testing"],
    },
    // --- Consulting ---
    {
      name: "Communication",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Executive Advisory",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Facilitation",
      level: 85,
      keywords: ["Consulting"],
    },
    {
      name: "People Management",
      level: 85,
      keywords: ["Consulting"],
    },
    {
      name: "Negotiation",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Organizational Transformation",
      level: 75,
      keywords: ["Consulting"],
    },
    {
      name: "Presenting / Public Speaking",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Problem Solving",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Relationship Building",
      level: 85,
      keywords: ["Consulting"],
    },
    {
      name: "Strategy",
      level: 75,
      keywords: ["Consulting"],
    },
    {
      name: "Teaching / Mentorship",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "AI Adoption Strategy",
      level: 90,
      keywords: ["Consulting"],
    },
    // --- Domain ---
    {
      name: "Financial Services & Insurance",
      level: 80,
      keywords: ["Domain"],
    },
    {
      name: "E-Commerce & Retail",
      level: 80,
      keywords: ["Domain"],
    },
    {
      name: "Automotive",
      level: 65,
      keywords: ["Domain"],
    },
    {
      name: "Entertainment & Media",
      level: 65,
      keywords: ["Domain"],
    },
    {
      name: "SaaS & Product Development",
      level: 80,
      keywords: ["Domain"],
    },
    // --- Languages ---
    {
      name: "Arabic",
      level: 40,
      keywords: ["Language"],
    },
    {
      name: "French",
      level: 40,
      keywords: ["Language"],
    },
    {
      name: "Hindi",
      level: 80,
      keywords: ["Language"],
    },
    {
      name: "Spanish",
      level: 40,
      keywords: ["Language"],
    },
  ],
  languages: [
    {
      name: "English",
      level: "Native speaker",
    },
    {
      name: "Hindi",
      level: "Native speaker",
    },
    {
      name: "Urdu",
      level: "Fluent",
    },
    {
      name: "Arabic",
      level: "Basic",
    },
    {
      name: "Spanish",
      level: "Basic",
    },
    {
      name: "French",
      level: "Basic",
    },
  ],
  interests: [
    {
      name: "Music",
      keywords: [
        "Playing: I play various stringed instruments, from acoustic/electric guitar, to bass, to mandolin",
      ],
    },
    {
      name: "Virtual Reality",
      keywords: ["Vive/Gear VR exploration"],
    },
    {
      name: "Soccer",
      keywords: ["PL: Manchester City", "MLS: Atlanta United"],
    },
    {
      name: "Video Games",
      keywords: ["PC/PS4"],
    },
    {
      name: "Outdoors",
      keywords: ["Hiking", "Kayaking", "Biking"],
    },
    {
      name: "Motorsports",
      keywords: ["Racing Aerodynamics", "F1"],
    },
  ],
  references: [],
  awards: [],
  publications: [],
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
  location: PropTypes.shape(locationType as any),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(
  PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const volunteerType = PropTypes.arrayOf(
  PropTypes.shape({
    organization: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const educationType = PropTypes.arrayOf(
  PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const awardsType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    awarder: PropTypes.string,
    summary: PropTypes.string,
  })
).isRequired;

export const publicationsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    publisher: PropTypes.string,
    releaseDate: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
  })
).isRequired;

export const skillsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const languagesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
  })
).isRequired;

export const interestsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const referencesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    reference: PropTypes.string,
  })
).isRequired;

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
