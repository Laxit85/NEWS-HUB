import { Users, Award, Globe, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl mb-6 text-gray-900">About NewsHub</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your trusted source for reliable, accurate, and timely news from around the world. 
            We're committed to delivering quality journalism that matters to you.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-6 text-gray-900 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At NewsHub, we believe in the power of informed citizens. Our mission is to provide 
          comprehensive, unbiased news coverage that helps people understand the world around them. 
          We strive to uphold the highest standards of journalism while making news accessible to everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With a dedicated team of journalists and editors working around the clock, we cover 
          stories that matter across business, politics, technology, sports, health, science, 
          entertainment, and world news.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in journalism and strive for accuracy in every story.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                We report the truth without bias, maintaining independence and transparency.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Global Reach</h3>
              <p className="text-gray-600">
                We cover stories from every corner of the world, bringing you diverse perspectives.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Community</h3>
              <p className="text-gray-600">
                We serve our readers and value the communities we cover and represent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-6 text-gray-900 text-center">Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          NewsHub is powered by a diverse team of experienced journalists, editors, photographers, 
          and digital media specialists who are passionate about storytelling and committed to 
          delivering news that makes a difference.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Together, we work tirelessly to ensure you stay informed about the events shaping our world.
        </p>
      </section>
    </div>
  );
}
