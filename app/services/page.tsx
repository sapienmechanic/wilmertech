import { Database, Cloud, Brain, Code, Server, Smartphone } from "lucide-react"
import { ServiceCard } from "@/components/ui/service-card"
import { FeatureCard } from "@/components/ui/feature-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection title="What We Offer" description="Award-Winning Products and Services at Your Fingertips" />

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container container-padding mx-auto">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight text-orange-500 mb-6">
                  We are willing to take bold action to achieve the extraordinary.
                </h2>
              </div>
              <div className="md:w-1/2">
                <blockquote className="text-lg text-slate-600 italic border-l-4 border-blue-500 pl-4">
                  "Our team of experts is passionate about crafting creative strategies that give our clients the edge
                  to stay ahead of the rapidly transforming technology ecosystem."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto staggered-children">
            <ServiceCard
              icon={Database}
              title="Data & AI"
              description="Empowering industries and enriching lives, Data and AI hold immense transformative potential."
              href="/services/data-ai"
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
              linkColor="text-blue-600"
              linkHoverColor="hover:text-blue-700"
            />

            <ServiceCard
              icon={Cloud}
              title="Cloud Services"
              description="Embrace the power of cloud technologies to transform your business operations and drive innovation."
              href="/services/cloud-services"
              iconColor="text-teal-600"
              iconBgColor="bg-teal-100"
              linkColor="text-teal-600"
              linkHoverColor="hover:text-teal-700"
            />

            <ServiceCard
              icon={Brain}
              title="AI & ML"
              description="Fuel your business growth with our AI & ML expertise. We deliver reliable, innovative solutions."
              href="/services/ai-ml"
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
              linkColor="text-purple-600"
              linkHoverColor="hover:text-purple-700"
            />
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container container-padding mx-auto">
          <SectionHeading
            title="Our Services"
            description="Comprehensive technology solutions tailored to your business needs"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto staggered-children">
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
              icon={Smartphone}
              title="Mobile Solutions"
              description="Native and cross-platform mobile application development that delivers exceptional user experiences across devices."
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
            />

            <FeatureCard
              icon={Database}
              title="Data Analytics"
              description="Transform your data into actionable insights with our comprehensive analytics solutions and dashboards."
              iconColor="text-amber-600"
              iconBgColor="bg-amber-100"
            />

            <FeatureCard
              icon={Cloud}
              title="Cloud Migration"
              description="Seamless migration of your applications and infrastructure to the cloud with minimal disruption to your business."
              iconColor="text-red-600"
              iconBgColor="bg-red-100"
            />

            <FeatureCard
              icon={Brain}
              title="IT Staffing"
              description="Connect with skilled technology professionals who can drive your projects forward and help you achieve your goals."
              iconColor="text-indigo-600"
              iconBgColor="bg-indigo-100"
            />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-white">
        <div className="container container-padding mx-auto">
          <SectionHeading title="Our Expertise" centered={true} />

          <div className="space-y-8 max-w-3xl mx-auto staggered-children">
            <Card className="bg-slate-50 border-slate-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">App Development</h3>
                <p className="text-slate-600">
                  We create custom applications tailored to your specific business needs, using the latest technologies
                  and best practices to deliver high-quality, scalable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Healthcare Solutions</h3>
                <p className="text-slate-600">
                  Our specialized healthcare technology solutions help medical providers improve patient care,
                  streamline operations, and ensure compliance with industry regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Cloud Computing</h3>
                <p className="text-slate-600">
                  Leverage the power of cloud technologies to enhance flexibility, scalability, and cost-efficiency in
                  your IT infrastructure, with our expert cloud migration and management services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">IT Staffing</h3>
                <p className="text-slate-600">
                  Find the right talent for your technology needs with our specialized IT staffing services, connecting
                  you with skilled professionals who can drive your projects forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-slate-50">
        <div className="container container-padding mx-auto">
          <SectionHeading
            title="Our Technologies"
            description="We leverage cutting-edge technologies to deliver exceptional solutions"
            centered={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto staggered-children">
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">UI/UX Design</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">Java Scripting</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">Cloud Technologies</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">Mobile App Development</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">Data Engineering</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">Machine Learning</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">DevOps</h3>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 text-center shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-900">Cybersecurity</h3>
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

