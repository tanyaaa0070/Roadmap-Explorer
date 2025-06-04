document.addEventListener('DOMContentLoaded', () => {
    const roadmapNavLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const roadmapTitle = document.getElementById('roadmap-title');
    const roadmapContent = document.getElementById('roadmap-content');

    // Define roadmap data
    const roadmaps = {
        frontend: {
            title: "Frontend Developer Roadmap",
            description: "Become a proficient web frontend developer, building interactive and user-friendly interfaces.",
            phases: [
                {
                    name: "Phase 1: The Basics (HTML, CSS, JS)",
                    icon: "fas fa-code",
                    topics: [
                        { name: "HTML Fundamentals", resources: ["HTML Crash Course", "MDN HTML Guide"] },
                        { name: "CSS Fundamentals", resources: ["CSS Crash Course", "MDN CSS Guide"] },
                        { name: "JavaScript Basics", resources: ["JavaScript.info", "Eloquent JavaScript"] },
                        { name: "Responsive Design (Media Queries)", resources: ["CSS-Tricks Responsive Guide"] },
                        { name: "Browser Dev Tools", resources: ["Chrome DevTools Docs"] }
                    ]
                },
                {
                    name: "Phase 2: CSS Frameworks & Preprocessors",
                    icon: "fas fa-paint-brush",
                    topics: [
                        { name: "Bootstrap 5", resources: ["Bootstrap Docs", "Brad Traversy Bootstrap Course"] },
                        { name: "Tailwind CSS", resources: ["Tailwind CSS Docs", "Tailwind CSS Tutorial"] },
                        { name: "Sass/Less (Preprocessors)", resources: ["Sass Guide", "Less Guide"] }
                    ]
                },
                {
                    name: "Phase 3: JavaScript Frameworks & Tools",
                    icon: "fas fa-puzzle-piece",
                    topics: [
                        { name: "Node.js Basics & npm", resources: ["Node.js Docs", "NPM Docs"] },
                        { name: "Git & GitHub", resources: ["Git Handbook", "GitHub Guides"] },
                        { name: "React.js (or Vue/Angular)", resources: ["React Docs", "React Tutorial"] },
                        { name: "State Management (e.g., Redux)", resources: ["Redux Docs"] },
                        { name: "Routing (React Router)", resources: ["React Router Docs"] },
                        { name: "Build Tools (Webpack/Vite)", resources: ["Webpack Guide", "Vite Docs"] },
                        { name: "Testing (Jest, React Testing Library)", resources: ["Jest Docs", "RTL Docs"] }
                    ]
                },
                {
                    name: "Phase 4: Advanced Concepts & Best Practices",
                    icon: "fas fa-lightbulb",
                    topics: [
                        { name: "Performance Optimization", resources: ["Web.dev Performance"] },
                        { name: "Accessibility (A11y)", resources: ["MDN Accessibility"] },
                        { name: "Web Security Basics", resources: ["OWASP Top 10"] },
                        { name: "PWA (Progressive Web Apps)", resources: ["Google PWA Guide"] },
                        { name: "Server-Side Rendering (SSR)", resources: ["Next.js Docs"] },
                        { name: "GraphQL Basics", resources: ["GraphQL Docs"] }
                    ]
                }
            ]
        },
        backend: {
            title: "Backend Developer Roadmap",
            description: "Learn to build robust server-side applications, APIs, and manage databases.",
            phases: [
                {
                    name: "Phase 1: Programming Language & Basics",
                    icon: "fas fa-laptop-code",
                    topics: [
                        { name: "Choose a Language (Node.js/Python/Go/Java/PHP)", resources: ["Node.js", "Python.org", "Go Lang", "Java", "PHP"] },
                        { name: "Data Structures & Algorithms", resources: ["LeetCode", "HackerRank"] },
                        { name: "Git & GitHub", resources: ["Git Handbook"] },
                        { name: "HTTP/HTTPS & RESTful APIs", resources: ["MDN HTTP", "REST API Guide"] }
                    ]
                },
                {
                    name: "Phase 2: Database Management",
                    icon: "fas fa-database",
                    topics: [
                        { name: "Relational Databases (SQL - PostgreSQL/MySQL)", resources: ["PostgreSQL Docs", "MySQL Docs"] },
                        { name: "NoSQL Databases (MongoDB/Redis)", resources: ["MongoDB Docs", "Redis Docs"] },
                        { name: "ORM/ODM", resources: ["Prisma", "Sequelize"] }
                    ]
                },
                {
                    name: "Phase 3: Frameworks & API Development",
                    icon: "fas fa-server",
                    topics: [
                        { name: "Node.js (Express/NestJS)", resources: ["Express.js", "NestJS Docs"] },
                        { name: "Python (Django/Flask)", resources: ["Django", "Flask"] },
                        { name: "Go (Gin/Echo)", resources: ["Gin Web Framework"] },
                        { name: "Java (Spring Boot)", resources: ["Spring Boot Docs"] },
                        { name: "API Security (AuthN/AuthZ)", resources: ["JWT", "OAuth 2.0"] }
                    ]
                },
                {
                    name: "Phase 4: Deployment & Operations",
                    icon: "fas fa-cloud",
                    topics: [
                        { name: "Linux Basics", resources: ["Linux Command Line"] },
                        { name: "Docker & Containerization", resources: ["Docker Docs"] },
                        { name: "Cloud Platforms (AWS/Azure/GCP)", resources: ["AWS Free Tier"] },
                        { name: "CI/CD", resources: ["Jenkins", "GitHub Actions"] },
                        { name: "Monitoring & Logging", resources: ["Prometheus", "Grafana"] }
                    ]
                }
            ]
        },
        cybersecurity: {
            title: "Cybersecurity Roadmap",
            description: "Protect systems, networks, and data from digital threats.",
            phases: [
                {
                    name: "Phase 1: IT Fundamentals",
                    icon: "fas fa-shield-alt",
                    topics: [
                        { name: "Operating Systems (Linux, Windows)", resources: ["Linux Basics", "Windows Admin Docs"] },
                        { name: "Networking Basics (TCP/IP, OSI Model)", resources: ["CompTIA Network+"] },
                        { name: "Virtualization", resources: ["VirtualBox", "VMware"] },
                        { name: "Scripting (Python, Bash)", resources: ["Python for Pentesters", "Bash Scripting"] }
                    ]
                },
                {
                    name: "Phase 2: Core Cybersecurity Concepts",
                    icon: "fas fa-user-secret",
                    topics: [
                        { name: "Information Security Principles (CIA Triad)", resources: ["CISSP Concepts"] },
                        { name: "Cryptography", resources: ["Cryptography Intro"] },
                        { name: "Malware Analysis", resources: ["Malware Analysis Guide"] },
                        { name: "Incident Response", resources: ["NIST Incident Response"] },
                        { name: "Security Operations (SOC)", resources: ["SOC Handbook"] }
                    ]
                },
                {
                    name: "Phase 3: Offensive Security (Red Teaming)",
                    icon: "fas fa-skull-crossbones",
                    topics: [
                        { name: "Penetration Testing (Web/Network)", resources: ["OWASP Top 10", "Metasploit"] },
                        { name: "Vulnerability Assessment", resources: ["Nessus"] },
                        { name: "Exploitation", resources: ["CTF Challenges"] },
                        { name: "Social Engineering", resources: ["Social Engineering A-Z"] }
                    ]
                },
                {
                    name: "Phase 4: Defensive Security (Blue Teaming)",
                    icon: "fas fa-lock",
                    topics: [
                        { name: "Security Information & Event Management (SIEM)", resources: ["Splunk", "ELK Stack"] },
                        { name: "Firewalls & IDS/IPS", resources: ["Firewall Basics"] },
                        { name: "Endpoint Protection", resources: ["Endpoint Security Guide"] },
                        { name: "Threat Hunting", resources: ["Threat Hunting Guide"] },
                        { name: "Compliance & Regulations (GDPR, HIPAA)", resources: ["GDPR Basics"] }
                    ]
                }
            ]
        },
        blockchain: {
            title: "Blockchain Developer Roadmap",
            description: "Build decentralized applications and understand blockchain technology.",
            phases: [
                {
                    name: "Phase 1: Foundations",
                    icon: "fas fa-cubes",
                    topics: [
                        { name: "Cryptography Basics (Hashing, Asymmetric Crypto)", resources: ["Bitcoin Whitepaper"] },
                        { name: "Distributed Systems Concepts", resources: ["Distributed Systems Basics"] },
                        { name: "Consensus Mechanisms (PoW, PoS)", resources: ["Ethereum Whitepaper"] },
                        { name: "Basic Web Development (HTML, CSS, JS)", resources: ["MDN Web Docs"] }
                    ]
                },
                {
                    name: "Phase 2: Smart Contracts & Ethereum",
                    icon: "fab fa-ethereum",
                    topics: [
                        { name: "Solidity Programming Language", resources: ["Solidity Docs"] },
                        { name: "Remix IDE", resources: ["Remix Docs"] },
                        { name: "Truffle/Hardhat (Development Frameworks)", resources: ["Truffle Docs", "Hardhat Docs"] },
                        { name: "ERC Standards (ERC-20, ERC-721)", resources: ["ERC-20 Standard"] },
                        { name: "Web3.js / Ethers.js", resources: ["Web3.js Docs", "Ethers.js Docs"] }
                    ]
                },
                {
                    name: "Phase 3: DApp Development",
                    icon: "fas fa-decentralized",
                    topics: [
                        { name: "Frontend Integration (React/Vue/Angular)", resources: ["React Docs"] },
                        { name: "IPFS (InterPlanetary File System)", resources: ["IPFS Docs"] },
                        { name: "Oracles (Chainlink)", resources: ["Chainlink Docs"] },
                        { name: "Layer 2 Solutions", resources: ["Polygon Docs", "Arbitrum Docs"] }
                    ]
                },
                {
                    name: "Phase 4: Advanced Concepts & Other Blockchains",
                    icon: "fas fa-network-wired",
                    topics: [
                        { name: "Gas Optimization", resources: ["Solidity Gas Optimization"] },
                        { name: "Security Auditing for Smart Contracts", resources: ["OpenZeppelin Contracts"] },
                        { name: "Other Blockchains (Solana, Polkadot, Avalanche)", resources: ["Solana Docs", "Polkadot Docs"] },
                        { name: "Tokenomics", resources: ["Tokenomics Guide"] }
                    ]
                }
            ]
        },
        devops: {
            title: "DevOps Engineer Roadmap",
            description: "Automate and streamline the software development lifecycle.",
            phases: [
                {
                    name: "Phase 1: OS, Networking & Scripting",
                    icon: "fas fa-terminal",
                    topics: [
                        { name: "Linux Fundamentals", resources: ["Linux Journey"] },
                        { name: "Networking Basics", resources: ["CompTIA Network+"] },
                        { name: "Bash Scripting", resources: ["Bash Scripting Tutorial"] },
                        { name: "Python for Automation", resources: ["Automate the Boring Stuff with Python"] },
                        { name: "Git & Version Control", resources: ["Pro Git Book"] }
                    ]
                },
                {
                    name: "Phase 2: Server Management & Cloud",
                    icon: "fas fa-cloud-upload-alt",
                    topics: [
                        { name: "Web Servers (Nginx, Apache)", resources: ["Nginx Docs", "Apache Docs"] },
                        { name: "Cloud Platforms (AWS/Azure/GCP)", resources: ["AWS Certified Cloud Practitioner"] },
                        { name: "Virtualization & Containers (Docker)", resources: ["Docker Deep Dive"] },
                        { name: "Container Orchestration (Kubernetes)", resources: ["Kubernetes Docs"] }
                    ]
                },
                {
                    name: "Phase 3: CI/CD & Automation",
                    icon: "fas fa-cogs",
                    topics: [
                        { name: "CI/CD Concepts", resources: ["CI/CD Pipeline Guide"] },
                        { name: "CI/CD Tools (Jenkins, GitLab CI, GitHub Actions)", resources: ["Jenkins Docs", "GitHub Actions Docs"] },
                        { name: "Infrastructure as Code (IaC - Terraform, Ansible)", resources: ["Terraform Docs", "Ansible Docs"] },
                        { name: "Monitoring & Logging (Prometheus, Grafana, ELK)", resources: ["Prometheus", "Grafana"] }
                    ]
                },
                {
                    name: "Phase 4: Advanced DevOps & SRE",
                    icon: "fas fa-robot",
                    topics: [
                        { name: "Service Mesh (Istio, Linkerd)", resources: ["Istio Docs"] },
                        { name: "Chaos Engineering", resources: ["Principles of Chaos Engineering"] },
                        { name: "Security in DevOps (DevSecOps)", resources: ["DevSecOps Guide"] },
                        { name: "Site Reliability Engineering (SRE) Principles", resources: ["Google SRE Book"] },
                        { name: "Performance Testing", resources: ["JMeter"] }
                    ]
                }
            ]
        }
    };

    // Function to render a roadmap
    function renderRoadmap(roadmapKey) {
        const roadmap = roadmaps[roadmapKey];
        if (!roadmap) {
            roadmapContent.innerHTML = `<div class="col-md-8 text-center placeholder-content">
                                            <p class="lead text-danger">Roadmap not found!</p>
                                            <p class="text-muted">Please select a valid roadmap from the navigation.</p>
                                        </div>`;
            roadmapTitle.textContent = "Error: Roadmap Not Found";
            return;
        }

        roadmapTitle.textContent = roadmap.title;
        let html = `<div class="col-12"><p class="lead text-center mb-5">${roadmap.description}</p></div>`;

        roadmap.phases.forEach(phase => {
            html += `
                <div class="col-md-8">
                    <div class="roadmap-phase">
                        <div class="roadmap-phase-header">
                            <i class="${phase.icon} roadmap-phase-icon"></i>
                            <h3>${phase.name}</h3>
                        </div>
                        <div class="roadmap-phase-body">`;

            phase.topics.forEach(topic => {
                html += `
                            <div class="roadmap-topic">
                                <h4>${topic.name}</h4>
                                <ul>`;
                topic.resources.forEach(resource => {
                    // For a real project, you'd have actual URLs here
                    html += `<li><i class="fas fa-check-circle"></i> <a href="#" target="_blank">${resource}</a></li>`;
                });
                html += `
                                </ul>
                            </div>`;
            });
            html += `
                        </div>
                    </div>
                </div>`;
        });

        roadmapContent.innerHTML = html; // Inject the generated HTML
    }

    // Handle navigation clicks
    roadmapNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (page reload)

            // Remove active class from all links
            roadmapNavLinks.forEach(nav => nav.classList.remove('active-roadmap'));

            // Add active class to the clicked link
            link.classList.add('active-roadmap');

            const roadmapKey = link.dataset.roadmap; // Get the roadmap key from data-roadmap attribute
            renderRoadmap(roadmapKey); // Render the selected roadmap
        });
    });

    // Optionally, load a default roadmap on initial page load
    // For example, load Frontend roadmap by default
    const defaultRoadmapKey = 'frontend';
    const defaultNavLink = document.querySelector(`.nav-link[data-roadmap="${defaultRoadmapKey}"]`);
    if (defaultNavLink) {
        defaultNavLink.classList.add('active-roadmap');
        renderRoadmap(defaultRoadmapKey);
    }
});