import Image from "next/image";

export default function Hero() {
  return (
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
              A sacred place of worship embodying the values of community, humility, and service. 
              This spiritual heritage site welcomes visitors from all backgrounds to experience 
              peace, reflection, and the teachings of Sikhism.
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
  );
}
