// Theme and Global Configurations
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggle');
const scrollBar = document.getElementById('scrollBar');
const header = document.getElementById('header');
const cliInput = document.getElementById('cliInput');
const cliBody = document.getElementById('cliBody');

// Project Data for Tabbed Modals
const projectsData = {
  news_portal: {
    title: "News App Aggregator Portal",
    tags: ["Python", "REST APIs", "Git", "FastAPI"],
    overview: "A digital news portal collecting feed parameters from multiple global news outlets. It uses asynchronous API call threads to download alerts in parallel, dedupes articles, and aggregates custom feeds for endpoints.",
    challenges: [
      "<strong>Thread Block Reduction:</strong> Configured asynchronous Python asyncio workers to request raw alerts from news channels in parallel, decreasing polling latency by 72%.",
      "<strong>Payload Extraction validation:</strong> Wrote JSON schema filters in Python to prevent corrupt news alerts from breaking the database insertion routines."
    ],
    metrics: [
      "Parses and indexes up to <strong>10,000 global articles/minute</strong>.",
      "Optimized query read-speeds, keeping average endpoint latency below <strong>95 milliseconds</strong>."
    ],
    github: "https://github.com/rohithmenti02-cloud/news-app-portal",
    live: "https://github.com/rohithmenti02-cloud/news-app-portal",
    svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" rx="10" fill="#0f172a"/>
            <!-- Web APIs -->
            <rect x="25" y="40" width="100" height="50" rx="6" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2"/>
            <text x="75" y="70" fill="#3b82f6" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle" font-weight="600">Global News APIs</text>
            <!-- Parser -->
            <rect x="150" y="100" width="100" height="60" rx="6" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="2"/>
            <text x="200" y="130" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="10" text-anchor="middle" font-weight="600">Python Engine</text>
            <text x="200" y="145" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="8" text-anchor="middle">Aggregator Pipeline</text>
            <!-- Client UI -->
            <rect x="275" y="40" width="100" height="50" rx="6" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="2"/>
            <text x="325" y="70" fill="#10b981" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle" font-weight="600">News Feed UI</text>
            <!-- Connection Lines -->
            <path d="M 125 65 H 140 V 115 H 150" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#modalArrow)"/>
            <path d="M 250 130 H 265 V 65 H 275" stroke="#10b981" stroke-width="1.5" marker-end="url(#modalArrow)"/>
            <defs>
              <marker id="modalArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
              </marker>
            </defs>
          </svg>`
  },
  ecommerce: {
    title: "Online E-Commerce Website",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    overview: "A responsive client-facing e-commerce shopping dashboard designed using modern web guidelines. It includes dynamic product cards, filter sorting controls, shopping cart states, local storage data syncing, and pricing validations.",
    challenges: [
      "<strong>Frameworkless state management:</strong> Engineered a lightweight JavaScript state container to sync products and price changes across items, keeping FCP (First Contentful Paint) minimal.",
      "<strong>Cross-device rendering:</strong> Built custom CSS layouts ensuring a native app feel across screens of all widths."
    ],
    metrics: [
      "Client bundle renders under <strong>0.8 seconds</strong> (FCP benchmark).",
      "Achieved 100/100 score in performance and SEO audits."
    ],
    github: "https://github.com/rohithmenti02-cloud/online-ecommerce",
    live: "https://github.com/rohithmenti02-cloud/online-ecommerce",
    svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" rx="10" fill="#0f172a"/>
            <!-- UI catalog -->
            <rect x="30" y="50" width="90" height="150" rx="6" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2"/>
            <text x="75" y="120" fill="#3b82f6" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle" font-weight="600">Product Grid</text>
            <text x="75" y="135" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="8" text-anchor="middle">(DOM items)</text>
            <!-- Cart state -->
            <circle cx="200" cy="120" r="30" fill="#0d9488" fill-opacity="0.15" stroke="#0d9488" stroke-width="2"/>
            <text x="200" y="123" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="9" text-anchor="middle" font-weight="600">Cart State</text>
            <!-- Checkout -->
            <rect x="280" y="50" width="90" height="150" rx="6" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="2"/>
            <text x="325" y="120" fill="#10b981" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle" font-weight="600">Order System</text>
            <!-- Connectors -->
            <path d="M 120 120 H 170" stroke="#0d9488" stroke-width="1.5" marker-end="url(#modalArrow)"/>
            <path d="M 230 120 H 280" stroke="#10b981" stroke-width="1.5" marker-end="url(#modalArrow)"/>
          </svg>`
  },
  shikara_iot: {
    title: "IoT Telemetry Scripting (Shikara Pvt. Ltd Internship)",
    tags: ["Industrial IoT", "Python Scripting", "MQTT", "Telemetry"],
    overview: "Internship development projects working on local industrial IoT controller modules, programming data validation loops, telemetry buffering algorithms, and communication lines to Cloud IoT registries.",
    challenges: [
      "<strong>Offline Buffer Engineering:</strong> Implemented telemetry queue arrays in Python to store data packets locally on flash during network failures, flushing log values once connections restored.",
      "<strong>Serial Read Corruption:</strong> Constructed serial parity checks to intercept and discard damaged packages from controller nodes."
    ],
    metrics: [
      "Buffers up to <strong>48 hours of sensor readings</strong> in offline telemetry logs.",
      "Supports stable telemetry loops at QoS 1 message transmission standards."
    ],
    github: "https://github.com/rohithmenti02-cloud/iot-telemetry-scripts",
    live: "https://github.com/rohithmenti02-cloud/iot-telemetry-scripts",
    svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" rx="10" fill="#0f172a"/>
            <!-- Sensor -->
            <rect x="30" y="60" width="100" height="130" rx="6" fill="#6366f1" fill-opacity="0.1" stroke="#6366f1" stroke-width="2"/>
            <text x="80" y="120" fill="#6366f1" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle" font-weight="600">Industrial Sensor</text>
            <text x="80" y="135" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="8" text-anchor="middle">(Telemetry Node)</text>
            <!-- Script -->
            <rect x="160" y="80" width="100" height="90" rx="6" fill="#0d9488" fill-opacity="0.15" stroke="#0d9488" stroke-width="2"/>
            <text x="210" y="120" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="9" text-anchor="middle" font-weight="600">Telemetry Script</text>
            <text x="210" y="135" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="7" text-anchor="middle">(Python Serial loop)</text>
            <!-- Cloud Gateway -->
            <rect x="280" y="60" width="90" height="130" rx="6" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="2"/>
            <text x="325" y="120" fill="#10b981" font-family="'Outfit', sans-serif" font-size="10" text-anchor="middle" font-weight="600">AWS Cloud IoT</text>
            <!-- Lines -->
            <path d="M 130 125 H 160" stroke="#0d9488" stroke-width="1.5" marker-end="url(#modalArrow)"/>
            <path d="M 260 125 H 280" stroke="#10b981" stroke-width="1.5" marker-end="url(#modalArrow)"/>
          </svg>`
  }
};

// 1. Interactive Node Connection Canvas (Obsidian Dark Theme Glow)
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 130 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

class Particle {
  constructor(x, y, vx, vy, size) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
  }

  draw() {
    const activeTheme = htmlElement.getAttribute('data-theme');
    ctx.fillStyle = activeTheme === 'light' ? 'rgba(37, 99, 235, 0.4)' : 'rgba(99, 102, 241, 0.65)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= dx * force * 0.025;
        this.y -= dy * force * 0.025;
      }
    }

    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
}

function initParticles() {
  particles = [];
  const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 80);
  for (let i = 0; i < numParticles; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const vx = (Math.random() - 0.5) * 0.5;
    const vy = (Math.random() - 0.5) * 0.5;
    particles.push(new Particle(x, y, vx, vy, size));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const activeTheme = htmlElement.getAttribute('data-theme');
  const maxConnectDist = 110;
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < maxConnectDist) {
        const alpha = (maxConnectDist - dist) / maxConnectDist * 0.16;
        ctx.strokeStyle = activeTheme === 'light' 
          ? `rgba(37, 99, 235, ${alpha})` 
          : `rgba(99, 102, 241, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}

// 2. Interactive Typing Subtitle Animation
const typedTextEl = document.getElementById('typedText');
const profiles = ["Python & Java Developer", "IT Graduate from LBRCE", "IoT Telemetry Scriptwriter", "Web Designer"];
let profileIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const currentWord = profiles[profileIndex];
  
  if (isDeleting) {
    typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typingSpeed = 100;
  if (isDeleting) {
    typingSpeed /= 2; // Delete faster
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000; // Pause at the end of the word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    profileIndex = (profileIndex + 1) % profiles.length;
    typingSpeed = 500; // Pause before typing the next word
  }
  
  setTimeout(typeAnimation, typingSpeed);
}

// Start typing animation on page load
setTimeout(typeAnimation, 1000);

// 3. Interactive Category Skills Filter
const filterButtons = document.querySelectorAll('.skills-filter-btn');
const skillCategories = document.querySelectorAll('.skill-category');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from all filter buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    // Add active state to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    skillCategories.forEach(cat => {
      const catVal = cat.getAttribute('data-cat');
      const divider = cat.nextElementSibling; // Grab the horizontal rule separating categories
      
      if (filterValue === 'all' || filterValue === catVal) {
        cat.style.display = 'grid';
        if (divider && divider.tagName === 'HR') {
          divider.style.display = 'block';
        }
        
        // Show tags inside
        cat.querySelectorAll('.skill-tag').forEach(tag => {
          tag.classList.remove('hidden');
        });
      } else {
        cat.style.display = 'none';
        if (divider && divider.tagName === 'HR') {
          divider.style.display = 'none';
        }
      }
    });
  });
});

