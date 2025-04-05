import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Zap, Heart } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-slate-300 mb-8">
              Build your career at Wilmer Technologies and help shape the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Why Join Wilmer Technologies?</h2>
            <p className="text-lg text-slate-600">
              At Wilmer Technologies, we're building a team of passionate technologists who are excited about solving
              complex problems and making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Challenging Work</h3>
              <p className="text-slate-600">
                Work on cutting-edge technologies and solve complex problems that make a real impact for our clients. We
                believe in pushing boundaries and exploring new possibilities.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Growth & Development</h3>
              <p className="text-slate-600">
                We invest in our people through continuous learning, mentorship, and career development opportunities.
                Your growth is our priority.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Collaborative Culture</h3>
              <p className="text-slate-600">
                Join a team of talented professionals who value collaboration, innovation, and mutual respect. We
                believe great ideas can come from anywhere.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Work-Life Balance</h3>
              <p className="text-slate-600">
                We understand the importance of balance. Enjoy flexible work arrangements, competitive benefits, and a
                supportive environment that values your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Our Values</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Excellence</h3>
                <p className="text-slate-600">
                  We strive for excellence in everything we do, from the quality of our code to the solutions we deliver
                  to our clients. We set high standards and continuously raise the bar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Innovation</h3>
                <p className="text-slate-600">
                  We embrace new technologies and approaches, constantly seeking better ways to solve problems. We
                  encourage creativity and out-of-the-box thinking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Integrity</h3>
                <p className="text-slate-600">
                  We operate with honesty, transparency, and ethical business practices. We build trust with our
                  clients, partners, and each other through our actions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Collaboration</h3>
                <p className="text-slate-600">
                  We believe in the power of teamwork. We value diverse perspectives and work together to create
                  solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600">Join our team and help shape the future of technology</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Senior Cloud Engineer</h3>
                  <p className="text-slate-600 mb-4">Full-time • Remote</p>
                  <p className="text-slate-600">
                    Design and implement cloud infrastructure solutions for our clients using AWS, Azure, or GCP.
                  </p>
                </div>
                <Link href="/contact" className="mt-4 md:mt-0">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Machine Learning Engineer</h3>
                  <p className="text-slate-600 mb-4">Full-time • Hybrid</p>
                  <p className="text-slate-600">
                    Develop and deploy machine learning models to solve complex business problems.
                  </p>
                </div>
                <Link href="/contact" className="mt-4 md:mt-0">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Data Engineer</h3>
                  <p className="text-slate-600 mb-4">Full-time • Remote</p>
                  <p className="text-slate-600">
                    Build and maintain data pipelines and infrastructure to support analytics and machine learning
                    initiatives.
                  </p>
                </div>
                <Link href="/contact" className="mt-4 md:mt-0">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Full Stack Developer</h3>
                  <p className="text-slate-600 mb-4">Full-time • Onsite</p>
                  <p className="text-slate-600">
                    Develop and maintain web applications using modern frameworks and technologies.
                  </p>
                </div>
                <Link href="/contact" className="mt-4 md:mt-0">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our
              team.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                Send Us Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Explore our open positions and take the next step in your career.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-lg font-medium text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

