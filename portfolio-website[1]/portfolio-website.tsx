"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Smartphone, Globe, Camera, Layers, Download, ExternalLink } from "lucide-react"

export default function PortfolioWebsite() {
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Data Analysis",
      description:
        "I transform raw data into meaningful insights using statistical methods and advanced analytics to drive informed business decisions.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Data Visualization",
      description:
        "I create compelling visual stories from complex datasets using tools like Tableau, Power BI, and Python libraries to communicate insights effectively.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Machine Learning",
      description:
        "I develop predictive models and algorithms to uncover patterns and forecast trends that help organizations make data-driven decisions.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Statistical Modeling",
      description:
        "I apply statistical techniques and hypothesis testing to validate findings and ensure the reliability of analytical results.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Database Management",
      description:
        "I design and optimize database structures, write complex SQL queries, and ensure data quality and integrity across systems.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Business Intelligence",
      description:
        "I create comprehensive dashboards and reporting solutions that provide real-time insights for strategic business planning.",
    },
  ]

  const resumeItems = [
    {
      category: "EXPERIENCE",
      number: "01",
      title: "Sales Representative and Co-founder",
      institution: "Jwela",
      period: "2021 - Present",
      description:
        "Fostered strong customer relationships through exceptional service. Pioneered innovative sales strategies for increased market penetration. Enhanced brand visibility by participating in trade shows and conferences. Developed comprehensive knowledge of product offerings to facilitate customer decisions.",
    },
    {
      category: "EXPERIENCE",
      number: "02",
      title: "Data Science Tutor",
      institution: "Shyntech",
      period: "2022 - 2024",
      description:
        "Fostered interest in science by creating engaging lesson plans. Improved student performance with personalized tutoring strategies. Explained difficult theories using real-world examples for enhanced comprehension.",
    },
    {
      category: "EXPERIENCE",
      number: "03",
      title: "Data Scientist",
      institution: "Beats by Dre",
      period: "2024",
      description:
        "Collected and preprocessed data using Oxylabs' Scraper API to gather large-scale Amazon reviews. Performed data cleaning and exploration with Python (Pandas and NumPy). Conducted sentiment analysis using NLP techniques with TextBlob. Utilized Gemini AI for automated insights generation. Created impactful visualizations with Matplotlib and Seaborn. Compiled actionable insights to guide product improvements and customer experience strategies.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Alo Esther
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-32 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-sm uppercase tracking-wider font-semibold">Data Scientist & Analyst</p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Hi I am{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Alo Esther
                </span>
              </h1>
              <p className="text-2xl text-gray-300 font-light">Transforming Data into Insights</p>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              I have over 3 years experience as a passionate data analyst and scientist who applies knowledge and skills
              to uncover solutions hidden in data. I specialize in transforming complex datasets into actionable
              insights that drive business decisions.
            </p>
            <div className="flex items-center space-x-6">
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                More About Me
              </Button>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1iZLPZ0GsEq4B0eviLQeZuSiQ8o-rUy4Q/view?usp=drivesdk",
                      "_blank",
                    )
                  }
                  className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Download className="w-5 h-5 text-cyan-400" />
                </button>
                <button className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <ExternalLink className="w-5 h-5 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-30"></div>
                <Image
                  src="/alo-esther.png"
                  alt="Alo Esther - Data Analyst & Scientist"
                  width={320}
                  height={320}
                  className="relative rounded-full object-cover border-4 border-gradient-to-r from-cyan-400 to-blue-400 shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                  3+ YEAR'S EXPERT
                </div>
              </div>
            </div>

            {/* Technical Skills Section */}
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {["Python", "R-Science", "SQL", "Looker Studio", "Tableau", "PowerBI"].map((skill) => (
                    <div key={skill} className="text-center">
                      <span className="text-cyan-400 font-semibold text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Specialized services in data science and analytics to help businesses make informed decisions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <CardContent className="p-8 space-y-6">
                <div className="text-cyan-400 p-3 bg-slate-700/30 rounded-xl w-fit">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            My professional journey in data science, education, and business development
          </p>
        </div>
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-12">
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <Badge variant="outline" className="border-cyan-400 text-cyan-400 px-6 py-3 text-lg font-semibold">
                SALES & LEADERSHIP — 01
              </Badge>
              <Badge variant="outline" className="border-cyan-400 text-cyan-400 px-6 py-3 text-lg font-semibold">
                EDUCATION & MENTORING — 02
              </Badge>
              <Badge variant="outline" className="border-cyan-400 text-cyan-400 px-6 py-3 text-lg font-semibold">
                DATA SCIENCE — 03
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {resumeItems.map((item, index) => (
                <div key={index} className="space-y-4 p-6 bg-slate-700/20 rounded-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="text-cyan-400 font-semibold">{item.period}</span>
                  </div>
                  <p className="text-cyan-400 text-lg font-semibold">{item.institution}</p>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Featured projects showcasing my expertise in data science and analytics
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Electpoll Project */}
          <Card
            className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            onClick={() => window.open("https://www.electpoll.com", "_blank")}
          >
            <CardContent className="p-8 space-y-6">
              <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-3xl font-bold">Electpoll</div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Electpoll</h3>
                <p className="text-gray-300 leading-relaxed">
                  A revolutionary online electoral solution that empowers individuals, organizations, associations, and
                  unions to create elections and polls with ease. Designed to provide secure, reliable, and
                  user-friendly e-voting solutions to transform traditional paper-based voting and revolutionize the
                  entire Nigerian electoral system.
                </p>
                <div className="space-y-3">
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                    Data Scientist
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Looker Studio
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Google Colab
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Python
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MedixDB Project */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-3xl font-bold">MedixDB</div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">MedixDB</h3>
                <p className="text-gray-300 leading-relaxed">
                  A centralized database management system that revolutionizes patient record-keeping and information
                  sharing in the Nigerian healthcare system. Streamlines medical data management for improved healthcare
                  delivery.
                </p>
                <div className="space-y-3">
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                    Data Scientist
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Excel
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Google Colab
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Python
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Beats by Dre Project */}
          <Card
            className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            onClick={() =>
              window.open("https://github.com/aloesther/-Consumer-Insights-Data-Analytics-of-Beats-by-Dre", "_blank")
            }
          >
            <CardContent className="p-8 space-y-6">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-2xl font-bold text-center">Beats by Dre Analytics</div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Consumer Insights Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive data analysis of Beats by Dre products using Amazon reviews data. Applied sentiment
                  analysis, data visualization, and automated insights generation to understand consumer behavior and
                  product performance.
                </p>
                <div className="space-y-3">
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                    Data Scientist
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      NLP
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Gemini AI
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bitcoin PCA Project */}
          <Card
            className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/aloesther/Principal-Component-Analysis-on-Bitcoin---Final-Year-Project",
                "_blank",
              )
            }
          >
            <CardContent className="p-8 space-y-6">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-2xl font-bold text-center">Bitcoin PCA</div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Principal Component Analysis on Bitcoin</h3>
                <p className="text-gray-300 leading-relaxed">
                  This study demonstrated the effective application of Principal Component Analysis (PCA) for
                  dimensionality reduction in cryptocurrency datasets, specifically focusing on Bitcoin (BTC). Final
                  year project showcasing advanced statistical analysis techniques.
                </p>
                <div className="space-y-3">
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                    Data Scientist
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      PCA
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Statistical Analysis
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International Women's Day 2025 Project */}
          <Card
            className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer lg:col-span-2 xl:col-span-1"
            onClick={() => window.open("https://github.com/aloesther/IWD-2025/tree/main", "_blank")}
          >
            <CardContent className="p-8 space-y-6">
              <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-2xl font-bold text-center">IWD 2025</div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">International Women's Day 2025</h3>
                <p className="text-gray-300 leading-relaxed">
                  This dashboard showcases the achievements of women in STEM fields globally, including contributions
                  from Africa and Nigeria. A comprehensive data visualization project highlighting gender diversity and
                  representation in science, technology, engineering, and mathematics.
                </p>
                <div className="space-y-3">
                  <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                    Data Scientist
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Dashboard
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      Data Visualization
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700/50 text-white">
                      STEM Analytics
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next data science project
          </p>
        </div>
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm max-w-3xl mx-auto shadow-2xl">
          <CardContent className="p-12 text-center space-y-8">
            <p className="text-2xl text-gray-300 leading-relaxed">
              Let's create something amazing together! Reach out to me at:
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <a
                  href="mailto:estheralo13@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xl font-semibold"
                >
                  estheralo13@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <a
                  href="https://www.linkedin.com/in/esther-alo-756a2b1ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xl font-semibold"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <a
                  href="https://github.com/aloesther"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xl font-semibold"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <a
                  href="https://medium.com/@estheralo13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xl font-semibold"
                >
                  Medium Blog
                </a>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-8">
              Get In Touch
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
