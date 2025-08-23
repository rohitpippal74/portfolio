// CV Generation utilities for PDF and DOCX
export const cvData = {
  personal: {
    name: "Your Name",
    title: "Full Stack Web Developer",
    email: "your.email@example.com",
    phone: "+91 XXXXXXXXXX",
    location: "Agra, India",
    fatherName: "Mr. Haribaboo",
    nationality: "Indian",
    gender: "Male",
    languages: ["English", "Hindi"],
    hobbies: ["Listening to Music"],
    areaOfInterest: "Web Development",
  },
  about:
    "Hailing from a good background, confidence, dedication and the will to take on challenges that lie ahead is nurtured in me. A team person and a good socializer, I know that working together can overcome any obstacle. I believe that I have ingrained a strong attitude towards life and work, an attitude which will enable me to fulfill my aspirations to the best of my capabilities.",
  experience: [
    {
      title: "Web Developer",
      company: "MS Digital Marketing Agency",
      period: "November 2021 - February 2022",
      description: "Developed and maintained multiple web applications and websites for clients.",
    },
    {
      title: "Web Developer",
      company: "Amsoft",
      period: "August 2020 - January 2021",
      description: "Worked on various web development projects and gained experience in full-stack development.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      year: "2019",
      college: "M.B.D College Shastripuram, Agra",
    },
    {
      degree: "12th Grade",
      institution: "Gyan Singh Inter College, Agra",
      year: "2016",
      score: "58%",
    },
    {
      degree: "10th Grade",
      institution: "Gyan Singh Inter College, Agra",
      year: "2014",
      score: "72%",
    },
  ],
  skills: {
    programming: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "jQuery"],
    web: ["HTML", "CSS", "Bootstrap", "Laravel", "WordPress"],
    database: ["MySQL", "Oracle", "SQLite3"],
    os: ["MS DOS", "Windows", "Linux"],
  },
  projects: [
    "defineclasses.com",
    "alcasolutions.in",
    "birthdeathonline.in",
    "bundelkhandfarmproducts.com",
    "srcinternationalschool.co.in",
    "hopeindia.biz",
    "wwec.in",
    "flydigitally.in",
    "msdigitalmarketingagency.com",
    "mandioutlet.com",
  ],
  strengths: ["Excellent communication skill", "Hard-working", "Excellent knowledge of Core subjects"],
}

// Function to generate PDF (would integrate with a PDF library like jsPDF)
export const generatePDF = () => {
  // This would use a library like jsPDF or Puppeteer to generate PDF
  console.log("Generating PDF with data:", cvData)

  // For now, we'll create a simple download trigger
  const element = document.createElement("a")
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2)))
  element.setAttribute("download", "CV_YourName.txt")
  element.style.display = "none"
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

// Function to generate DOCX (would integrate with a DOCX library like docx)
export const generateDOCX = () => {
  // This would use a library like docx to generate DOCX
  console.log("Generating DOCX with data:", cvData)

  // For now, we'll create a simple download trigger
  const element = document.createElement("a")
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2)))
  element.setAttribute("download", "CV_YourName.txt")
  element.style.display = "none"
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
