import { Button } from "@/components/ui/button"
import { Brain, Cpu, BarChart, ArrowRight, Zap, Search } from "lucide-react"
import Link from "next/link"

export default function AIMLPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">AI & Machine Learning</h1>
            <p className="text-xl text-slate-300 mb-8">
              Harness the power of artificial intelligence to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 text-center">
              Unlock New Possibilities with AI & Machine Learning
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Artificial Intelligence and Machine Learning are revolutionizing how businesses operate, enabling
              automation, personalization, and data-driven decision making at scale. At Wilmer Technologies, we help
              organizations leverage these technologies to solve complex problems, create innovative solutions, and gain
              a competitive edge.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Machine Learning Solutions</h3>
                <p className="text-slate-600">
                  Develop custom machine learning models that can analyze data, identify patterns, and make predictions
                  to drive business outcomes.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Deep Learning</h3>
                <p className="text-slate-600">
                  Leverage neural networks and deep learning techniques to solve complex problems in computer vision,
                  natural language processing, and more.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Predictive Analytics</h3>
                <p className="text-slate-600">
                  Use historical data and machine learning to forecast trends, customer behavior, and business outcomes
                  with greater accuracy.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">AI-Powered Automation</h3>
                <p className="text-slate-600">
                  Automate repetitive tasks and processes with intelligent systems that can learn and adapt over time,
                  freeing up human resources for higher-value work.
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Our AI & ML Services</h2>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Machine Learning Solutions</h3>
                <p className="text-slate-600 mb-6">
                  Custom machine learning solutions tailored to your specific business needs.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supervised and unsupervised learning models</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Classification and regression analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Anomaly detection systems</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recommendation engines</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Time series forecasting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Natural Language Processing</h3>
                <p className="text-slate-600 mb-6">
                  Extract insights and automate processes using text and speech data.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sentiment analysis and opinion mining</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Text classification and categorization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Named entity recognition</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Chatbots and conversational AI</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Document summarization and information extraction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Computer Vision</h3>
                <p className="text-slate-600 mb-6">
                  Enable machines to interpret and understand visual information from the world.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Image classification and object detection</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Facial recognition and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Optical character recognition (OCR)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Video analysis and surveillance</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Medical image analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">AI Strategy & Implementation</h3>
                <p className="text-slate-600 mb-6">
                  Develop a comprehensive AI strategy and roadmap for your organization.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use case identification and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI governance and ethics framework</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI model deployment and integration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI solution monitoring and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">AI & ML Use Cases</h2>
            <p className="text-lg text-slate-600">
              Discover how AI and ML can transform various aspects of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Customer Insights & Personalization</h3>
              <p className="text-slate-600">
                Analyze customer data to gain deeper insights, predict behavior, and deliver personalized experiences
                that increase satisfaction and loyalty.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Demand Forecasting & Inventory Optimization</h3>
              <p className="text-slate-600">
                Use machine learning to predict demand patterns, optimize inventory levels, and reduce costs while
                ensuring product availability.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Process Automation & Optimization</h3>
              <p className="text-slate-600">
                Automate routine tasks and optimize complex processes with intelligent systems that can learn and
                improve over time.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Fraud Detection & Risk Management</h3>
              <p className="text-slate-600">
                Identify suspicious patterns and anomalies in real-time to prevent fraud and manage risk more
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">
              See how we've helped organizations leverage AI and ML to achieve their goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <Brain className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Predictive Maintenance System</h3>
                <p className="text-slate-600">
                  Developed a machine learning-based predictive maintenance system for a manufacturing company, reducing
                  equipment downtime by 35% and maintenance costs by 25%.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <Search className="h-16 w-16 text-slate-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Customer Churn Prediction</h3>
                <p className="text-slate-600">
                  Implemented a customer churn prediction model for a subscription-based service, enabling proactive
                  retention strategies that reduced churn by 20%.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today to discuss how our AI & ML solutions can help you achieve your business goals.
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

