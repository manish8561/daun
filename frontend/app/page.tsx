import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">ਖ</span>
              </div>
              <h1 className="text-xl font-bold">Gurudwara Daun Sahib</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="#"
                className="hover:text-orange-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#history"
                className="hover:text-blue-200 transition-colors"
              >
                History
              </Link>
              <Link
                href="#daily-routine"
                className="hover:text-blue-200 transition-colors"
              >
                Daily Routine
              </Link>
              <Link
                href="/donations"
                className="hover:text-blue-200 transition-colors"
              >
                Donations
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-200 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-blue-900/40"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਦੌਨ
                <br />
                <span className="text-2xl md:text-3xl text-blue-900">
                  Gurudwara Sahib Daun
                </span>
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A sacred place of worship embodying the values of community,
                humility, and service. This spiritual heritage site welcomes
                visitors from all backgrounds to experience peace, reflection,
                and the teachings of Sikhism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                  Learn More
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Visit Us
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/gurudwara/609b.jpeg"
                alt="Gurudwara Daun Sahib"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              History & Heritage
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The gurdwara features traditional Sikh architecture with its
                serene environment, fostering a sense of peace and spiritual
                reflection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Playing a pivotal role in the local community by hosting
                religious events and serving langar (community meal) to all
                visitors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Spiritual Significance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A prominent Sikh religious site deeply rooted in the spiritual
                heritage of the area, embodying equality and generosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine Section */}
      <section id="daily-routine" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Daily Routine
              </h2>
              <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-900 text-white p-4">
                <h3 className="text-xl font-bold">Prayer Schedule</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">
                      Morning Prayer (Prakash)
                    </span>
                    <span className="text-gray-600">3:00 AM - 5:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">
                      Asa Di Var
                    </span>
                    <span className="text-gray-600">5:00 AM - 7:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">
                      Rehras Sahib
                    </span>
                    <span className="text-gray-600">6:00 PM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-900">
                      Sukh Asan (Closing)
                    </span>
                    <span className="text-gray-600">9:00 PM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Contact Information
              </h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  Gurudwara Sahib Daun, Punjab, India
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📞</span>
                  +91 XXXXXXXXXX
                </p>
                <p className="flex items-center">
                  <span className="mr-3">✉️</span>
                  info@gurudwaradaunsahib.org
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Visit Hours
              </h3>
              <div className="space-y-2">
                <p>Monday - Sunday: 3:00 AM - 10:00 PM</p>
                <p className="text-blue-400">Open 365 days a year</p>
                <p className="text-sm text-gray-400 mt-4">
                  All visitors are welcome regardless of caste, creed, or
                  religion. Please cover your head and remove shoes before
                  entering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">
              © 2024 Gurudwara Sahib Daun. All rights reserved.
            </p>
            <p className="text-blue-200">
              ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ | ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