// 4. Parallax 3D Card Tilt Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse x position relative to card boundaries
    const y = e.clientY - rect.top;  // Mouse y position relative to card boundaries
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate maximum 10 degrees based on offset from center
    const rotX = ((centerY - y) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    card.style.transition = 'transform 0.1s ease';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  });
});

// 5. Interactive CLI Console Interpreter (With Resume Mock Benchmarks)
const commandHistory = [];
let historyIndex = -1;

cliInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const inputVal = this.value.trim();
    if (inputVal) {
      handleCliCommand(inputVal);
      commandHistory.push(inputVal);
      historyIndex = commandHistory.length;
    }
    this.value = '';
  } else if (e.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex--;
      this.value = commandHistory[historyIndex];
    }
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      this.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      this.value = '';
    }
    e.preventDefault();
  }
});

function appendCliOutput(text, isHTML = false) {
  const line = document.createElement('div');
  line.className = 'cli-output';
  if (isHTML) {
    line.innerHTML = text;
  } else {
    line.textContent = text;
  }
  
  const inputLine = cliBody.querySelector('.cli-input-line');
  cliBody.insertBefore(line, inputLine);
  cliBody.scrollTop = cliBody.scrollHeight;
}

function runSimulatedProcess(lines, index = 0) {
  if (index >= lines.length) {
    cliInput.disabled = false;
    cliInput.focus();
    return;
  }
  cliInput.disabled = true; // Block input during active processes
  appendCliOutput(lines[index], true);
  cliBody.scrollTop = cliBody.scrollHeight;
  setTimeout(() => {
    runSimulatedProcess(lines, index + 1);
  }, Math.random() * 400 + 150); // Dynamic reading offset delays
}

