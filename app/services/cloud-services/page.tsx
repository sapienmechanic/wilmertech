import { Button } from "@/components/ui/button"
import { Cloud, Server, Code, ArrowRight, Settings } from "lucide-react"
import Link from "next/link"

export default function CloudServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">Cloud Services</h1>
            <p className="text-xl text-slate-300 mb-8">
              Accelerate your digital transformation with our comprehensive cloud solutions
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 text-center">
              Unlock the Full Potential of Cloud Computing
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Cloud computing has revolutionized how businesses operate, enabling greater agility, scalability, and
              innovation. At Wilmer Technologies, we help organizations at every stage of their cloud journey, from
              initial migration to optimization and modernization.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Cloud Migration</h3>
                <p className="text-slate-600">
                  Seamlessly migrate your applications and infrastructure to the cloud with our proven methodology. We
                  ensure minimal disruption and maximum value.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Cloud Infrastructure</h3>
                <p className="text-slate-600">
                  Design, implement, and manage secure, scalable, and cost-effective cloud infrastructure tailored to
                  your business needs.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Cloud-Native Development</h3>
                <p className="text-slate-600">
                  Build modern, cloud-native applications that leverage the full potential of cloud platforms, enabling
                  faster innovation and better user experiences.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">DevOps & Automation</h3>
                <p className="text-slate-600">
                  Implement DevOps practices and automation to streamline your development and operations processes,
                  improving efficiency and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Our Cloud Services</h2>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Cloud Migration & Modernization</h3>
                <p className="text-slate-600 mb-6">
                  Move your applications and infrastructure to the cloud with confidence.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cloud readiness assessment and planning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lift-and-shift migration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Application modernization and refactoring</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Database migration and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Legacy system modernization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Cloud-Native Development</h3>
                <p className="text-slate-600 mb-6">
                  Build modern applications designed specifically for cloud environments.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Microservices architecture design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Containerization with Docker and Kubernetes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Serverless application development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>API development and management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Event-driven architecture implementation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">DevOps & Infrastructure as Code</h3>
                <p className="text-slate-600 mb-6">
                  Streamline your development and operations with automation and best practices.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>CI/CD pipeline implementation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Infrastructure as Code (Terraform, CloudFormation)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Configuration management (Ansible, Chef, Puppet)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monitoring and observability solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automated testing and deployment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Cloud Security & Compliance</h3>
                <p className="text-slate-600 mb-6">
                  Ensure your cloud environment is secure, compliant, and resilient.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cloud security assessment and planning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identity and access management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Network security and encryption</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compliance with industry regulations (HIPAA, GDPR, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Disaster recovery and business continuity planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Cloud Platforms We Support</h2>
            <p className="text-lg text-slate-600">We have expertise across all major cloud platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">AWS</h3>
              <p className="text-slate-600">Amazon Web Services</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Azure</h3>
              <p className="text-slate-600">Microsoft Azure</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">GCP</h3>
              <p className="text-slate-600">Google Cloud Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">See how we've helped organizations transform with cloud technology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <Server className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Financial Services Migration</h3>
                <p className="text-slate-600">
                  Helped a financial services company migrate their legacy systems to AWS, resulting in 40% cost
                  reduction and improved scalability.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <Code className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">E-Commerce Platform Modernization</h3>
                <p className="text-slate-600">
                  Modernized an e-commerce platform using microservices architecture on Azure, improving performance and
                  enabling faster feature delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Cloud Technology?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today to discuss how our cloud services can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-lg font-medium text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

