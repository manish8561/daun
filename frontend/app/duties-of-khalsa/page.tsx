import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

export default function DutiesOfKhalsa() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ਖਾਲਸੇ ਦੀਆਂ ਧੁਰਾਂ
              <br />
              <span className="text-2xl md:text-3xl text-blue-900">Duties of the Khalsa</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Guru Gobind Singh Sahib laid down the fundamental duties and principles for the Khalsa, 
              creating a saint-soldier wedded to the two-fold ideal of Bhagti (devotion) and Shakti (power).
            </p>
          </div>
        </div>
      </section>

      {/* Guru's Definition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Guru Gobind Singh's Definition of Khalsa</h2>
              <div className="text-gray-700 italic leading-relaxed space-y-4">
                <p>"He who repeats night and day the name of Him,</p>
                <p>Who has full love and confidence in God,</p>
                <p>Who bestows not a thought on any but one God,</p>
                <p>Whose enduring light is inextinguishable,</p>
                <p>Who puts no faith in fasting and worshipping cemeteries and monasteries,</p>
                <p>Who only recognises the one God and makes no fetish,</p>
                <p>Of pilgrimages, alms, charities and austerities:</p>
                <p>He is recognised as a true member of the Khalsa,</p>
                <p>In whose heart the light of the Perfect One shines."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Duties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Fundamental Duties of the Khalsa" />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    I
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Worship and Meditation</h3>
                    <p className="text-gray-600">
                      The Khalsa is to worship one God and read Nitname (Five Banis) and daily meditate on the Name.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    II
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Symbols and Guru's Teaching</h3>
                    <p className="text-gray-600">
                      He is to keep the symbols (Panj Kakar) and to lead his life according to the Guru's teaching. 
                      Gurmantra is Waheguru and the Basic creed is Mool-mantra.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    III
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Equality and Sikh Practices</h3>
                    <p className="text-gray-600">
                      He has no caste after joining the brotherhood; he has to repudiate non-Sikh rites and ceremonies, 
                      and follow only Sikh practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    IV
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Four Misdeeds (Kurahat)</h3>
                    <p className="text-gray-600">
                      He is not to commit any of the four misdeeds, namely: the shaving or cutting of hair, 
                      eating Halal meat, adultery, and the use of tobacco or any other intoxicant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    V
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Offences (Tankhah)</h3>
                    <p className="text-gray-600">
                      He is not to commit any of the social offences, such as giving dowry, using liquors and intoxicants, 
                      raising monuments over graves and associating with apostates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    VI
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Daswandh (One-Tenth Contribution)</h3>
                    <p className="text-gray-600">
                      He must contribute one-tenth (daswand) of his income for religious purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    VII
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service to Sangat</h3>
                    <p className="text-gray-600">
                      He is to serve the sangat (congregation) in all ways.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    VIII
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Defense and Protection</h3>
                    <p className="text-gray-600">
                      He must practice arms and be ready to defend the weak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panj Kakar - Five Symbols */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="The Five Symbols (Panj Kakar)" 
            subtitle="Symbols or outward signs are a mode of discipline and indicate the type of character the wearer should have." />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Kachha (Underwear)</h3>
                </div>
                <p className="text-gray-600">
                  Ensures agility and briskness. It is a mark of perpetual readiness and also stands for chastity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">⚪</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Kara (Wrist-band)</h3>
                </div>
                <p className="text-gray-600">
                  A sign of restraint and bondage. It indicates that one is a devotee of the Guru. 
                  A look at the wrist-band will bring shame to a Sikh when he does any misdeed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">⚔️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Kirpan (Sword)</h3>
                </div>
                <p className="text-gray-600">
                  An emblem of power and courage. It is to be used primarily as an instrument of defense.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">💇</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Kes (Unshorn Hair)</h3>
                </div>
                <p className="text-gray-600">
                  An emblem of the saints and Rishis of the past. The hair make a Khalsa look exactly like 
                  Guru Gobind Singh Sahib and enable him to behave exactly like the Guru.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🪮</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Kanga (Comb)</h3>
                </div>
                <p className="text-gray-600">
                  Necessary to keep the hair clean and in shape. It represents cleanliness and order in life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guru's Words */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Guru Gobind Singh's Words</h2>
              <div className="space-y-6">
                <blockquote className="text-gray-700 italic leading-relaxed border-l-4 border-blue-200 pl-6">
                  <p>"To serve them pleases me the most; no other service is so dear to my soul."</p>
                </blockquote>
                
                <blockquote className="text-gray-700 italic leading-relaxed border-l-4 border-blue-200 pl-6">
                  <p>"The Khalsa is my special form; I live in the embodiment of the Khalsa. 
                  The Khalsa is a part and parcel of my body; the Khalsa is my very soul."</p>
                </blockquote>

                <blockquote className="text-gray-700 italic leading-relaxed border-l-4 border-blue-200 pl-6">
                  <p>"It is through them that I have gained experience; with their help I have subdued my enemies. 
                  Through their favour, I am exalted, otherwise there are millions of ordinary humble men like me."</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
