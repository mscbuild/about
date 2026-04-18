const translations = {
  en: {
    appTitle: "Resume Builder Pro",
    clearAll: "Clear All",
    downloadPDF: "Download PDF",
    template: "Template:",
    templateClassic: "Classic",
    templateModern: "Modern",
    templateMinimal: "Minimal",
    color: "Color:",
    resumeCompletion: "Resume Completion:",
    personalInfo: "Personal Information",
    uploadPhoto: "Upload Photo",
    firstName: "First Name",
    lastName: "Last Name",
    jobTitle: "Job Title",
    email: "Email",
    phone: "Phone",
    location: "Location",
    linkedin: "LinkedIn",
    website: "Website",
    github: "GitHub",
    summary: "Professional Summary",
    summaryPlaceholder: "A brief summary of your professional background, key strengths, and career objectives...",
    workExperience: "Work Experience",
    addExperience: "Add Experience",
    education: "Education",
    addEducation: "Add Education",
    skills: "Skills",
    skillPlaceholder: "Type a skill and press Enter...",
    expert: "Expert",
    advanced: "Advanced",
    intermediate: "Intermediate",
    beginner: "Beginner",
    add: "Add",
    projects: "Projects",
    addProject: "Add Project",
    languages: "Languages",
    addLanguage: "Add Language",
    certifications: "Certifications",
    addCert: "Add Certification",
    experience: "Experience",
    degree: "Degree",
    school: "School",
    startDate: "Start Date",
    endDate: "End Date",
    gpa: "GPA (optional)",
    description: "Description",
    descPlaceholder: "Describe your responsibilities and achievements...",
    eduDescPlaceholder: "Relevant coursework, honors...",
    jobTitlePlaceholder: "Senior Developer",
    companyPlaceholder: "Google Inc.",
    datePlaceholder: "Jan 2020",
    present: "Present",
    projectName: "Project Name",
    url: "URL",
    technologies: "Technologies",
    techPlaceholder: "React, Node.js, MongoDB",
    projDescPlaceholder: "Describe the project...",
    language: "Language",
    proficiency: "Proficiency",
    native: "Native",
    fluent: "Fluent",
    certName: "Certificate Name",
    issuer: "Issuer",
    date: "Date",
    allCleared: "All data cleared",
    generatingPDF: "Generating PDF...",
    pdfDownloaded: "PDF downloaded successfully!",
    pdfError: "Error generating PDF",
    confirmClear: "Are you sure you want to clear all data?",
    professionalSummary: "Professional Summary",
    resumeName: "Your Name",
    resumeJobTitle: "Your Job Title",
    presentLabel: "Present"
  },
  lv: {
    appTitle: "CV Veidotājs Pro",
    clearAll: "Notīrīt visu",
    downloadPDF: "Lejupielādēt PDF",
    template: "Veidne:",
    templateClassic: "Klasisks",
    templateModern: "Moderns",
    templateMinimal: "Minimāls",
    color: "Krāsa:",
    resumeCompletion: "CV Aizpildījums:",
    personalInfo: "Personiskā informācija",
    uploadPhoto: "Augšupielādēt foto",
    firstName: "Vārds",
    lastName: "Uzvārds",
    jobTitle: "Amats",
    email: "E-pasts",
    phone: "Tālrunis",
    location: "Atrašanās vieta",
    linkedin: "LinkedIn",
    website: "Tīmekļvietne",
    github: "GitHub",
    summary: "Profesionālais kopsavilkums",
    summaryPlaceholder: "Īss jūsu profesionālās pieredzes, galveno stipro pušu un karjeras mērķu apraksts...",
    workExperience: "Darba pieredze",
    addExperience: "Pievienot pieredzi",
    education: "Izglītība",
    addEducation: "Pievienot izglītību",
    skills: "Prasmes",
    skillPlaceholder: "Ierakstiet prasmi un nospiediet Enter...",
    expert: "Eksperts",
    advanced: "Augstākais līmenis",
    intermediate: "Vidējais līmenis",
    beginner: "Iesācējs",
    add: "Pievienot",
    projects: "Projekti",
    addProject: "Pievienot projektu",
    languages: "Valodas",
    addLanguage: "Pievienot valodu",
    certifications: "Sertifikāti",
    addCert: "Pievienot sertifikātu",
    experience: "Pieredze",
    degree: "Grāds",
    school: "Skola/Universitāte",
    startDate: "Sākuma datums",
    endDate: "Beigu datums",
    gpa: "Vidējais atzīmju punkts (neobligāti)",
    description: "Apraksts",
    descPlaceholder: "Aprakstiet savus pienākumus un sasniegumus...",
    eduDescPlaceholder: "Attiecīgie kursi, godalgotās vietas...",
    jobTitlePlaceholder: "Vadošais izstrādātājs",
    companyPlaceholder: "Google Inc.",
    datePlaceholder: "2020. g. jan",
    present: "Pašlaik",
    projectName: "Projekta nosaukums",
    url: "URL",
    technologies: "Tehnoloģijas",
    techPlaceholder: "React, Node.js, MongoDB",
    projDescPlaceholder: "Aprakstiet projektu...",
    language: "Valoda",
    proficiency: "Līmenis",
    native: "Dzimtā",
    fluent: "Brīva",
    certName: "Sertifikāta nosaukums",
    issuer: "Izdevējs",
    date: "Datums",
    allCleared: "Visi dati notīrīti",
    generatingPDF: "Ģenerē PDF...",
    pdfDownloaded: "PDF veiksmīgi lejupielādēts!",
    pdfError: "Kļūda, ģenerējot PDF",
    confirmClear: "Vai tiešām vēlaties notīrīt visus datus?",
    professionalSummary: "Profesionālais kopsavilkums",
    resumeName: "Jūsu vārds",
    resumeJobTitle: "Jūsu amats",
    presentLabel: "Pašlaik"
  }
};