function handleCliCommand(cmd) {
  const normalized = cmd.toLowerCase().split(' ');
  const baseCmd = normalized[0];
  
  appendCliOutput(`rohith@portfolio:~$ ${cmd}`);
  
  switch(baseCmd) {
    case 'help':
      appendCliOutput(`Supported Commands:
  help               - Display command documentation
  skills             - View specific details on software skills
  projects           - Summary of resume-validated projects
  run news-portal    - Run simulated aggregation diagnostics
  run iot-monitor    - Start mock sensor read telemetry stream
  certs              - View active credentials list
  resume             - Open Menti Rohith's resume PDF in new tab
  clear              - Clear outputs`);
      break;
      
    case 'skills':
      appendCliOutput(`--- Technical Skills (Resume Verified) ---
* Programming languages  : Python, Java, C
* Web Development        : HTML, CSS, JavaScript (ES6)
* Tools & Frameworks     : Git, GitHub, VS Code, Flutter (Hackathon)
* Core CS Foundations    : Data Structures, DBMS, Operating Systems`);
      break;
      
    case 'projects':
      appendCliOutput(`--- Project Index ---
1. <span class="highlight">news-portal</span>  - Python aggregator polling news feeds concurrently.
2. <span class="highlight">ecommerce</span>    - Responsive web client with cart states and local cache.
3. <span class="highlight">iot-monitor</span>  - Telemetry validation scripting (Shikara Pvt. Ltd Internship).
* Use 'open [project]' (e.g. 'open news_portal') to load detail modal.
* Use 'run [project]' (e.g. 'run news-portal') to run diagnostic scripts.`, true);
      break;
      
    case 'open':
      const pKey = normalized[1];
      if (pKey && projectsData[pKey]) {
        openProjectModal(pKey);
        appendCliOutput(`Success: Opened detail architecture modal for project [${pKey}].`);
      } else {
        appendCliOutput(`Project not recognized. Choose from: news_portal, ecommerce, shikara_iot.`, false);
      }
      break;
      
    case 'run':
      const scriptKey = normalized[1];
      if (scriptKey === 'news-portal') {
        const diagnostics = [
          "<span class='highlight'>[Aggregation Daemon] Starting process feeds...</span>",
          "Connecting to global feed endpoints... SUCCESS",
          "Initializing async asyncio loop... 4 concurrent workers active",
          "Fetching updates: BBC, TechCrunch, CNN APIs...",
          "Parsing JSON payload data... 142 valid alerts found",
          "Deduplicating entries... 12 duplicates dropped",
          "Syncing cache buffers... OK",
          "<span class='highlight'>SUCCESS: News Feed parsed. DB holds 130 aggregated items. Process complete.</span>"
        ];
        runSimulatedProcess(diagnostics);
      } else if (scriptKey === 'iot-monitor') {
        const telemetry = [
          "<span class='highlight'>[IoT Logger] Starting MQTT telemetry diagnostics...</span>",
          "Establishing serial port mapping: /dev/ttyUSB0... CONNECTED",
          "Reading sensors: Temperature, Humidity inputs...",
          "Sensor check: Telemetry Temp: 28.5C | Telemetry Humidity: 62%... OK",
          "Buffer check: 0 unsynced elements in local flash queue",
          "Formatting packets to JSON payload... DONE",
          "Publishing message to AWS Cloud IoT Gateway (QoS 1)... SUCCESS",
          "<span class='highlight'>SUCCESS: Telemetry logs posted. Monitor loop idle.</span>"
        ];
        runSimulatedProcess(telemetry);
      } else {
        appendCliOutput(`Execution target not found. Choose 'news-portal' or 'iot-monitor'.`, false);
      }
      break;
      
    case 'certs':
      appendCliOutput(`--- active Credentials ---
- AWS Certified Cloud Practitioner
- Oracle Global Certification on Gen AI
- NPTEL Certification on Industrial IoT (Elite)
- Udemy Cloud Computing Essentials`);
      break;
      
    case 'resume':
      window.open('pdf/resume_final.pdf', '_blank');
      appendCliOutput("Success: Opened PDF resume file in a new browser tab.", false);
      break;
      
    case 'clear':
      const outputs = cliBody.querySelectorAll('.cli-output');
      outputs.forEach(el => el.remove());
      break;
      
    case 'sudo':
      appendCliOutput(`<span class="error">Access Denied: Sudo command is locked. Menti Rohith is registered as primary administrator. Incident logged.</span>`, true);
      break;
      
    default:
      appendCliOutput(`Command not recognized: '${cmd}'. Type 'help' for support.`, false);
  }
}

