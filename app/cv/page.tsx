"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Globe,
  Target,
  Layers,
  Package,
  Database,
  Monitor,
  Bot,
  File,
} from "lucide-react"
import PageTransition from "@/components/page-transition"
import { FreelanceAvailabilityBanner } from "@/components/freelance-components"
import { useRef } from "react"

// CV Data based on your resume
const cvData = {
  personal: {
    name: "Rohit",
    title: "Full Stack Web Developer",
    email: "rohitpippale7989@gmail.com",
    phone: "8532946022",
    location: "Agra, India",
    fatherName: "Mr. Haribaboo",
    nationality: "Indian",
    gender: "Male",
    languages: ["English", "Hindi"],
    hobbies: ["Listening to Music"],
    areaOfInterest: "Web Development",
  },
  about:
    "🚀 **4+ Years Experienced** Full Stack Web Developer specializing in advanced Laravel development and modern web technologies. Expert in developing complex web applications with sophisticated authentication systems, RESTful APIs, and cutting-edge AI integrations. Proven track record of solving complex logical challenges and delivering high-quality, scalable solutions that drive business growth. Passionate about creating efficient, user-friendly applications with exceptional performance and user experience.",
  experience: [
    {
      title: "Full Stack Web Developer",
      company: "Digiinteracts",
      location: "Vijay Nagar Phase 2, Rohini Sector 4, New Delhi",
      period: "April 31, 2022 - Present",
      description:
        "Working as a senior developer handling complex web applications and implementing advanced features across various client projects.",
      achievements: [
        "Developed sophisticated authentication systems and complex login workflows",
        "Integrated AI solutions including ChatGPT, Gemini, and Perplexity assistants",
        "Created and maintained RESTful APIs for multiple client applications",
        "Optimized database queries and application performance for high-traffic websites",
        "Mentored junior developers and led technical implementation for key projects",
      ],
    },
    {
      title: "Web Developer",
      company: "MS Digital Marketing Agency",
      period: "November 2021 - February 2022",
      description:
        "Developed and maintained multiple web applications and websites for clients across various industries.",
      achievements: [
        "Built responsive websites using modern web technologies",
        "Collaborated with design team to implement user-friendly interfaces",
        "Optimized website performance and SEO",
      ],
    },
    {
      title: "Web Developer",
      company: "Amsoft",
      period: "August 2020 - January 2021",
      description: "Worked on various web development projects and gained experience in full-stack development.",
      achievements: [
        "Developed custom web applications using PHP and MySQL",
        "Implemented responsive design principles",
        "Maintained and updated existing client websites",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      college: "M.B.D College Shastripuram, Agra",
      year: "2019",
      score: "",
    },
    {
      degree: "12th Grade (Intermediate)",
      institution: "Gyan Singh Inter College, Agra",
      year: "2016",
      score: "58%",
    },
    {
      degree: "10th Grade (High School)",
      institution: "Gyan Singh Inter College, Agra",
      year: "2014",
      score: "72%",
    },
  ],
  skills: {
    programming: ["PHP (Advanced)", "JavaScript (Advanced)", "jQuery", "Laravel (Advanced)"],
    web: ["HTML5", "CSS3", "Bootstrap", "AJAX", "JSON", "REST API"],
    database: ["MySQL", "MongoDB", "SQLite"],
    os: ["Windows", "Linux"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    aiTools: ["ChatGPT Integration", "Gemini API", "Perplexity AI", "AI Assistant Development"],
    jsPlugins: ["DataTables", "Select2", "Chart.js", "SweetAlert2", "jQuery UI"],
  },
  projects: [
    {
      name: "thecompellingimage.com",
      type: "E-learning Platform",
      description: "Educational platform where users can purchase photography courses",
    },
    {
      name: "pluckit.com",
      type: "Service Marketplace",
      description: "Platform connecting service providers with customers",
    },
    {
      name: "masterymade.com",
      type: "AI Education Platform",
      description: "Educational platform with ChatGPT API integration for AI-powered learning",
    },
    {
      name: "defineclasses.com",
      type: "Educational Portal",
      description: "Online learning management system for educational institutions",
    },
    {
      name: "alcasolutions.in",
      type: "Business Website",
      description: "Corporate website for business solutions company",
    },
    {
      name: "birthdeathonline.in",
      type: "Government Portal",
      description: "Digital certificate management system for government services",
    },
    {
      name: "bundelkhandfarmproducts.com",
      type: "E-commerce",
      description:
        "Indian food brand selling A2 Cow Ghee, Lal Gehu, and other farm products directly from farms to consumers",
    },
    {
      name: "srcinternationalschool.co.in",
      type: "School Website",
      description: "Official website for SRC International School",
    },
    {
      name: "hopeindia.biz",
      type: "NGO Website",
      description: "Website for non-profit organization",
    },
    {
      name: "wwec.in",
      type: "School Website",
      description: "Educational institution website for school management",
    },
    {
      name: "flydigitally.in",
      type: "Digital Agency",
      description: "Website for digital marketing agency services",
    },
    {
      name: "msdigitalmarketingagency.com",
      type: "Marketing Agency",
      description: "Digital marketing services company website",
    },
  ],
  strengths: [
    "Advanced Laravel development",
    "Complex problem-solving skills",
    "REST API development",
    "AI integration expertise",
    "Database optimization",
    "Excellent communication skills",
  ],
}

// Enhanced PDF Download with better layout preservation
const handleDownloadPDF = async () => {
  try {
    // Create a simplified but well-structured HTML for PDF
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CV - ${cvData.personal.name}</title>
    <style>
        @page {
            size: A4;
            margin: 0.5in;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
            background: white;
        }
        
        .cv-container {
            width: 100%;
            max-width: none;
        }
        
        .header {
            background: #3b82f6;
            color: white;
            padding: 25px;
            text-align: center;
            margin-bottom: 20px;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 8px;
            font-weight: bold;
        }
        
        .header .title {
            font-size: 16px;
            margin-bottom: 15px;
        }
        
        .header .contact {
            font-size: 11px;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
        }
        
        .section-title {
            font-size: 16px;
            font-weight: bold;
            color: #3b82f6;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px solid #e5e7eb;
        }
        
        .about-text {
            text-align: justify;
            line-height: 1.5;
            margin-bottom: 15px;
        }
        
        .experience-item {
            margin-bottom: 15px;
            padding-left: 15px;
            border-left: 3px solid #3b82f6;
            page-break-inside: avoid;
        }
        
        .experience-item h3 {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 3px;
        }
        
        .experience-item .company {
            color: #3b82f6;
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 3px;
        }
        
        .experience-item .period {
            font-size: 10px;
            color: #666;
            margin-bottom: 8px;
        }
        
        .experience-item .description {
            font-size: 11px;
            margin-bottom: 8px;
        }
        
        .experience-item ul {
            font-size: 10px;
            margin-left: 15px;
        }
        
        .experience-item li {
            margin-bottom: 3px;
        }
        
        .two-column {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        
        .column {
            display: table-cell;
            width: 48%;
            vertical-align: top;
            padding-right: 2%;
        }
        
        .education-item {
            background: #f9f9f9;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
        }
        
        .education-item h3 {
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 3px;
        }
        
        .education-item .institution {
            color: #3b82f6;
            font-size: 11px;
            font-weight: bold;
        }
        
        .education-item .details {
            font-size: 10px;
            color: #666;
            margin-top: 5px;
        }
        
        .skills-section {
            display: table;
            width: 100%;
        }
        
        .skills-column {
            display: table-cell;
            width: 50%;
            vertical-align: top;
            padding-right: 10px;
        }
        
        .skill-category {
            margin-bottom: 15px;
        }
        
        .skill-category h4 {
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .skill-tags {
            line-height: 1.6;
        }
        
        .skill-tag {
            display: inline-block;
            background: #f0f0f0;
            border: 1px solid #ccc;
            padding: 2px 6px;
            margin: 1px;
            font-size: 9px;
            border-radius: 3px;
        }
        
        .projects-grid {
            display: table;
            width: 100%;
        }
        
        .projects-row {
            display: table-row;
        }
        
        .project-cell {
            display: table-cell;
            width: 33.33%;
            padding: 5px;
            vertical-align: top;
        }
        
        .project-item {
            background: #f9f9f9;
            padding: 8px;
            text-align: center;
            border: 1px solid #ddd;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .project-item h4 {
            font-size: 9px;
            color: #3b82f6;
            font-weight: bold;
            margin-bottom: 2px;
            line-height: 1.2;
        }
        
        .project-item .type {
            font-size: 8px;
            color: #666;
        }
        
        .strengths-grid {
            display: table;
            width: 100%;
        }
        
        .strengths-row {
            display: table-row;
        }
        
        .strength-cell {
            display: table-cell;
            width: 33.33%;
            padding: 3px;
        }
        
        .strength-item {
            background: #e6f3ff;
            padding: 6px;
            text-align: center;
            border: 1px solid #b3d9ff;
            font-size: 9px;
            font-weight: bold;
        }
        
        .personal-details {
            display: table;
            width: 100%;
        }
        
        .personal-column {
            display: table-cell;
            width: 50%;
            vertical-align: top;
            padding: 10px;
            background: #f9f9f9;
            border: 1px solid #ddd;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
            border-bottom: 1px solid #eee;
            font-size: 10px;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: bold;
        }
        
        .detail-value {
            color: #666;
        }
        
        .footer {
            text-align: center;
            font-size: 9px;
            color: #666;
            margin-top: 20px;
            padding: 10px;
            background: #f9f9f9;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="cv-container">
        <div class="header">
            <h1>${cvData.personal.name}</h1>
            <div class="title">${cvData.personal.title}</div>
            <div class="contact">
                <span>📧 ${cvData.personal.email}</span>
                <span>📞 ${cvData.personal.phone}</span>
                <span>📍 ${cvData.personal.location}</span>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">👤 About Myself</div>
            <div class="about-text">${cvData.about.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")}</div>
        </div>
        
        <div class="section">
            <div class="section-title">💼 Professional Experience</div>
            ${cvData.experience
              .map(
                (exp) => `
                <div class="experience-item">
                    <h3>${exp.title}</h3>
                    <div class="company">${exp.company}</div>
                    ${exp.location ? `<div class="location">${exp.location}</div>` : ""}
                    <div class="period">📅 ${exp.period}</div>
                    <div class="description">${exp.description}</div>
                    <ul>
                        ${exp.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
                    </ul>
                </div>
            `,
              )
              .join("")}
        </div>
        
        <div class="section">
            <div class="section-title">🎓 Education</div>
            <div class="two-column">
                ${cvData.education
                  .map(
                    (edu, index) => `
                    <div class="column">
                        <div class="education-item">
                            <h3>${edu.degree}</h3>
                            <div class="institution">${edu.institution}</div>
                            ${edu.college ? `<div class="college">${edu.college}</div>` : ""}
                            <div class="details">Year: ${edu.year} ${edu.score ? `| Score: ${edu.score}` : ""}</div>
                        </div>
                    </div>
                    ${index % 2 === 1 ? '</div><div class="two-column">' : ""}
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">💻 Technical Skills</div>
            <div class="skills-section">
                <div class="skills-column">
                    <div class="skill-category">
                        <h4>🔧 Programming & Frameworks</h4>
                        <div class="skill-tags">
                            ${cvData.skills.programming.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>🌐 Web Technologies</h4>
                        <div class="skill-tags">
                            ${cvData.skills.web.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>📦 JS Plugins & Libraries</h4>
                        <div class="skill-tags">
                            ${cvData.skills.jsPlugins.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                </div>
                <div class="skills-column">
                    <div class="skill-category">
                        <h4>🤖 AI Integration</h4>
                        <div class="skill-tags">
                            ${cvData.skills.aiTools.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>🗄️ Databases</h4>
                        <div class="skill-tags">
                            ${cvData.skills.database.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>🖥️ OS & Tools</h4>
                        <div class="skill-tags">
                            ${[...cvData.skills.os, ...cvData.skills.tools].map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">🌐 Project Work</div>
            <div class="projects-grid">
                ${Array.from({ length: Math.ceil(cvData.projects.length / 3) }, (_, rowIndex) => {
                  const startIndex = rowIndex * 3
                  const rowProjects = cvData.projects.slice(startIndex, startIndex + 3)
                  return `
                        <div class="projects-row">
                            ${rowProjects
                              .map(
                                (project) => `
                                <div class="project-cell">
                                    <div class="project-item">
                                        <h4>${project.name}</h4>
                                        <div class="type">${project.type}</div>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                            ${rowProjects.length < 3 ? '<div class="project-cell"></div>'.repeat(3 - rowProjects.length) : ""}
                        </div>
                    `
                }).join("")}
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">🏆 Key Strengths</div>
            <div class="strengths-grid">
                ${Array.from({ length: Math.ceil(cvData.strengths.length / 3) }, (_, rowIndex) => {
                  const startIndex = rowIndex * 3
                  const rowStrengths = cvData.strengths.slice(startIndex, startIndex + 3)
                  return `
                        <div class="strengths-row">
                            ${rowStrengths
                              .map(
                                (strength) => `
                                <div class="strength-cell">
                                    <div class="strength-item">🎯 ${strength}</div>
                                </div>
                            `,
                              )
                              .join("")}
                            ${rowStrengths.length < 3 ? '<div class="strength-cell"></div>'.repeat(3 - rowStrengths.length) : ""}
                        </div>
                    `
                }).join("")}
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">👤 Personal Details</div>
            <div class="personal-details">
                <div class="personal-column">
                    <div class="detail-row">
                        <span class="detail-label">Father's Name:</span>
                        <span class="detail-value">${cvData.personal.fatherName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Nationality:</span>
                        <span class="detail-value">${cvData.personal.nationality}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Gender:</span>
                        <span class="detail-value">${cvData.personal.gender}</span>
                    </div>
                </div>
                <div class="personal-column">
                    <div class="detail-row">
                        <span class="detail-label">Languages:</span>
                        <span class="detail-value">${cvData.personal.languages.join(", ")}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Hobbies:</span>
                        <span class="detail-value">${cvData.personal.hobbies.join(", ")}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Area of Interest:</span>
                        <span class="detail-value">${cvData.personal.areaOfInterest}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            This CV was generated on ${new Date().toLocaleDateString()} • Available for immediate hiring
        </div>
    </div>
</body>
</html>`

    // Create blob and download
    const blob = new Blob([pdfContent], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `CV_${cvData.personal.name}_${new Date().toLocaleDateString().replace(/\//g, "-")}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Also trigger print for PDF
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(pdfContent)
      printWindow.document.close()
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 1000)
    }
  } catch (error) {
    console.error("Error generating PDF:", error)
  }
}

// Enhanced DOCX Download with proper Word format
const handleDownloadDOCX = () => {
  const docContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset="utf-8">
    <title>CV - ${cvData.personal.name}</title>
    <!--[if gte mso 9]>
    <xml>
        <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>90</w:Zoom>
            <w:DoNotPromptForConvert/>
            <w:DoNotShowInsertionsAndDeletions/>
        </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
        @page {
            size: 8.5in 11in;
            margin: 1in;
        }
        
        body {
            font-family: Calibri, Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.15;
            margin: 0;
            padding: 0;
        }
        
        .header {
            background: #3b82f6;
            color: white;
            padding: 20pt;
            text-align: center;
            margin-bottom: 15pt;
        }
        
        .header h1 {
            font-size: 24pt;
            margin: 0 0 6pt 0;
            font-weight: bold;
        }
        
        .header .title {
            font-size: 14pt;
            margin: 0 0 12pt 0;
        }
        
        .header .contact {
            font-size: 9pt;
        }
        
        .section {
            margin-bottom: 15pt;
        }
        
        .section-title {
            font-size: 14pt;
            font-weight: bold;
            color: #3b82f6;
            margin: 0 0 8pt 0;
            padding-bottom: 3pt;
            border-bottom: 1.5pt solid #e5e7eb;
        }
        
        .about-text {
            text-align: justify;
            margin-bottom: 10pt;
            font-size: 10pt;
        }
        
        .experience-item {
            margin-bottom: 12pt;
            padding-left: 12pt;
            border-left: 2pt solid #3b82f6;
        }
        
        .experience-item h3 {
            font-size: 12pt;
            font-weight: bold;
            margin: 0 0 2pt 0;
        }
        
        .experience-item .company {
            color: #3b82f6;
            font-weight: bold;
            font-size: 10pt;
            margin: 0 0 2pt 0;
        }
        
        .experience-item .period {
            font-size: 9pt;
            color: #666666;
            margin: 0 0 6pt 0;
        }
        
        .experience-item .description {
            font-size: 9pt;
            margin: 0 0 6pt 0;
        }
        
        .experience-item ul {
            font-size: 9pt;
            margin: 0 0 0 12pt;
            padding: 0;
        }
        
        .experience-item li {
            margin-bottom: 2pt;
        }
        
        .education-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10pt;
        }
        
        .education-table td {
            width: 50%;
            padding: 8pt;
            vertical-align: top;
        }
        
        .education-item {
            background: #f9f9f9;
            padding: 8pt;
            border: 1pt solid #dddddd;
        }
        
        .education-item h3 {
            font-size: 10pt;
            font-weight: bold;
            margin: 0 0 3pt 0;
        }
        
        .education-item .institution {
            color: #3b82f6;
            font-size: 9pt;
            font-weight: bold;
            margin: 0 0 2pt 0;
        }
        
        .education-item .details {
            font-size: 8pt;
            color: #666666;
        }
        
        .skills-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .skills-table td {
            width: 50%;
            padding: 6pt;
            vertical-align: top;
        }
        
        .skill-category {
            margin-bottom: 10pt;
        }
        
        .skill-category h4 {
            font-size: 9pt;
            font-weight: bold;
            margin: 0 0 4pt 0;
        }
        
        .skill-tag {
            display: inline-block;
            background: #f0f0f0;
            border: 0.5pt solid #cccccc;
            padding: 1pt 4pt;
            margin: 1pt;
            font-size: 8pt;
        }
        
        .projects-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .projects-table td {
            width: 33.33%;
            padding: 3pt;
            vertical-align: top;
        }
        
        .project-item {
            background: #f9f9f9;
            padding: 6pt;
            text-align: center;
            border: 1pt solid #dddddd;
            height: 40pt;
        }
        
        .project-item h4 {
            font-size: 8pt;
            color: #3b82f6;
            font-weight: bold;
            margin: 0 0 2pt 0;
        }
        
        .project-item .type {
            font-size: 7pt;
            color: #666666;
        }
        
        .strengths-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .strengths-table td {
            width: 33.33%;
            padding: 3pt;
        }
        
        .strength-item {
            background: #e6f3ff;
            padding: 4pt;
            text-align: center;
            border: 1pt solid #b3d9ff;
            font-size: 8pt;
            font-weight: bold;
        }
        
        .personal-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .personal-table td {
            width: 50%;
            padding: 6pt;
            vertical-align: top;
        }
        
        .personal-column {
            background: #f9f9f9;
            padding: 8pt;
            border: 1pt solid #dddddd;
        }
        
        .detail-row {
            margin-bottom: 4pt;
            padding-bottom: 2pt;
            border-bottom: 0.5pt solid #eeeeee;
            font-size: 9pt;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: bold;
            display: inline-block;
            width: 40%;
        }
        
        .detail-value {
            color: #666666;
        }
        
        .footer {
            text-align: center;
            font-size: 8pt;
            color: #666666;
            margin-top: 15pt;
            padding: 8pt;
            background: #f9f9f9;
            border-top: 1pt solid #dddddd;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${cvData.personal.name}</h1>
        <div class="title">${cvData.personal.title}</div>
        <div class="contact">
            📧 ${cvData.personal.email} | 📞 ${cvData.personal.phone} | 📍 ${cvData.personal.location}
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">👤 About Myself</div>
        <div class="about-text">${cvData.about.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")}</div>
    </div>
    
    <div class="section">
        <div class="section-title">💼 Professional Experience</div>
        ${cvData.experience
          .map(
            (exp) => `
            <div class="experience-item">
                <h3>${exp.title}</h3>
                <div class="company">${exp.company}</div>
                ${exp.location ? `<div class="location">${exp.location}</div>` : ""}
                <div class="period">📅 ${exp.period}</div>
                <div class="description">${exp.description}</div>
                <ul>
                    ${exp.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
                </ul>
            </div>
        `,
          )
          .join("")}
    </div>
    
    <div class="section">
        <div class="section-title">🎓 Education</div>
        <table class="education-table">
            <tr>
                ${cvData.education
                  .map(
                    (edu, index) => `
                    <td class="column">
                        <div class="education-item">
                            <h3>${edu.degree}</h3>
                            <div class="institution">${edu.institution}</div>
                            ${edu.college ? `<div class="college">${edu.college}</div>` : ""}
                            <div class="details">Year: ${edu.year} ${edu.score ? `| Score: ${edu.score}` : ""}</div>
                        </div>
                    </td>
                    ${index % 2 === 1 ? "</tr><tr>" : ""}
                `,
                  )
                  .join("")}
            </tr>
        </table>
    </div>
    
    <div class="section">
        <div class="section-title">💻 Technical Skills</div>
        <table class="skills-table">
            <tr>
                <td class="skills-column">
                    <div class="skill-category">
                        <h4>🔧 Programming & Frameworks</h4>
                        <div class="skill-tags">
                            ${cvData.skills.programming.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>🌐 Web Technologies</h4>
                        <div class="skill-tags">
                            ${cvData.skills.web.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>📦 JS Plugins & Libraries</h4>
                        <div class="skill-tags">
                            ${cvData.skills.jsPlugins.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                </td>
                <td class="skills-column">
                    <div class="skill-category">
                        <h4>🤖 AI Integration</h4>
                        <div class="skill-tags">
                            ${cvData.skills.aiTools.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>🗄️ Databases</h4>
                        <div class="skill-tags">
                            ${cvData.skills.database.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>🖥️ OS & Tools</h4>
                        <div class="skill-tags">
                            ${[...cvData.skills.os, ...cvData.skills.tools].map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    
    <div class="section">
        <div class="section-title">🌐 Project Work</div>
        <table class="projects-table">
            ${Array.from({ length: Math.ceil(cvData.projects.length / 3) }, (_, rowIndex) => {
              const startIndex = rowIndex * 3
              const rowProjects = cvData.projects.slice(startIndex, startIndex + 3)
              return `
                    <tr>
                        ${rowProjects
                          .map(
                            (project) => `
                            <td class="project-cell">
                                <div class="project-item">
                                    <h4>${project.name}</h4>
                                    <div class="type">${project.type}</div>
                                </div>
                            </td>
                        `,
                          )
                          .join("")}
                        ${rowProjects.length < 3 ? '<td class="project-cell"></td>'.repeat(3 - rowProjects.length) : ""}
                    </tr>
                `
            }).join("")}
        </table>
    </div>
    
    <div class="section">
        <div class="section-title">🏆 Key Strengths</div>
        <table class="strengths-table">
            ${Array.from({ length: Math.ceil(cvData.strengths.length / 3) }, (_, rowIndex) => {
              const startIndex = rowIndex * 3
              const rowStrengths = cvData.strengths.slice(startIndex, startIndex + 3)
              return `
                    <tr>
                        ${rowStrengths
                          .map(
                            (strength) => `
                            <td class="strength-cell">
                                <div class="strength-item">🎯 ${strength}</div>
                            </td>
                        `,
                          )
                          .join("")}
                        ${rowStrengths.length < 3 ? '<td class="strength-cell"></td>'.repeat(3 - rowStrengths.length) : ""}
                    </tr>
                `
            }).join("")}
        </table>
    </div>
    
    <div class="section">
        <div class="section-title">👤 Personal Details</div>
        <table class="personal-table">
            <tr>
                <td class="personal-column">
                    <div class="detail-row">
                        <span class="detail-label">Father's Name:</span>
                        <span class="detail-value">${cvData.personal.fatherName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Nationality:</span>
                        <span class="detail-value">${cvData.personal.nationality}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Gender:</span>
                        <span class="detail-value">${cvData.personal.gender}</span>
                    </div>
                </td>
                <td class="personal-column">
                    <div class="detail-row">
                        <span class="detail-label">Languages:</span>
                        <span class="detail-value">${cvData.personal.languages.join(", ")}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Hobbies:</span>
                        <span class="detail-value">${cvData.personal.hobbies.join(", ")}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Area of Interest:</span>
                        <span class="detail-value">${cvData.personal.areaOfInterest}</span>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    
    <div class="footer">
        This CV was generated on ${new Date().toLocaleDateString()} • Available for immediate hiring
    </div>
</body>
</html>`

  // Create blob and download
  const blob = new Blob([docContent], { type: "application/msword" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `CV_${cvData.personal.name}_${new Date().toLocaleDateString().replace(/\//g, "-")}.doc`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

const handleDownloadRTF = () => {
  // RTF content generation logic here
  const rtfContent = `{\\rtf1\\ansi\\deff0
{\\fonttbl{\\f0\\fswiss Helvetica;}}
{\\colortbl ;\\red0\\green0\\blue0;\\red0\\green0\\blue255;\\red255\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red255\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green255\\blue255;}
\\pard\\ql\\f0\\fs24 ${cvData.personal.name}\\par
\\pard\\ql\\f0\\fs20 ${cvData.personal.title}\\par
\\pard\\ql\\f0\\fs16 Email: ${cvData.personal.email}\\par
\\pard\\ql\\f0\\fs16 Phone: ${cvData.personal.phone}\\par
\\pard\\ql\\f0\\fs16 Location: ${cvData.personal.location}\\par
\\par
\\pard\\ql\\b\\f0\\fs24 About Me\\b0\\par
\\pard\\ql\\f0\\fs20 ${cvData.about}\\par
}`

  // Create blob and download
  const blob = new Blob([rtfContent], { type: "text/rtf" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `CV_${cvData.personal.name}_${new Date().toLocaleDateString().replace(/\//g, "-")}.rtf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

const handleDownloadHTML = () => {
  // HTML content generation logic here
  const htmlContent = `<!DOCTYPE html>
    <html>
    <head>
        <title>CV - ${cvData.personal.name}</title>
    </head>
    <body>
        <h1>${cvData.personal.name}</h1>
        <p>${cvData.personal.title}</p>
        <p>Email: ${cvData.personal.email}</p>
        <p>Phone: ${cvData.personal.phone}</p>
        <p>Location: ${cvData.personal.location}</p>
        <h2>About Me</h2>
        <p>${cvData.about}</p>
    </body>
    </html>`

  // Create blob and download
  const blob = new Blob([htmlContent], { type: "text/html" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `CV_${cvData.personal.name}_${new Date().toLocaleDateString().replace(/\//g, "-")}.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null)
  return (
    <PageTransition>
      {/* Freelance Availability Banner */}
      <div className="container max-w-7xl mx-auto px-4 pt-4">
        <FreelanceAvailabilityBanner />
      </div>

      {/* Fixed Download Buttons - Top */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-sm border-b py-3">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                onClick={handleDownloadPDF}
                className="bg-black text-white hover:bg-gray-800 flex items-center gap-2"
                size="sm"
              >
                <Download className="h-4 w-4" />
                PDF
              </Button>
              <Button
                onClick={handleDownloadDOCX}
                className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                size="sm"
              >
                <FileText className="h-4 w-4" />
                DOCX
              </Button>
              <Button
                onClick={handleDownloadRTF}
                className="bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
                size="sm"
              >
                <File className="h-4 w-4" />
                RTF
              </Button>
            </div>
            <div>
              <Badge variant="outline" className="text-xs">
                CV Preview
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* CV Document Container */}
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          {/* CV Document */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card ref={cvRef} className="cv-document bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Header Section */}
                <motion.div
                  className="bg-gradient-to-r from-primary to-purple-600 text-white p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center">
                    <motion.h1
                      className="text-4xl md:text-5xl font-bold mb-2"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {cvData.personal.name}
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-primary-foreground/90 mb-6"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {cvData.personal.title}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap justify-center gap-6 text-sm"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {cvData.personal.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {cvData.personal.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {cvData.personal.location}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Document Content */}
                <div className="p-8 space-y-8">
                  {/* About Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <User className="h-6 w-6" />
                      About Myself
                    </h2>
                    <div
                      className="text-muted-foreground leading-relaxed text-justify"
                      dangerouslySetInnerHTML={{
                        __html: cvData.about.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </motion.section>

                  {/* Experience Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Briefcase className="h-6 w-6" />
                      Professional Experience
                    </h2>
                    <div className="space-y-6">
                      {cvData.experience.map((exp, index) => (
                        <motion.div
                          key={index}
                          className="border-l-4 border-primary/30 pl-6 relative"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </p>
                          <p className="text-muted-foreground mb-3">{exp.description}</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Education Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <GraduationCap className="h-6 w-6" />
                      Education
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cvData.education.map((edu, index) => (
                        <motion.div
                          key={index}
                          className="bg-muted/50 p-4 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                        >
                          <h3 className="font-semibold text-base">{edu.degree}</h3>
                          <p className="text-primary text-sm">{edu.institution}</p>
                          {edu.college && <p className="text-xs text-muted-foreground">{edu.college}</p>}
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-muted-foreground">Year: {edu.year}</span>
                            {edu.score && (
                              <Badge variant="secondary" className="text-xs">
                                Score: {edu.score}
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Skills Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Code className="h-6 w-6" />
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Layers className="h-4 w-4 text-primary" />
                            Programming & Frameworks
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.programming.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Globe className="h-4 w-4 text-primary" />
                            Web Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.web.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Package className="h-4 w-4 text-primary" />
                            JS Plugins & Libraries
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.jsPlugins.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Bot className="h-4 w-4 text-primary" />
                            AI Integration
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.aiTools.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Database className="h-4 w-4 text-primary" />
                            Databases
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.database.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Monitor className="h-4 w-4 text-primary" />
                            OS & Tools
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {[...cvData.skills.os, ...cvData.skills.tools].map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  {/* Projects Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Globe className="h-6 w-6" />
                      Project Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {cvData.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          className="bg-muted/50 p-3 rounded-lg hover:bg-muted/70 transition-colors text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.3 + index * 0.03 }}
                          whileHover={{ y: -2 }}
                          title={project.description}
                        >
                          <h3 className="font-medium text-primary text-sm">{project.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{project.type}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Strengths Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Award className="h-6 w-6" />
                      Key Strengths
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cvData.strengths.map((strength, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                        >
                          <Target className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">{strength}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Personal Details Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <User className="h-6 w-6" />
                      Personal Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Father's Name:</span>
                          <span className="text-muted-foreground">{cvData.personal.fatherName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Nationality:</span>
                          <span className="text-muted-foreground">{cvData.personal.nationality}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Gender:</span>
                          <span className="text-muted-foreground">{cvData.personal.gender}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Languages:</span>
                          <span className="text-muted-foreground">{cvData.personal.languages.join(", ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Hobbies:</span>
                          <span className="text-muted-foreground">{cvData.personal.hobbies.join(", ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Area of Interest:</span>
                          <span className="text-muted-foreground">{cvData.personal.areaOfInterest}</span>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>

                {/* Footer */}
                <motion.div
                  className="bg-muted/30 p-6 text-center text-sm text-muted-foreground border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  This CV was generated on {new Date().toLocaleDateString()} • Available for immediate hiring
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Fixed Download Buttons - Bottom */}
      <div className="fixed bottom-4 right-4 z-30">
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleDownloadPDF}
            className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 shadow-lg"
            size="sm"
          >
            <Download className="h-4 w-4" />
            PDF
          </Button>
          <Button
            onClick={handleDownloadDOCX}
            className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 shadow-lg"
            size="sm"
          >
            <FileText className="h-4 w-4" />
            DOCX
          </Button>
          <Button
            onClick={handleDownloadRTF}
            className="bg-green-600 text-white hover:bg-green-700 flex items-center gap-2 shadow-lg"
            size="sm"
          >
            <File className="h-4 w-4" />
            RTF
          </Button>
        </div>
      </div>
    </PageTransition>
  )
}