let currentLang = 'en';
let currentTemplate = 'classic';
let primaryColor = '#2c3e6b';
let primaryLight = '#3d5a99';
let accentColor = '#4a90d9';

let resumeData = {
  photo: '',
  firstName: '',
  lastName: '',
  jobTitle: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  website: '',
  github: '',
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  languages: [],
  certifications: []
};

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function changeLanguage(lang) {
  currentLang = lang;
  updateAllTranslations();
  renderExperienceForms();
  renderEducationForms();
  renderProjectForms();
  renderLanguageForms();
  renderCertForms();
  renderSkillTags();
  updatePreview();
}

function updateAllTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

function handlePhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      resumeData.photo = e.target.result;
      updatePreview();
    };
    reader.readAsDataURL(file);
  }
}

function addExperience() {
  resumeData.experience.push({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    isCurrent: false
  });
  renderExperienceForms();
  updatePreview();
}

function removeExperience(index) {
  resumeData.experience.splice(index, 1);
  renderExperienceForms();
  updatePreview();
}

function renderExperienceForms() {
  const container = document.getElementById('experienceList');
  container.innerHTML = resumeData.experience.map((exp, idx) => `
    <div class="entry-item">
      <div class="entry-header">
        <span class="entry-number">${t('experience')} #${idx + 1}</span>
        <button class="remove-btn" onclick="removeExperience(${idx})">×</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('jobTitle')}</label>
          <input type="text" value="${exp.title}" data-i18n-placeholder="jobTitlePlaceholder" oninput="resumeData.experience[${idx}].title=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${currentLang==='lv'?'Uzņēmums':'Company'}</label>
          <input type="text" value="${exp.company}" data-i18n-placeholder="companyPlaceholder" oninput="resumeData.experience[${idx}].company=this.value;updatePreview()">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('startDate')}</label>
          <input type="text" value="${exp.startDate}" data-i18n-placeholder="datePlaceholder" oninput="resumeData.experience[${idx}].startDate=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('endDate')}</label>
          <input type="text" value="${exp.endDate}" data-i18n-placeholder="present" oninput="resumeData.experience[${idx}].endDate=this.value;resumeData.experience[${idx}].isCurrent=(this.value==='${t('present')}')||(this.value==='');updatePreview()">
        </div>
      </div>
      <div class="form-group">
        <label>${t('description')}</label>
        <textarea rows="3" data-i18n-placeholder="descPlaceholder" oninput="resumeData.experience[${idx}].description=this.value;updatePreview()">${exp.description}</textarea>
      </div>
    </div>
  `).join('');
}

