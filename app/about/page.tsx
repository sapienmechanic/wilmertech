import { CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="About Wilmer Technologies"
        description="Delivering innovative technology solutions since 2010"
        showButtons={false}
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container container-padding mx-auto">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Our Story" centered={true} />
            <div className="space-y-6 text-slate-600">
              <p className="leading-relaxed">
                Founded in 2010, Wilmer Technologies began with a vision to bridge the gap between complex technology
                and practical business solutions. What started as a small team of passionate technologists has grown
                into a trusted technology partner for businesses across various industries.
              </p>
              <p className="leading-relaxed">
                Our journey has been defined by continuous innovation, adaptability, and a commitment to excellence. As
                technology has evolved, so have we—constantly expanding our expertise to include cloud computing, data
                analytics, artificial intelligence, and cybersecurity.
              </p>
              <p className="leading-relaxed">
                Today, Wilmer Technologies is recognized as a leader in delivering technology solutions that drive real
                business value. Our team of experienced consultants brings deep expertise in cloud computing, data
                engineering, machine learning, and software development to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-slate-50">
        <div className="container container-padding mx-auto">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Our Approach" centered={true} />
            <div className="space-y-6 text-slate-600">
              <p className="leading-relaxed">
                At Wilmer Technologies, we follow a collaborative and client-centric approach to every project. We
                believe in building long-term partnerships with our clients, understanding their unique challenges, and
                delivering tailored solutions that drive real business value.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8 staggered-children">
                <Card className="bg-white shadow-soft">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">Discovery & Planning</h3>
                    <p className="text-slate-600">
                      We start by understanding your business goals, technical requirements, and constraints. This helps
                      us develop a clear roadmap for your project.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-soft">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">Solution Design</h3>
                    <p className="text-slate-600">
                      Our experts design a solution architecture that meets your requirements while ensuring
                      scalability, security, and performance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-soft">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">Implementation</h3>
                    <p className="text-slate-600">
                      We follow agile methodologies to deliver your solution in iterative cycles, ensuring transparency
                      and flexibility throughout the development process.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-soft">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">Support & Optimization</h3>
                    <p className="text-slate-600">
                      Our relationship doesn't end with deployment. We provide ongoing support and continuously optimize
                      your solution to ensure it delivers maximum value.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container container-padding mx-auto">
          <SectionHeading title="Our Values" description="The principles that guide everything we do" centered={true} />

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto staggered-children">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Excellence</h3>
                <p className="text-slate-600">
                  We strive for excellence in everything we do, from code quality to client communication. We set high
                  standards and continuously raise the bar for ourselves.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Innovation</h3>
                <p className="text-slate-600">
                  We embrace new technologies and approaches to solve complex problems. We encourage creativity,
                  experimentation, and forward-thinking in all our work.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Integrity</h3>
                <p className="text-slate-600">
                  We operate with honesty, transparency, and ethical business practices. We build trust with our
                  clients, partners, and each other through our actions and commitments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Client Focus</h3>
                <p className="text-slate-600">
                  We put our clients' needs first and measure our success by their success. We're committed to
                  delivering solutions that create real value and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-slate-50">
        <div className="container container-padding mx-auto">
          <SectionHeading title="Why Choose Wilmer Technologies" centered={true} />
          <div className="space-y-6 max-w-3xl mx-auto staggered-children">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Technical Expertise</h3>
                <p className="text-slate-600">
                  Our team consists of certified professionals with deep expertise in cloud platforms, data engineering,
                  machine learning, and software development. We stay at the forefront of technology trends to deliver
                  cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Business Acumen</h3>
                <p className="text-slate-600">
                  We understand that technology is a means to an end. Our solutions are designed to address real
                  business challenges and deliver measurable ROI. We speak both the language of technology and business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Proven Track Record</h3>
                <p className="text-slate-600">
                  We have successfully delivered complex projects for clients across various industries, from startups
                  to Fortune 500 companies. Our portfolio demonstrates our ability to tackle diverse challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Collaborative Approach</h3>
                <p className="text-slate-600">
                  We work closely with our clients, ensuring clear communication, transparency, and alignment throughout
                  the project lifecycle. We believe the best solutions emerge from true partnership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Contact us today to discuss how our technology solutions can help you achieve your business goals."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  )
}