// 6. Project Details Modals & Tabbed Navigation Switches
const modalOverlay = document.getElementById('projectModalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalOverview = document.getElementById('modalOverview');
const modalChallenges = document.getElementById('modalChallenges');
const modalMetrics = document.getElementById('modalMetrics');
const modalGithub = document.getElementById('modalGithubLink');
const modalLive = document.getElementById('modalLiveLink');
const modalVisualPanel = document.getElementById('modalVisualPanel');

function openProjectModal(key) {
  const data = projectsData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalOverview.textContent = data.overview;
  
  modalMeta.innerHTML = '';
  data.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'project-tag';
    span.textContent = tag;
    modalMeta.appendChild(span);
  });

  modalChallenges.innerHTML = '';
  data.challenges.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    modalChallenges.appendChild(li);
  });

  modalMetrics.innerHTML = '';
  data.metrics.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    modalMetrics.appendChild(li);
  });

  modalGithub.href = data.github;
  modalLive.href = data.live;

  modalVisualPanel.innerHTML = data.svg + '<div class="architecture-tag">System Flow Architecture</div>';

  // Reset tab selection to default (Overview)
  resetModalTabs();

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function resetModalTabs() {
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  const tabContents = document.querySelectorAll('.modal-tab-content');
  
  tabBtns.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(c => c.classList.remove('active'));
  
  document.getElementById('btn-overview').classList.add('active');
  document.getElementById('tab-overview').classList.add('active');
}

