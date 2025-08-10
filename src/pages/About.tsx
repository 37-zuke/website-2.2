import React from 'react';
import { Camera, Video, Edit3, Palette, Users, Award, Target, Heart, Monitor } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Crosslinks was founded with a vision to capture and share the vibrant life of NSUT campus.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2019',
      title: 'Growing Strong',
      description: 'Expanded our team and started covering major university events and festivals.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Launched our digital platforms and embraced new technologies for better storytelling.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Now the premier media organization of NSUT, continuing to capture moments that matter.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const departments = [
    {
      icon: Users,
      name: 'Core Members',
      description: 'Leadership team guiding the vision and strategy of Crosslinks across all departments.',
      color: 'from-green to-green-dark',
      members: 8
    },
    {
      icon: Camera,
      name: 'Photography',
      description: 'Capturing life\'s most precious moments through the lens, from intimate portraits to grand events.',
      color: 'from-green to-green-dark',
      members: 15
    },
    {
      icon: Video,
      name: 'Videography',
      description: 'Creating compelling visual stories that move, inspire, and document the NSUT experience.',
      color: 'from-green to-green-dark',
      members: 12
    },
    {
      icon: Edit3,
      name: 'Content Design',
      description: 'Crafting engaging narratives that give voice to our visual stories and connect with our audience.',
      color: 'from-green to-green-dark',
      members: 10
    },
    {
      icon: Monitor,
      name: 'Tech Department',
      description: 'Managing digital platforms, websites, and technical infrastructure for seamless operations.',
      color: 'from-green to-green-dark',
      members: 8
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every shot, every story, every design.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections and fostering the NSUT spirit through our work.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by love for creative expression and storytelling.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing new technologies and creative approaches to media.'
    }
  ];

  return (
    <div className="pt-16 bg-dark">
      {/* Hero Section */}
      <section className="py-20 bg-dark border-b border-green/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-green">ABOUT US</h1>
          <div className="w-24 h-1 bg-green mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mt-16">
            <div className="text-left opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300">
                Crosslinks is more than a network — it's a movement. We bring together innovative minds, collaborative projects, and a passion for impact. Our mission is to connect people with ideas, resources, and opportunities that push boundaries and create lasting change.
              </p>
            </div>
            <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="bg-dark-card rounded-2xl border border-green/20 p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-12 w-12 text-green" />
                  </div>
                  <p className="text-gray-400">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green mb-8">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded with the vision of becoming "The Face of NSUT," Crosslinks has grown from 
                a small group of passionate students to the university's premier media organization. 
                We believe in the power of visual storytelling to connect, inspire, and preserve memories.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Through our lens, we capture not just images and videos, but emotions, achievements, 
                and the vibrant spirit of campus life. Every project we undertake is a step towards 
                building a stronger, more connected NSUT community.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green mb-2">45+</div>
                  <div className="text-gray-400">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green mb-2">200+</div>
                  <div className="text-gray-400">Events Covered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl border border-green/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-green text-black p-6 rounded-2xl shadow-xl">
                <Users className="h-8 w-8 mb-2" />
                <div className="font-bold">United by Creativity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Milestones that shaped Crosslinks</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green to-green-dark"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-dark rounded-2xl border border-green/20 shadow-lg p-8 hover:shadow-xl hover:border-green/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-green to-green-dark text-black px-4 py-2 rounded-full font-bold">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-xl border border-green/20"
                    />
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green to-green-dark rounded-full border-4 border-dark shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Our Departments</h2>
            <p className="text-xl text-gray-300">Where creativity meets expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group bg-dark-card rounded-2xl border border-green/20 shadow-lg p-8 hover:shadow-2xl hover:border-green/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="h-8 w-8 text-black" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                  <span className="bg-green/20 text-green px-3 py-1 rounded-full text-sm font-medium">
                    {dept.members} members
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark border-t border-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-dark/50 backdrop-blur-sm rounded-2xl border border-green/20 p-8 hover:bg-dark/70 hover:border-green/40 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green/20 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;