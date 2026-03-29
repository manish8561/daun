import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import DonationOption from "@/components/DonationOption";
import QRCodePayment from "@/components/QRCodePayment";
import Footer from "@/components/Footer";

export default function Donations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50 to-white"></div>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ਦਸਵੰਧ / ਦਾਨ
              <br />
              <span className="text-2xl md:text-3xl text-blue-900">
                Daswandh / Donations
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your generous contributions support the sacred mission of
              Gurudwara Sahib Daun. Daswandh (one-tenth) is the sacred practice
              of dedicating a portion of one&apos;s earnings to religious and
              charitable causes, embodying the Sikh principle of sharing and
              serving humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Ways to Donate" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <DonationOption
              icon="💳"
              title="Online Donation"
              description="Make a secure online donation through our payment gateway. Your contribution will be used for gurudwara maintenance, langar seva, and community welfare programs."
            >
              <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                Donate Online
              </button>
            </DonationOption>

            <DonationOption
              icon="🏦"
              title="Bank Transfer"
              description="Direct bank transfer to our official account:"
            >
              <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                <p>
                  <strong>Account Name:</strong> Gurudwara Sahib Daun
                </p>
                <p>
                  <strong>Bank:</strong> [Bank Name]
                </p>
                <p>
                  <strong>Account Number:</strong> [Account Number]
                </p>
                <p>
                  <strong>IFSC Code:</strong> [IFSC Code]
                </p>
              </div>
            </DonationOption>

            <DonationOption
              icon="📱"
              title="QR Code Payment"
              description="Scan the QR code with your mobile banking app or UPI app for instant donation."
            >
              <QRCodePayment />
            </DonationOption>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeader title="Donation Information" />

            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Address
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    rows={3}
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Amount (₹) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Purpose
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900">
                      <option>General Donation</option>
                      <option>Langar Seva</option>
                      <option>Gurudwara Maintenance</option>
                      <option>Community Welfare</option>
                      <option>Education Programs</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    rows={3}
                    placeholder="Any special instructions or messages"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="mr-2 h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    I wish to remain anonymous
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                >
                  Submit Donation Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Foreign Donations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                International Donations (NRI/Foreign)
              </h3>
              <p className="text-gray-700 mb-6">
                For devotees wishing to send donations from foreign countries,
                we accept international transfers through our FCRA (Foreign
                Contribution Regulation Act) approved account.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Contact for International Donations:
                  </h4>
                  <p className="text-gray-600">
                    Email: donations@gurudwaradaunsahib.org
                  </p>
                  <p className="text-gray-600">Phone: +91 XXXXXXXXXX</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Required Information:
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Full name and address</li>
                    <li>• Passport copy (for verification)</li>
                    <li>• Purpose of donation</li>
                    <li>• Bank details for receipt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
