import React from 'react';
import { Play } from 'lucide-react';

const successStories = [
  {
    title: 'Success points',
    description: 'One of our success story in munipalli, sangareddy district',
    image: 'src/public/1.jpg',
    videoId: 'FJTGQyg5mIQ',
  },
  {
    title: 'Success points',
    description: 'Our success story in Pedhamma tanda, Medak district',
    image: 'src/public/2.jpg',
    videoId: 'Nr65aWFm6yA',
  },

  {
    title: 'Youtube Video',
    description: 'Can Groundwater Increase After Drilling a Borewell?',
    image: 'src/public/yt2.jpg',
    videoId: 'VPN1yLAxFD8',
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from our groundwater detection expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${story.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </div>
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        {/* <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-blue-600 mb-6">"</div>
            <p className="text-xl text-gray-700 italic mb-6">
              AquaSurvey's groundwater detection services were instrumental in helping us locate reliable water sources for our community. Their expertise and professional approach made all the difference.
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Client"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <div className="font-semibold text-gray-900">Michael Thompson</div>
                <div className="text-gray-600">City Water Resources Director</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}