function addEducation() {
  resumeData.education.push({
    degree: '',
    school: '',
    startDate: '',
    endDate: '',
    gpa: '',
    description: ''
  });
  renderEducationForms();
  updatePreview();
}

function removeEducation(index) {
  resumeData.education.splice(index, 1);
  renderEducationForms();
  updatePreview();
}

function renderEducationForms() {
  const container = document.getElementById('educationList');
  container.innerHTML = resumeData.education.map((edu, idx) => `
    <div class="entry-item">
      <div class="entry-header">
        <span class="entry-number">${t('education')} #${idx + 1}</span>
        <button class="remove-btn" onclick="removeEducation(${idx})">×</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('degree')}</label>
          <input type="text" value="${edu.degree}" placeholder="${currentLang==='lv'?'Bakalaurs, Datorzinātne':'B.S. Computer Science'}" oninput="resumeData.education[${idx}].degree=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('school')}</label>
          <input type="text" value="${edu.school}" placeholder="${currentLang==='lv'?'Latvijas Universitāte':'MIT'}" oninput="resumeData.education[${idx}].school=this.value;updatePreview()">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('startDate')}</label>
          <input type="text" value="${edu.startDate}" placeholder="${currentLang==='lv'?'2016. g. sep':'Sep 2016'}" oninput="resumeData.education[${idx}].startDate=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('endDate')}</label>
          <input type="text" value="${edu.endDate}" placeholder="${currentLang==='lv'?'2020. g. maijs':'May 2020'}" oninput="resumeData.education[${idx}].endDate=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('gpa')}</label>
          <input type="text" value="${edu.gpa}" placeholder="3.9/4.0" oninput="resumeData.education[${idx}].gpa=this.value;updatePreview()">
        </div>
      </div>
      <div class="form-group">
        <label>${t('description')}</label>
        <textarea rows="2" data-i18n-placeholder="eduDescPlaceholder" oninput="resumeData.education[${idx}].description=this.value;updatePreview()">${edu.description}</textarea>
      </div>
    </div>
  `).join('');
}

function addSkill() {
  const input = document.getElementById('skillInput');
  const level = document.getElementById('skillLevel');
  const skill = input.value.trim();
  if (skill && !resumeData.skills.find(s => s.name === skill)) {
    resumeData.skills.push({ name: skill, level: parseInt(level.value) });
    input.value = '';
    renderSkillTags();
    updatePreview();
  }
}

function removeSkill(index) {
  resumeData.skills.splice(index, 1);
  renderSkillTags();
  updatePreview();
}

function handleSkillKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addSkill();
  }
}

function renderSkillTags() {
  const container = document.getElementById('skillTags');
  container.innerHTML = resumeData.skills.map((skill, idx) => `
    <span class="skill-tag">
      ${skill.name}
      <span class="remove-tag" onclick="removeSkill(${idx})">×</span>
    </span>
  `).join('');
}

function addProject() {
  resumeData.projects.push({
    name: '',
    description: '',
    url: '',
    technologies: ''
  });
  renderProjectForms();
  updatePreview();
}

function removeProject(index) {
  resumeData.projects.splice(index, 1);
  renderProjectForms();
  updatePreview();
}

