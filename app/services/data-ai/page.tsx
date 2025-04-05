import { Button } from "@/components/ui/button"
import { Database, BarChart, LineChart, PieChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DataAIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">Data & AI Solutions</h1>
            <p className="text-xl text-slate-300 mb-8">
              Unlock the power of your data with our comprehensive data and AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 text-center">
              Transform Your Data into Actionable Insights
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              In today's data-driven world, organizations that can effectively collect, process, and analyze data have a
              significant competitive advantage. At Wilmer Technologies, we help you harness the power of your data to
              drive innovation, improve decision-making, and optimize business processes.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Data Engineering</h3>
                <p className="text-slate-600">
                  Build robust data pipelines and infrastructure to collect, store, and process data at scale. Our data
                  engineering services ensure that your data is accessible, reliable, and ready for analysis.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Business Intelligence</h3>
                <p className="text-slate-600">
                  Transform raw data into meaningful insights with our business intelligence solutions. We help you
                  create dashboards, reports, and visualizations that enable data-driven decision-making.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Advanced Analytics</h3>
                <p className="text-slate-600">
                  Leverage statistical analysis, machine learning, and AI to uncover deeper insights from your data. Our
                  advanced analytics solutions help you predict trends, identify patterns, and optimize outcomes.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Data Strategy</h3>
                <p className="text-slate-600">
                  Develop a comprehensive data strategy aligned with your business objectives. We help you define data
                  governance policies, establish data quality standards, and create a roadmap for data-driven
                  transformation.
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">
              Our Data & AI Services
            </h2>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Data Engineering & Architecture</h3>
                <p className="text-slate-600 mb-6">
                  Build a solid foundation for your data initiatives with our data engineering and architecture
                  services.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data pipeline development and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data warehouse and lake implementation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>ETL/ELT process development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data modeling and schema design</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time data processing solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Business Intelligence</h3>
                <p className="text-slate-600 mb-6">
                  Transform your data into actionable insights with our business intelligence services.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dashboard development and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Self-service BI implementation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>KPI definition and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reporting automation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data storytelling and presentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Advanced Analytics</h3>
                <p className="text-slate-600 mb-6">
                  Leverage advanced analytical techniques to gain deeper insights and make better predictions.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customer segmentation and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Anomaly detection and fraud prevention</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recommendation systems</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Time series analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">
              See how we've helped organizations transform their data capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <BarChart className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Healthcare Analytics Platform</h3>
                <p className="text-slate-600">
                  Developed a comprehensive analytics platform for a healthcare provider, enabling them to improve
                  patient outcomes and operational efficiency.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <LineChart className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Retail Demand Forecasting</h3>
                <p className="text-slate-600">
                  Implemented a machine learning-based demand forecasting system for a retail chain, reducing inventory
                  costs by 15% and improving product availability.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock the Power of Your Data?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today to discuss how our Data & AI solutions can help you achieve your business goals.
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