function switchModalTab(event, tabId) {
  event.stopPropagation();
  
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  const tabContents = document.querySelectorAll('.modal-tab-content');
  
  tabBtns.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(c => c.classList.remove('active'));
  
  event.currentTarget.classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// 7. Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const nameVal = document.getElementById('contactName').value.trim();
  const emailVal = document.getElementById('contactEmail').value.trim();
  const messageVal = document.getElementById('contactMessage').value.trim();
  
  if (!nameVal || !emailVal || !messageVal) {
    showFormStatus("Error: All fields are required to establish connection.", "error");
    return;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailVal)) {
    showFormStatus("Error: Please provide a valid email structure.", "error");
    return;
  }

  showFormStatus("Processing parameters...", "success");
  
  setTimeout(() => {
    showFormStatus(`Connection parameters recorded! Thank you, ${nameVal}. I'll reach out shortly.`, "success");
    contactForm.reset();
  }, 1500);
});

function showFormStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = 'form-status ' + type;
}

// 8. Scroll reveal animations & progress bar updates
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (totalHeight > 0) {
    const progress = (window.scrollY / totalHeight) * 100;
    scrollBar.style.width = progress + '%';
  }
});

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
});

reveals.forEach(el => revealObserver.observe(el));

// Active nav items update based on scroll positions
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links .nav-item');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        item.classList.remove('active');
        const link = item.querySelector('a');
        if (link.getAttribute('href') === `#${id}`) {
          item.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'var(--bg-card)';
    navLinks.style.backdropFilter = 'var(--glass-blur)';
    navLinks.style.webkitBackdropFilter = 'var(--glass-blur)';
    navLinks.style.padding = '2rem';
    navLinks.style.borderBottom = '1px solid var(--border-glass)';
    navLinks.style.gap = '1.5rem';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'row';
    navLinks.style.position = 'static';
    navLinks.style.padding = '0';
    navLinks.style.borderBottom = 'none';
    navLinks.style.background = 'transparent';
    navLinks.style.backdropFilter = 'none';
  } else {
    navLinks.style.display = 'none';
  }
});

// Initialize
resizeCanvas();
initParticles();
animateParticles();