function renderProjectForms() {
  const container = document.getElementById('projectsList');
  container.innerHTML = resumeData.projects.map((proj, idx) => `
    <div class="entry-item">
      <div class="entry-header">
        <span class="entry-number">${t('projects')} #${idx + 1}</span>
        <button class="remove-btn" onclick="removeProject(${idx})">×</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('projectName')}</label>
          <input type="text" value="${proj.name}" data-i18n-placeholder="projectName" oninput="resumeData.projects[${idx}].name=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('url')}</label>
          <input type="text" value="${proj.url}" placeholder="github.com/project" oninput="resumeData.projects[${idx}].url=this.value;updatePreview()">
        </div>
      </div>
      <div class="form-group" style="margin-bottom:12px;">
        <label>${t('technologies')}</label>
        <input type="text" value="${proj.technologies}" data-i18n-placeholder="techPlaceholder" oninput="resumeData.projects[${idx}].technologies=this.value;updatePreview()">
      </div>
      <div class="form-group">
        <label>${t('description')}</label>
        <textarea rows="2" data-i18n-placeholder="projDescPlaceholder" oninput="resumeData.projects[${idx}].description=this.value;updatePreview()">${proj.description}</textarea>
      </div>
    </div>
  `).join('');
}

function addLanguage() {
  resumeData.languages.push({ name: currentLang==='lv'?'Angļu':'English', level: 'native' });
  renderLanguageForms();
  updatePreview();
}

function removeLanguage(index) {
  resumeData.languages.splice(index, 1);
  renderLanguageForms();
  updatePreview();
}

