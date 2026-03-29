import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import HistoryCard from "@/components/HistoryCard";
import PrayerSchedule from "@/components/PrayerSchedule";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero />

      {/* History Section */}
      <section id="history" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="History & Heritage" />

          <div className="grid md:grid-cols-3 gap-8">
            <HistoryCard
              icon="🏛️"
              title="Architecture"
              description="The gurdwara features traditional Sikh architecture with its serene environment, fostering a sense of peace and spiritual reflection."
            />

            <HistoryCard
              icon="🤝"
              title="Community Service"
              description="Playing a pivotal role in the local community by hosting religious events and serving langar (community meal) to all visitors."
            />

            <HistoryCard
              icon="📿"
              title="Spiritual Significance"
              description="A prominent Sikh religious site deeply rooted in the spiritual heritage of the area, embodying equality and generosity."
            />
          </div>
        </div>
      </section>

      {/* Daily Routine Section */}
      <section id="daily-routine" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="Daily Routine" />
            <PrayerSchedule />
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

      <Footer />
    </div>
  );
}
