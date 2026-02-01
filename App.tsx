import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Briefcase, 
  Clock, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Users, 
  Award, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';

import { FadeIn } from './components/FadeIn';
import { Section, Divider, Badge, Heading, Subtext } from './components/LayoutComponents';

// --- Assets ---
// Using picsum images that feel abstract and professional (architecture, nature, clean desks)
const HERO_IMAGE = "https://picsum.photos/id/2/2560/1440"; // Laptop/Work
const REALITY_IMAGE = "https://picsum.photos/id/3/800/1000"; // Phone/Tech
const CHANGE_IMAGE = "https://picsum.photos/id/201/1000/1000"; // Architecture/Structure
const MODEL_IMAGE = "https://picsum.photos/id/180/1200/800"; // Laptop/Study

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for Hero
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <div ref={containerRef} className="bg-warm-gray-50 min-h-screen overflow-x-hidden selection:bg-warm-gray-200">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <div className="absolute inset-0 bg-warm-gray-50/80 z-10" /> {/* Overlay for readability */}
          <img 
            src={HERO_IMAGE} 
            alt="Workspace Background" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <FadeIn delay={0.2} duration={1}>
            <div className="mb-6 flex justify-center">
              <span className="py-1 px-4 border border-warm-gray-800 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-warm-gray-900">
                Official Report 2025
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} duration={1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-gray-900 leading-[1.05] mb-8 tracking-tight">
              The Future of Work <br/><i className="font-serif font-light opacity-80">Starts Now</i>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6} duration={1}>
            <p className="font-sans text-xl md:text-2xl text-warm-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
              How careers, skills, and human potential will be redefined by 2035 in the age of intelligence.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.9} duration={1}>
             <div className="mt-12 animate-bounce opacity-50">
               <ArrowRight className="w-6 h-6 rotate-90 mx-auto text-warm-gray-900" />
             </div>
          </FadeIn>
        </div>
      </div>

      {/* --- SECTION 2: THE CURRENT REALITY --- */}
      <Section className="bg-white rounded-t-[3rem] -mt-12 relative z-30 shadow-sm border-t border-warm-gray-100">
        <FadeIn>
          <Badge>Status Quo</Badge>
          <Heading>The Breaking Point</Heading>
          <Subtext>
            The industrial model of work—fixed hours, fixed location, fixed role—is collapsing under the weight of connectivity and automation. We are witnessing the end of the "career ladder."
          </Subtext>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {[
            { 
              icon: Clock, 
              title: "The 9-to-5 Paradox", 
              desc: "Productivity is no longer correlated with hours worked, yet the structure remains." 
            },
            { 
              icon: Users, 
              title: "Talent Mismatch", 
              desc: "74% of employers cannot find the skills they need, while millions remain underemployed." 
            },
            { 
              icon: Briefcase, 
              title: "Degree Inflation", 
              desc: "Traditional education credentials are losing relevance as skill half-life drops to 5 years." 
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.2} className="group">
              <div className="w-12 h-12 bg-warm-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-warm-gray-200 transition-colors">
                <item.icon className="w-6 h-6 text-warm-gray-800" />
              </div>
              <h3 className="font-serif text-2xl text-warm-gray-900 mb-3">{item.title}</h3>
              <p className="text-warm-gray-600 leading-relaxed font-light">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Divider />

      {/* --- SECTION 3: WHY CHANGE IS INEVITABLE --- */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <FadeIn direction="right">
                <div className="aspect-[4/5] bg-warm-gray-200 overflow-hidden relative">
                   <img src={CHANGE_IMAGE} alt="Structural Change" className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-[2s]" />
                   <div className="absolute bottom-0 left-0 p-8 bg-white/90 backdrop-blur-sm w-3/4">
                      <p className="font-serif text-xl italic">"Adaptability is the new currency of the workforce."</p>
                   </div>
                </div>
             </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn>
              <Badge>Drivers of Change</Badge>
              <Heading>Why We Cannot Stay Here</Heading>
              <Subtext className="mb-6">
                Three converging forces—Generative AI, Global Connectivity, and Longevity—are reshaping the economic landscape.
              </Subtext>
              <div className="space-y-8 mt-10">
                <div className="flex gap-4">
                  <span className="font-serif text-3xl text-warm-gray-300 font-bold">01</span>
                  <div>
                    <h4 className="text-lg font-bold text-warm-gray-900 uppercase tracking-wide mb-2">Cognitive Automation</h4>
                    <p className="text-warm-gray-600 font-light leading-relaxed">AI is not just automating tasks; it is automating thought processes. The human role shifts from 'creator' to 'editor' and 'strategist'.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-serif text-3xl text-warm-gray-300 font-bold">02</span>
                  <div>
                    <h4 className="text-lg font-bold text-warm-gray-900 uppercase tracking-wide mb-2">Asynchronous Collaboration</h4>
                    <p className="text-warm-gray-600 font-light leading-relaxed">Work is no longer a place you go, but a thing you do. Geography is irrelevant for knowledge work.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* --- SECTION 4: THE NEW WORK MODEL --- */}
      <div className="bg-warm-gray-900 text-warm-gray-50 py-32">
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="inline-block py-1 px-3 border border-warm-gray-600 rounded-full text-xs font-medium uppercase tracking-widest text-warm-gray-400 mb-6">
                The 2035 Framework
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">The Adaptive Hybrid Model</h2>
              <p className="font-sans text-xl text-warm-gray-300 font-light">
                The pyramid of hierarchy is replaced by the circle of competence.
              </p>
            </FadeIn>
          </div>

          <div className="relative max-w-4xl mx-auto">
             {/* Abstract Diagram Representation */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <FadeIn direction="right" className="flex justify-center">
                   {/* CSS Visualization of the model */}
                   <div className="relative w-80 h-80">
                      <div className="absolute inset-0 border border-warm-gray-700 rounded-full animate-[spin_20s_linear_infinite]" />
                      <div className="absolute inset-8 border border-warm-gray-600 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-16 border border-warm-gray-500 rounded-full flex items-center justify-center bg-warm-gray-800/50 backdrop-blur-sm">
                         <span className="font-serif text-2xl italic text-white">Purpose</span>
                      </div>
                      
                      {/* Floating Nodes */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-warm-gray-100 text-warm-gray-900 px-3 py-1 text-xs font-bold uppercase rounded-sm">AI Copilot</div>
                      <div className="absolute bottom-10 -right-4 bg-warm-gray-100 text-warm-gray-900 px-3 py-1 text-xs font-bold uppercase rounded-sm">Deep Human Skill</div>
                      <div className="absolute bottom-10 -left-4 bg-warm-gray-100 text-warm-gray-900 px-3 py-1 text-xs font-bold uppercase rounded-sm">Fluid Networks</div>
                   </div>
                </FadeIn>

                <FadeIn direction="left">
                   <ul className="space-y-6">
                      <li className="flex flex-col border-l border-warm-gray-700 pl-6 py-2">
                        <strong className="text-lg text-white mb-1">Fluid Roles</strong>
                        <span className="text-warm-gray-400 font-light">Titles disappear. You are defined by the portfolio of problems you solve.</span>
                      </li>
                      <li className="flex flex-col border-l border-warm-gray-700 pl-6 py-2">
                        <strong className="text-lg text-white mb-1">Project-Based Economy</strong>
                        <span className="text-warm-gray-400 font-light">Employment moves from long-term tenure to high-impact tours of duty.</span>
                      </li>
                      <li className="flex flex-col border-l border-warm-gray-700 pl-6 py-2">
                        <strong className="text-lg text-white mb-1">Continuous Reskilling</strong>
                        <span className="text-warm-gray-400 font-light">Learning is integrated into the workflow, not separate from it.</span>
                      </li>
                   </ul>
                </FadeIn>
             </div>
          </div>
        </Section>
      </div>

      {/* --- SECTION 5: KEY PILLARS --- */}
      <Section>
        <FadeIn>
          <Badge>Strategic Pillars</Badge>
          <Heading>Foundations of the Future</Heading>
        </FadeIn>
        
        <div className="mt-20 flex flex-col gap-12">
          {[
            {
              num: "01",
              title: "Human-Centric Creativity",
              desc: "As AI handles logic and data, purely human traits—empathy, taste, complex ethics, and original storytelling—become the most valuable assets.",
              icon: TrendingUp
            },
            {
              num: "02",
              title: "Decentralized Autonomy",
              desc: "Organizations will function as networks of autonomous nodes rather than top-down hierarchies. Decision-making is pushed to the edge.",
              icon: Globe
            },
            {
              num: "03",
              title: "Digital Sovereignty",
              desc: "Workers will own their own data, reputation, and credentials on portable ledgers, freeing them from platform lock-in.",
              icon: Cpu
            },
            {
              num: "04",
              title: "The Four-Day Baseline",
              desc: "With efficiency gains from AGI, the standard work week compresses, shifting focus to output quality and mental well-being.",
              icon: Clock
            }
          ].map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group border-b border-warm-gray-200 pb-12 hover:bg-white hover:shadow-sm hover:px-8 hover:-mx-8 transition-all duration-500 rounded-xl">
                 <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                    <div className="font-serif text-4xl text-warm-gray-300 font-bold group-hover:text-warm-gray-400 transition-colors">
                      {pillar.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-warm-gray-900 mb-3">{pillar.title}</h3>
                      <p className="text-lg text-warm-gray-600 font-light max-w-2xl">{pillar.desc}</p>
                    </div>
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 self-center">
                       <pillar.icon className="w-8 h-8 text-warm-gray-400" />
                    </div>
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* --- SECTION 6: WHAT THIS MEANS FOR YOU --- */}
      <Section className="bg-warm-gray-100/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <FadeIn>
              <Badge>Personal Impact</Badge>
              <Heading>Your Path Forward</Heading>
              <Subtext>
                The future is not something that happens to you. It is something you build. The era of the "job" is ending; the era of the "creator" is beginning.
              </Subtext>
              <div className="mt-8 space-y-4">
                 <p className="font-sans text-warm-gray-700">
                   You must become comfortable with ambiguity. The specific tools you use today will be obsolete tomorrow, but the ability to learn them will not.
                 </p>
                 <p className="font-sans font-bold text-warm-gray-900">
                   Focus on meta-skills: Resilience, Communication, and Systems Thinking.
                 </p>
              </div>
           </FadeIn>
           <FadeIn direction="left">
              <div className="relative">
                 <img src={MODEL_IMAGE} alt="Learning" className="rounded-lg shadow-xl grayscale opacity-90" />
                 <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg rounded-lg max-w-xs hidden lg:block">
                    <p className="font-serif italic text-lg text-warm-gray-800">"The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."</p>
                    <p className="text-xs uppercase tracking-wider mt-4 text-warm-gray-500">— Alvin Toffler</p>
                 </div>
              </div>
           </FadeIn>
        </div>
      </Section>

      {/* --- SECTION 7: RESOURCES --- */}
      <Section>
         <FadeIn>
           <h3 className="font-serif text-3xl text-warm-gray-900 mb-12 text-center">Resources & Further Reading</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "The 2035 Workforce Report", type: "PDF Download" },
                { title: "AI and the End of Routine", type: "Research Paper" },
                { title: "Universal Basic Income Trials", type: "Case Study" }
              ].map((res, i) => (
                <a key={i} href="#" className="block p-8 bg-white border border-warm-gray-200 hover:border-warm-gray-400 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                      <BookOpen className="w-6 h-6 text-warm-gray-400 group-hover:text-warm-gray-800 transition-colors" />
                      <span className="text-xs uppercase tracking-widest text-warm-gray-400">{res.type}</span>
                   </div>
                   <h4 className="font-serif text-xl text-warm-gray-900 group-hover:underline decoration-1 underline-offset-4">{res.title}</h4>
                </a>
              ))}
           </div>
         </FadeIn>
      </Section>

      {/* --- FINAL SECTION: CTA --- */}
      <div className="bg-warm-gray-900 text-warm-gray-50 py-32 text-center px-6">
        <FadeIn delay={0.2} direction="up">
           <h2 className="font-serif text-5xl md:text-7xl mb-8">Prepare. Adapt.<br/>Lead the Future.</h2>
           <p className="text-xl text-warm-gray-400 font-light max-w-2xl mx-auto mb-12">
             The best way to predict the future is to invent it. Start your journey into the new economy today.
           </p>
           <button className="bg-white text-warm-gray-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-warm-gray-200 transition-colors duration-300 text-sm md:text-base">
             Start Preparing
           </button>
        </FadeIn>
      </div>
      
      {/* Footer */}
      <footer className="bg-warm-gray-900 border-t border-warm-gray-800 py-12 text-center">
         <div className="flex flex-col items-center gap-4">
             <p className="text-warm-gray-600 text-sm font-light">© 2024 Future of Work Initiative. Inspired by realfood.gov.</p>
             <div className="flex items-center gap-2 text-warm-gray-500 text-sm font-light">
                <span>Made by Abhay Kashyap</span>
                <span className="w-1 h-1 rounded-full bg-warm-gray-700"></span>
                <a 
                  href="https://www.linkedin.com/in/abhaykashyap0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-warm-gray-300 transition-colors underline underline-offset-4"
                >
                  Connect with me
                </a>
             </div>
         </div>
      </footer>

    </div>
  );
};

export default App;