function renderLanguageForms() {
  const container = document.getElementById('languagesList');
  const levels = ['native','fluent','advanced','intermediate','basic'];
  container.innerHTML = resumeData.languages.map((lang, idx) => `
    <div class="entry-item">
      <div class="entry-header">
        <span class="entry-number">${t('languages')} #${idx + 1}</span>
        <button class="remove-btn" onclick="removeLanguage(${idx})">×</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('language')}</label>
          <input type="text" value="${lang.name}" placeholder="${currentLang==='lv'?'Angļu':'English'}" oninput="resumeData.languages[${idx}].name=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('proficiency')}</label>
          <select oninput="resumeData.languages[${idx}].level=this.value;updatePreview()">
            ${levels.map(l => `<option value="${l}" ${lang.level===l?'selected':''}>${t(l)}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>
  `).join('');
}

function addCert() {
  resumeData.certifications.push({ name: '', issuer: '', date: '' });
  renderCertForms();
  updatePreview();
}

function removeCert(index) {
  resumeData.certifications.splice(index, 1);
  renderCertForms();
  updatePreview();
}

function renderCertForms() {
  const container = document.getElementById('certsList');
  container.innerHTML = resumeData.certifications.map((cert, idx) => `
    <div class="entry-item">
      <div class="entry-header">
        <span class="entry-number">${t('certifications')} #${idx + 1}</span>
        <button class="remove-btn" onclick="removeCert(${idx})">×</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>${t('certName')}</label>
          <input type="text" value="${cert.name}" data-i18n-placeholder="certName" oninput="resumeData.certifications[${idx}].name=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('issuer')}</label>
          <input type="text" value="${cert.issuer}" data-i18n-placeholder="issuer" oninput="resumeData.certifications[${idx}].issuer=this.value;updatePreview()">
        </div>
        <div class="form-group">
          <label>${t('date')}</label>
          <input type="text" value="${cert.date}" placeholder="2024" oninput="resumeData.certifications[${idx}].date=this.value;updatePreview()">
        </div>
      </div>
    </div>
  `).join('');
}

function setTemplate(template) {
  currentTemplate = template;
  document.querySelectorAll('.template-option').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  const resume = document.getElementById('resumeContent');
  resume.className = 'resume-page';
  if (template !== 'classic') resume.classList.add('template-' + template);
  updatePreview();
}

function setColor(p, pl, a, el) {
  primaryColor = p;
  primaryLight = pl;
  accentColor = a;
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.documentElement.style.setProperty('--primary', p);
  document.documentElement.style.setProperty('--primary-light', pl);
  document.documentElement.style.setProperty('--accent', a);
  updatePreview();
}

function updatePreview() {
  resumeData.firstName = document.getElementById('firstName').value;
  resumeData.lastName = document.getElementById('lastName').value;
  resumeData.jobTitle = document.getElementById('jobTitle').value;
  resumeData.email = document.getElementById('email').value;
  resumeData.phone = document.getElementById('phone').value;
  resumeData.location = document.getElementById('location').value;
  resumeData.linkedin = document.getElementById('linkedin').value;
  resumeData.website = document.getElementById('website').value;
  resumeData.github = document.getElementById('github').value;
  resumeData.summary = document.getElementById('summary').value;

  const fullName = (resumeData.firstName + ' ' + resumeData.lastName).trim() || t('resumeName');
  document.getElementById('resumeName').textContent = fullName;
  document.getElementById('resumeJobTitle').textContent = resumeData.jobTitle || t('resumeJobTitle');

  const photoEl = document.getElementById('resumePhoto');
  if (resumeData.photo) {
    photoEl.innerHTML = `<img src="${resumeData.photo}" alt="Photo">`;
  } else {
    photoEl.innerHTML = '<span class="no-photo">👤</span>';
  }

  const contactEl = document.getElementById('resumeContact');
  let contactHTML = '';
  if (resumeData.email) contactHTML += `<div class="resume-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>${resumeData.email}</div>`;
  if (resumeData.phone) contactHTML += `<div class="resume-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>${resumeData.phone}</div>`;
  if (resumeData.location) contactHTML += `<div class="resume-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>${resumeData.location}</div>`;
  if (resumeData.linkedin) contactHTML += `<div class="resume-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>${resumeData.linkedin}</div>`;
  if (resumeData.website) contactHTML += `<div class="resume-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>${resumeData.website}</div>`;
  if (resumeData.github) contactHTML += `<div class="resume-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>${resumeData.github}</div>`;
  contactEl.innerHTML = contactHTML;

  let mainHTML = '';
  
  if (resumeData.summary) {
    mainHTML += `
      <div class="resume-section">
        <div class="resume-section-title">${t('professionalSummary')}</div>
        <p class="resume-summary-text">${resumeData.summary}</p>
      </div>`;
  }

  if (resumeData.experience.length > 0) {
    mainHTML += `<div class="resume-section"><div class="resume-section-title">${t('workExperience')}</div>`;
    resumeData.experience.forEach(exp => {
      if (exp.title || exp.company) {
        const endDateStr = exp.endDate || t('presentLabel');
        const periodStr = exp.startDate ? (exp.startDate + ' — ' + endDateStr) : endDateStr;
        mainHTML += `
          <div class="resume-entry">
            <div class="resume-entry-header">
              <div class="resume-entry-title">${exp.title || t('jobTitle')}</div>
              <span class="resume-entry-date">${periodStr}</span>
            </div>
            <div class="resume-entry-subtitle">${exp.company || ''}</div>
            ${exp.description ? `<p class="resume-entry-desc">${exp.description.replace(/\n/g, '<br>')}</p>` : ''}
          </div>`;
      }
    });
    mainHTML += `</div>`;
  }

  if (resumeData.projects.length > 0) {
    mainHTML += `<div class="resume-section"><div class="resume-section-title">${t('projects')}</div>`;
    resumeData.projects.forEach(proj => {
      if (proj.name) {
        mainHTML += `
          <div class="resume-entry">
            <div class="resume-entry-header">
              <div class="resume-entry-title">${proj.name}</div>
              ${proj.url ? `<span class="resume-entry-date" style="font-size:10px;">${proj.url}</span>` : ''}
            </div>
            ${proj.technologies ? `<div class="resume-entry-subtitle">${proj.technologies}</div>` : ''}
            ${proj.description ? `<p class="resume-entry-desc">${proj.description.replace(/\n/g, '<br>')}</p>` : ''}
          </div>`;
      }
    });
    mainHTML += `</div>`;
  }

  document.getElementById('resumeMain').innerHTML = mainHTML;

  let sidebarHTML = '';

  if (resumeData.skills.length > 0) {
    sidebarHTML += `<div class="resume-section"><div class="resume-section-title">${t('skills')}</div>`;
    if (currentTemplate === 'minimal') {
      resumeData.skills.forEach(skill => {
        sidebarHTML += `<span class="resume-skill-tag-item">${skill.name}</span>`;
      });
    } else {
      resumeData.skills.forEach(skill => {
        sidebarHTML += `
          <div class="resume-skill-bar">
            <div class="resume-skill-name">${skill.name}</div>
            <div class="resume-skill-track">
              <div class="resume-skill-fill" style="width:${skill.level}%"></div>
            </div>
          </div>`;
      });
    }
    sidebarHTML += `</div>`;
  }

  if (resumeData.education.length > 0) {
    sidebarHTML += `<div class="resume-section"><div class="resume-section-title">${t('education')}</div>`;
    resumeData.education.forEach(edu => {
      if (edu.degree || edu.school) {
        const eduEnd = edu.endDate || '';
        const eduPeriod = edu.startDate ? (edu.startDate + (eduEnd ? ' — ' + eduEnd : '')) : eduEnd;
        sidebarHTML += `
          <div class="resume-entry">
            <div class="resume-entry-title" style="font-size:13px;">${edu.degree || t('degree')}</div>
            <div class="resume-entry-subtitle" style="font-size:11px;">${edu.school || ''}</div>
            ${eduPeriod ? `<div class="resume-entry-date" style="font-size:10px;">${eduPeriod}</div>` : ''}
            ${edu.gpa ? `<div style="font-size:11px;color:var(--text-light);">GPA: ${edu.gpa}</div>` : ''}
          </div>`;
      }
    });
    sidebarHTML += `</div>`;
  }

  if (resumeData.languages.length > 0) {
    sidebarHTML += `<div class="resume-section"><div class="resume-section-title">${t('languages')}</div>`;
    resumeData.languages.forEach(lang => {
      if (lang.name) {
        sidebarHTML += `
          <div class="resume-lang-item">
            <span>${lang.name}</span>
            <span class="resume-lang-level">${t(lang.level) || lang.level}</span>
          </div>`;
      }
    });
    sidebarHTML += `</div>`;
  }

  if (resumeData.certifications.length > 0) {
    sidebarHTML += `<div class="resume-section"><div class="resume-section-title">${t('certifications')}</div>`;
    resumeData.certifications.forEach(cert => {
      if (cert.name) {
        sidebarHTML += `
          <div class="resume-cert-item">
            <div class="resume-cert-name">${cert.name}</div>
            <div class="resume-cert-org">${cert.issuer}${cert.date ? ' · ' + cert.date : ''}</div>
          </div>`;
      }
    });
    sidebarHTML += `</div>`;
  }

  document.getElementById('resumeSidebar').innerHTML = sidebarHTML;
  updateProgress();
}

function updateProgress() {
  let totalFields = 10;
  let filledFields = 0;
  
  if (resumeData.firstName) filledFields++;
  if (resumeData.lastName) filledFields++;
  if (resumeData.jobTitle) filledFields++;
  if (resumeData.email) filledFields++;
  if (resumeData.phone) filledFields++;
  if (resumeData.summary) filledFields++;
  if (resumeData.experience.some(e => e.title)) filledFields++;
  if (resumeData.education.some(e => e.degree)) filledFields++;
  if (resumeData.skills.length > 0) filledFields++;
  if (resumeData.location) filledFields++;

  const percent = Math.round((filledFields / totalFields) * 100);
  document.getElementById('progressPercent').textContent = percent + '%';
  document.getElementById('progressFill').style.width = percent + '%';
}

function exportPDF() {
  const element = document.getElementById('resumeContent');
  const name = (resumeData.firstName + ' ' + resumeData.lastName).trim() || 'CV';
  
  showToast(t('generatingPDF'));
  
  const opt = {
    margin: 0,
    filename: `${name.replace(/\s+/g, '_')}_CV.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    showToast(t('pdfDownloaded'));
  }).catch(err => {
    showToast(t('pdfError'));
    console.error(err);
  });
}

function clearAll() {
  if (confirm(t('confirmClear'))) {
    resumeData = {
      photo: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: '',
      github: '',
      summary: '',
      experience: [],
      education: [],
      skills: [],
      projects: [],
      languages: [],
      certifications: []
    };
    
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('jobTitle').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('location').value = '';
    document.getElementById('linkedin').value = '';
    document.getElementById('website').value = '';
    document.getElementById('github').value = '';
    document.getElementById('summary').value = '';
    document.getElementById('photoInput').value = '';
    
    renderExperienceForms();
    renderEducationForms();
    renderSkillTags();
    renderProjectForms();
    renderLanguageForms();
    renderCertForms();
    updatePreview();
    showToast(t('allCleared'));
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function loadSampleData() {
  if (currentLang === 'lv') {
    document.getElementById('firstName').value = 'Jānis';
    document.getElementById('lastName').value = 'Bērziņš';
    document.getElementById('jobTitle').value = 'Pilna stāka izstrādātājs';
    document.getElementById('email').value = 'janis.berzins@epasts.lv';
    document.getElementById('phone').value = '+371 2123 4567';
    document.getElementById('location').value = 'Rīga, Latvija';
    document.getElementById('linkedin').value = 'linkedin.com/in/janiberzins';
    document.getElementById('github').value = 'github.com/jberzins';
    document.getElementById('summary').value = 'Pieredzējis pilna stāka izstrādātājs ar 5+ gadu pieredzi mērogojamu tīmekļa lietotņu izstrādē. Eksperts React, Node.js un mākoņtehnoloģijās. Stingrs tīra koda un lietotājiem draudzīga dizaina atbalstītājs.';
    
    resumeData.skills = [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'TypeScript', level: 85 },
      { name: 'AWS', level: 65 },
      { name: 'Docker', level: 70 },
      { name: 'PostgreSQL', level: 75 }
    ];
    
    resumeData.experience = [
      {
        title: 'Vadošais programmatūras inženieris',
        company: 'TechCorp SIA',
        startDate: '2022. g. jan',
        endDate: 'Pašlaik',
        description: 'Vadīja mikropakalpojumu arhitektūras izstrādi, kas apkalpo 2M+ lietotājus. Mentorēja 5 jaunākos izstrādātāju komandu. Uzlaboja lietotnes veiktspēju par 40%.'
      },
      {
        title: 'Programmatūras inženieris',
        company: 'StartupXYZ',
        startDate: '2019. g. mar',
        endDate: '2021. g. dec',
        description: 'Izstrādāja un uzturēja React balstītu paneli. Implementēja CI/CD cauruļvadus. Sadarbojās ar dizaina komandu UX uzlabojumos.'
      }
    ];
    
    resumeData.education = [
      {
        degree: 'Bakalaurs, Datorzinātne',
        school: 'Latvijas Universitāte',
        startDate: '2015. g. sep',
        endDate: '2019. g. maijs',
        gpa: '3.8/4.0',
        description: 'Dekanāta saraksts, Datorzinātnes goda biedrība'
      }
    ];
    
    resumeData.languages = [
      { name: 'Latviešu', level: 'native' },
      { name: 'Angļu', level: 'fluent' },
      { name: 'Krievu', level: 'advanced' }
    ];
    
    resumeData.certifications = [
      { name: 'AWS sertificēts izstrādātājs', issuer: 'Amazon Web Services', date: '2023' },
      { name: 'Google Cloud profesionālis', issuer: 'Google', date: '2022' }
    ];
    
    resumeData.projects = [
      {
        name: 'E-komercijas platforma',
        description: 'Pilna stāka e-komercijas risinājums ar maksājumu integrāciju un reāllaika krājumu pārvaldību.',
        url: 'github.com/jberzins/ecommerce',
        technologies: 'React, Node.js, Stripe, MongoDB'
      }
    ];
  } else {
    document.getElementById('firstName').value = 'Alex';
    document.getElementById('lastName').value = 'Johnson';
    document.getElementById('jobTitle').value = 'Full Stack Developer';
    document.getElementById('email').value = 'alex.johnson@email.com';
    document.getElementById('phone').value = '+1 (555) 123-4567';
    document.getElementById('location').value = 'San Francisco, CA';
    document.getElementById('linkedin').value = 'linkedin.com/in/alexjohnson';
    document.getElementById('github').value = 'github.com/alexjohnson';
    document.getElementById('summary').value = 'Passionate full-stack developer with 5+ years of experience building scalable web applications. Expert in React, Node.js, and cloud technologies. Strong advocate for clean code and user-centric design.';
    
    resumeData.skills = [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'TypeScript', level: 85 },
      { name: 'AWS', level: 65 },
      { name: 'Docker', level: 70 },
      { name: 'PostgreSQL', level: 75 }
    ];
    
    resumeData.experience = [
      {
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        startDate: 'Jan 2022',
        endDate: 'Present',
        description: 'Lead development of microservices architecture serving 2M+ users. Mentored team of 5 junior developers. Improved application performance by 40%.'
      },
      {
        title: 'Software Engineer',
        company: 'StartupXYZ',
        startDate: 'Mar 2019',
        endDate: 'Dec 2021',
        description: 'Built and maintained React-based dashboard. Implemented CI/CD pipelines. Collaborated with design team on UX improvements.'
      }
    ];
    
    resumeData.education = [
      {
        degree: 'B.S. Computer Science',
        school: 'University of California, Berkeley',
        startDate: 'Sep 2015',
        endDate: 'May 2019',
        gpa: '3.8/4.0',
        description: "Dean's List, Computer Science Honor Society"
      }
    ];
    
    resumeData.languages = [
      { name: 'English', level: 'native' },
      { name: 'Spanish', level: 'fluent' },
      { name: 'Mandarin', level: 'intermediate' }
    ];
    
    resumeData.certifications = [
      { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2023' },
      { name: 'Google Cloud Professional', issuer: 'Google', date: '2022' }
    ];
    
    resumeData.projects = [
      {
        name: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
        url: 'github.com/alexjohnson/ecommerce',
        technologies: 'React, Node.js, Stripe, MongoDB'
      }
    ];
  }
  
  renderSkillTags();
  renderExperienceForms();
  renderEducationForms();
  renderProjectForms();
  renderLanguageForms();
  renderCertForms();
  
  document.getElementById('firstName').value = resumeData.firstName;
  document.getElementById('lastName').value = resumeData.lastName;
  document.getElementById('jobTitle').value = resumeData.jobTitle;
  document.getElementById('email').value = resumeData.email;
  document.getElementById('phone').value = resumeData.phone;
  document.getElementById('location').value = resumeData.location;
  document.getElementById('linkedin').value = resumeData.linkedin;
  document.getElementById('website').value = resumeData.website;
  document.getElementById('github').value = resumeData.github;
  document.getElementById('summary').value = resumeData.summary;
  
  updatePreview();
}

function init() {
  updateAllTranslations();
  updatePreview();
  loadSampleData();
}

init();
