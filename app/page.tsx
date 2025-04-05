import { Database, Cloud, Brain, Code, Server, Shield } from "lucide-react"
import { ServiceCard } from "@/components/ui/service-card"
import { FeatureCard } from "@/components/ui/feature-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Technology Solutions for Modern Business"
        description="Wilmer Technologies delivers innovative technology solutions that drive business growth and digital transformation."
      />

      {/* What We Offer Section */}
      <section className="section-padding bg-white">
        <div className="container container-padding mx-auto">
          <SectionHeading
            title="What We Offer"
            description="Award-winning products and services at your fingertips"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-children">
            <ServiceCard
              icon={Database}
              title="Data & AI"
              description="Unlock the power of your data with our comprehensive data and AI solutions. From data engineering to advanced analytics."
              href="/services/data-ai"
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
              linkColor="text-blue-600"
              linkHoverColor="hover:text-blue-700"
            />

            <ServiceCard
              icon={Cloud}
              title="Cloud Services"
              description="Accelerate your digital transformation with our cloud services. We help you migrate, optimize, and innovate in the cloud."
              href="/services/cloud-services"
              iconColor="text-teal-600"
              iconBgColor="bg-teal-100"
              linkColor="text-teal-600"
              linkHoverColor="hover:text-teal-700"
            />

            <ServiceCard
              icon={Brain}
              title="AI & ML"
              description="Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create innovative solutions."
              href="/services/ai-ml"
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
              linkColor="text-purple-600"
              linkHoverColor="hover:text-purple-700"
            />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-slate-50">
        <div className="container container-padding mx-auto">
          <SectionHeading
            title="Our Expertise"
            description="Comprehensive technology solutions tailored to your business needs"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto staggered-children">
            <FeatureCard
              icon={Code}
              title="App Development"
              description="Custom application development tailored to your specific business requirements, using the latest technologies and best practices."
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
            />

            <FeatureCard
              icon={Server}
              title="IT Infrastructure"
              description="Design, implementation, and management of secure, scalable IT infrastructure that supports your business objectives."
              iconColor="text-green-600"
              iconBgColor="bg-green-100"
            />

            <FeatureCard
              icon={Shield}
              title="Cybersecurity"
              description="Protect your business from cyber threats with our comprehensive security solutions and best practices."
              iconColor="text-red-600"
              iconBgColor="bg-red-100"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container container-padding mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                About Wilmer Technologies
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Wilmer Technologies is a leading technology consulting firm specializing in cloud solutions, data
                analytics, and artificial intelligence. We help organizations leverage cutting-edge technologies to
                drive innovation, improve efficiency, and achieve their business goals.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2010, Wilmer Technologies has grown from a small team of passionate technologists to a
                trusted partner for businesses across various industries.
              </p>
              <a href="/about" className="inline-block">
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More About Us
                </button>
              </a>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-card">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-4xl font-bold gradient-text opacity-80">Wilmer Technologies</div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-slate-50">
        <div className="container container-padding mx-auto">
          <SectionHeading
            title="Why Choose Us"
            description="We are willing to take bold action to achieve the extraordinary"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto staggered-children">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Technical Expertise</h3>
                <p className="text-slate-600">
                  Our team consists of certified professionals with deep expertise in cloud platforms, data engineering,
                  machine learning, and software development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Business Acumen</h3>
                <p className="text-slate-600">
                  We understand that technology is a means to an end. Our solutions are designed to address real
                  business challenges and deliver measurable ROI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Proven Track Record</h3>
                <p className="text-slate-600">
                  We have successfully delivered complex projects for clients across various industries, from startups
                  to Fortune 500 companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Collaborative Approach</h3>
                <p className="text-slate-600">
                  We work closely with our clients, ensuring clear communication, transparency, and alignment throughout
                  the project lifecycle.
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

