export const portfolioData = {
  profile: {
    name: "Avackaa Micheal Jr.",
    fullName: "Avackaa Micheal A. Jr.",
    monogram: "AM",
    location: "Jos, Plateau State, Nigeria",
    coordinates: "9.8965° N, 8.8583° E",
    roleStatement: "Full-stack developer building reliable web applications and REST APIs with Python (FastAPI) and PHP (Laravel).",
    supportingLine: "Focused on backend systems, relational data, integrations, and clean, maintainable software. I also teach PHP, MySQL, and Laravel.",
    email: "avackaamicheal@gmail.com",
    githubUrl: "https://github.com/avackaamicheal",
    linkedinUrl: "https://linkedin.com/in/michealavackaa",
    resumeUrl: "/assets/avackaa-micheal-cv.pdf",
    resumeFilename: "Avackaa_Micheal_CV.pdf",
    phone: "+2348068097685",
    showPhonePublicly: false,
  },

  hero: {
    eyebrow: "Jos, Plateau State, Nigeria",
    nameLines: ["Avackaa", "Micheal Jr."],
    headlineParts: {
      before: "Full-stack developer building reliable web applications and REST APIs with ",
      highlight1: "Python (FastAPI)",
      mid: " and ",
      highlight2: "PHP (Laravel)",
      after: ".",
    },
    supportingText: "Focused on backend systems, relational data, integrations, and clean, maintainable software. I also teach PHP, MySQL, and Laravel.",
    primaryCta: {
      label: "See the work",
      href: "#work",
    },
    secondaryCta: {
      label: "Get in touch",
      href: "#contact",
      badge: "Open for roles",
    },
  },

  about: {
    eyebrow: "About",
    heading: "Hi there!",
    lede: "I'm Avackaa, a full-stack developer who works across backend engineering and responsive web interfaces. I build applications and REST APIs with Python/FastAPI and PHP/Laravel, and work with relational databases, migrations, authentication, and third-party integrations.",
    notes: [
      "Alongside development, I teach PHP, MySQL, and Laravel at Axia Technology & Innovation Hub, helping learners understand the fundamentals and apply them in practical projects.",
      "My academic background in Biochemistry has also shaped an analytical approach to solving problems."
    ],
    cardMeta: {
      location: "Jos, Plateau State, Nigeria",
      specialization: "FastAPI · Laravel · Relational DBs",
      education: "B.Sc. Biochemistry · Univ. of Jos",
    }
  },

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", type: "core", iconClass: "devicon-python-plain colored" },
        { name: "PHP", type: "core", iconClass: "devicon-php-plain colored" },
        { name: "JavaScript (ES6+)", type: "core", iconClass: "devicon-javascript-plain colored" },
        { name: "HTML5", type: "standard", iconClass: "devicon-html5-plain colored" },
        { name: "CSS3", type: "standard", iconClass: "devicon-css3-plain colored" },
        { name: "Responsive Design", type: "text" },
        { name: "DOM Manipulation", type: "text" }
      ]
    },
    {
      category: "Backend & Architecture",
      items: [
        { name: "FastAPI", type: "core", iconClass: "devicon-fastapi-plain colored" },
        { name: "Laravel", type: "core", iconClass: "devicon-laravel-original colored" },
        { name: "RESTful API Design", type: "text" },
        { name: "MVC Architecture", type: "text" },
        { name: "Object-Oriented Programming (OOP)", type: "text" },
        { name: "Asynchronous Programming", type: "text" }
      ]
    },
    {
      category: "Databases & Data",
      items: [
        { name: "PostgreSQL", type: "core", iconClass: "devicon-postgresql-plain colored" },
        { name: "MySQL", type: "core", iconClass: "devicon-mysql-original colored" },
        { name: "SQLite", type: "standard", iconClass: "devicon-sqlite-plain colored" },
        { name: "SQLAlchemy", type: "standard", iconClass: "devicon-sqlalchemy-plain colored" },
        { name: "Alembic", type: "standard", iconCustomSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4.1 19.5A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.5L14 9.31V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="6.8" y1="15" x2="17.2" y2="15"/></svg>' },
        { name: "Eloquent ORM", type: "standard", iconClass: "devicon-laravel-plain" },
        { name: "Relational Schema Migrations", type: "text" },
        { name: "JSON Data Schemas", type: "text" }
      ]
    },
    {
      category: "Frontend Styling",
      items: [
        { name: "Tailwind CSS", type: "standard", iconClass: "devicon-tailwindcss-original colored" },
        { name: "Bootstrap", type: "standard", iconClass: "devicon-bootstrap-plain colored" }
      ]
    },
    {
      category: "Integrations & Delivery",
      items: [
        { name: "Paystack", type: "standard", iconCustomSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M4 6h16M4 12h12M4 18h8"/></svg>' },
        { name: "Monnify", type: "standard", iconCustomSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 10h20"/></svg>' },
        { name: "Webhooks", type: "text" },
        { name: "Application Deployment", type: "text" },
        { name: "CI/CD Pipelines", type: "text" }
      ]
    },
    {
      category: "Tools & Practices",
      items: [
        { name: "Git & GitHub", type: "standard", iconClass: "devicon-git-plain colored" },
        { name: "Postman", type: "standard", iconClass: "devicon-postman-plain colored" },
        { name: "Linux Environment", type: "standard", iconClass: "devicon-linux-plain" },
        { name: "Unit Testing", type: "text" },
        { name: "Agile/Scrum Workflow", type: "text" },
        { name: "System Debugging", type: "text" },
        { name: "Technical Instruction & Mentoring", type: "text" }
      ]
    }
  ],

  experience: [
    {
      id: "role-intern",
      organization: "Axia Technology & Innovation Hub",
      role: "Full-Stack & Backend Developer Intern",
      period: "Dec 2025 – Present",
      shortPeriod: "2025 – Present",
      location: "Jos, Plateau State, Nigeria",
      focus: "Software Engineering, API Integration & Web Application Development",
      lede: "Engineer server-side applications, relational database architectures, and responsive web user interfaces across client projects and internal tools.",
      bullets: [
        "Engineer server-side applications and high-performance microservices using Python (FastAPI) and PHP (Laravel).",
        "Develop responsive, mobile-first web user interfaces utilizing HTML5, CSS3, Tailwind CSS, and Bootstrap components.",
        "Design relational database schemas and optimize query performance across PostgreSQL and MySQL database systems.",
        "Build and document standard RESTful API endpoints consumed by internal operational tools and member dashboards.",
        "Troubleshoot application bugs, review code for best practices, and participate in sprint planning sessions."
      ],
      chips: ["FastAPI", "Laravel", "Python", "PHP", "PostgreSQL", "MySQL", "Tailwind CSS", "Bootstrap", "REST APIs"]
    },
    {
      id: "role-instructor",
      organization: "Axia Technology & Innovation Hub",
      role: "Backend Instructor (PHP, MySQL & Laravel)",
      period: "Dec 2024 – Present",
      shortPeriod: "2024 – Present",
      location: "Jos, Plateau State, Nigeria",
      focus: "Technical Instruction, Curriculum Delivery & Developer Mentorship",
      lede: "Deliver hands-on instruction and developer mentorship in modern backend engineering, relational database design, and production web application architectures.",
      bullets: [
        "Deliver hands-on lectures and practical training on PHP fundamentals, Object-Oriented Programming (OOP), and the Laravel MVC framework.",
        "Train students in relational database modeling, normalization, indexing, and complex SQL querying in MySQL using Eloquent ORM.",
        "Guide learners through building production-ready RESTful APIs, implementing robust authentication, and integrating database migrations.",
        "Conduct regular code reviews, assess project submissions, and mentor aspiring developers in software engineering best practices and Git collaboration."
      ],
      chips: ["PHP", "Laravel", "MySQL", "Eloquent ORM", "OOP", "Database Normalization", "Git", "Mentorship"]
    }
  ],

  projects: [
    {
      id: "student-cloud",
      num: "01",
      year: "2026",
      type: "Full-Stack Application",
      title: "Student_Cloud",
      subtitle: "School Management System",
      lede: "A full-stack school management web application designed to streamline student administration, enrollment records, and academic tracking.",
      chips: ["Laravel (PHP)", "MySQL", "Blade", "Bootstrap / Tailwind CSS", "Eloquent ORM"],
      highlights: [
        "Architected a full-stack school management web application using Laravel's MVC pattern to streamline student administration, enrollment records, and academic tracking.",
        "Designed and migrated normalized relational database schemas in MySQL, leveraging Eloquent ORM to handle complex entity relationships across courses, classes, and students.",
        "Implemented secure authentication, session management, and role-based permissions (RBAC) to control access for administrators, teachers, and students."
      ],
      details: {
        overview: "Student_Cloud addresses administrative overhead in educational institutions by unifying student admissions, course registrations, class allocations, and academic progress tracking within a unified Laravel web application.",
        keyFeatures: [
          "Role-based access control (RBAC) separating administrative controls, teacher gradebook entries, and student records.",
          "Dynamic student enrollment lifecycle management from registration through academic session progression.",
          "Centralized course and class assignment scheduling with relational foreign-key integrity.",
          "Mobile-responsive administrative dashboards constructed with Blade templates, Tailwind CSS, and Bootstrap."
        ],
        engineeringNotes: [
          "Utilizes Laravel's MVC structure to decouple request handling, business logic, and presentation.",
          "Eloquent ORM relationships handle one-to-many and many-to-many associations between departments, instructors, courses, and enrolled students.",
          "Database migrations and seeders ensure reliable environment replication and schema consistency."
        ]
      }
    },
    {
      id: "bookit",
      num: "02",
      year: "2026",
      type: "Asynchronous REST API",
      title: "BookIT",
      subtitle: "Asynchronous Booking & Reservation API",
      lede: "An asynchronous REST API for handling real-time appointments, resource scheduling, and booking reservations.",
      chips: ["FastAPI", "Python", "PostgreSQL / SQLite", "SQLAlchemy", "Alembic", "Pydantic", "Postman"],
      highlights: [
        "Developed a high-performance asynchronous RESTful API for handling real-time appointments, resource scheduling, and booking reservations.",
        "Configured Alembic to manage database versioning, programmatic schema migrations, and seamless evolution of persistent tables.",
        "Defined strict request serialization using Pydantic models and structured relational data models with SQLAlchemy ORM to ensure concurrency safety."
      ],
      details: {
        overview: "BookIT provides a robust backend engine designed for booking workflows and schedule management, utilizing Python's native async/await capabilities through FastAPI.",
        keyFeatures: [
          "Non-blocking asynchronous endpoint handlers for conflict-free appointment scheduling.",
          "Strict request and response schema validation using Pydantic type definitions.",
          "Dual database support with SQLite for local development and PostgreSQL for production deployments.",
          "Automated schema versioning and zero-downtime programmatic migrations with Alembic."
        ],
        engineeringNotes: [
          "SQLAlchemy 2.0 async sessions guarantee connection pooling and safe transaction handling under concurrent load.",
          "Normalized appointment, resource, and availability tables enforce business rules at the database constraint level.",
          "Interactive OpenAPI documentation generated directly from FastAPI type specifications."
        ]
      }
    },
    {
      id: "secure-auth",
      num: "03",
      year: "2025",
      type: "Security Architecture",
      title: "Secure User Authentication & Account Management System",
      subtitle: "Custom native PHP authentication and account management",
      lede: "A custom authentication and access control module built from scratch using native PHP and MySQL without external backend frameworks.",
      chips: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "PDO", "Bcrypt"],
      highlights: [
        "Engineered a custom authentication and access control module from scratch using native PHP and MySQL without external backend frameworks.",
        "Implemented secure password hashing (bcrypt), session hijacking protection, CSRF token validation, and SQL injection prevention via PDO prepared statements.",
        "Crafted a responsive, intuitive frontend interface using semantic HTML5 and custom CSS for sign-in, user registration, and account recovery workflows."
      ],
      details: {
        overview: "Built to demonstrate foundational application security principles and deep core understanding of native PHP web architecture without relying on third-party frameworks or auth libraries.",
        keyFeatures: [
          "Cryptographically secure user password hashing using native PHP password_hash with bcrypt.",
          "Protection against session hijacking and fixation via strict cookie flags (HttpOnly, SameSite, Secure) and periodic session ID regeneration.",
          "Synchronizer token pattern for Cross-Site Request Forgery (CSRF) validation on state-altering forms.",
          "Universal parameterized query execution via PHP Data Objects (PDO) to eliminate SQL injection vulnerabilities."
        ],
        engineeringNotes: [
          "Custom validation and sanitization pipeline for incoming request payloads before business processing.",
          "Complete user lifecycle management: self-service registration, credential authentication, profile management, and account recovery."
        ]
      }
    }
  ],

  credentials: {
    eyebrow: "The rest of it",
    heading: "Education & Credentials",
    items: [
      {
        title: "Bachelor of Science (B.Sc.) in Biochemistry",
        institution: "University of Jos, Plateau State, Nigeria",
        details: "Second Class Division",
        year: "2012"
      },
      {
        title: "West African Senior School Certificate (WASSCE)",
        institution: "Emmanuel International College, Plateau State, Nigeria",
        details: "Senior Secondary Education",
        year: "2006"
      }
    ],
    referenceNotice: "Professional references and technical endorsements available upon request."
  },

  closer: {
    heading1: "Let's build",
    heading2: "something.",
    lede: "Have a project, a backend challenge, or an opportunity to collaborate? Send me a message.",
    email: "avackaamicheal@gmail.com"
  }
};
