import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";


export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="Complete AI-Native textbook for mastering robotics, humanoids, ROS2, VLA systems, and digital twins."
    >
      {/* HERO SECTION - Futuristic Robotics Theme */}
      <header
        style={{
          padding: "120px 20px 100px",
          textAlign: "center",
          background: `
            linear-gradient(135deg, #000 0%, #0a0a2a 30%, #001122 100%),
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 170, 0.1) 0%, transparent 50%)
          `,
          color: "white",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(0, 255, 255, 0.2)",
        }}
      >
        {/* Animated grid overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }} />
        
        <div style={{ 
          maxWidth: "1000px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
          <div style={{ marginBottom: "30px" }}>
            <span
              style={{
                background: "linear-gradient(90deg, #00d4aa, #0099ff)",
                color: "#000",
                padding: "12px 30px",
                borderRadius: "50px",
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "1px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textShadow: "none",
                boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)",
                animation: "glow 2s ease-in-out infinite alternate",
              }}
            >
              <span style={{ fontSize: "24px" }}>⚡</span>
              100% Free • AI-Native • Industry-Grade
            </span>
          </div>

          <h1 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
            fontWeight: 900, 
            margin: "30px 0", 
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #fff, #00ffff, #00ffaa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
          }}>
            Physical AI &<br />
            <span style={{ fontSize: "1.2em" }}>Humanoid Robotics</span>
          </h1>
          
          <div style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
            maxWidth: "800px",
            margin: "0 auto 50px",
            lineHeight: 1.6,
            opacity: 0.9,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(0, 255, 255, 0.2)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          }}>
            Master humanoid robots, ROS 2, Vision-Language-Action (VLA) models, 
            digital twins, and embodied intelligence — from fundamentals to production-grade systems.
          </div>

          <div style={{ 
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/introduction/intro"
              style={{ 
                fontSize: "20px", 
                padding: "18px 40px", 
                borderRadius: "15px",
                background: "linear-gradient(90deg, #0066ff, #00ccff)",
                border: "none",
                fontWeight: "bold",
                boxShadow: "0 0 30px rgba(0, 102, 255, 0.5)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 0 40px rgba(0, 102, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 0 30px rgba(0, 102, 255, 0.5)";
              }}
            >
              📚 Start Reading →
            </Link>
            
            <Link
              className="button button--secondary button--lg"
              to="/docs/ros2-foundations/module-1-ros2"
              style={{ 
                fontSize: "20px", 
                padding: "18px 40px", 
                borderRadius: "15px",
                background: "transparent",
                border: "2px solid #00ffff",
                color: "#00ffff",
                fontWeight: "bold",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0, 255, 255, 0.1)";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              🤖 Jump to ROS 2
            </Link>
          </div>
          
          {/* Stats */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "60px",
            flexWrap: "wrap",
          }}>
            {[
              { number: "7", label: "Comprehensive Modules" },
              { number: "50+", label: "Hands-on Projects" },
              { number: "∞", label: "Weekly Updates" },
              { number: "100%", label: "Open Source" },
            ].map((stat, idx) => (
              <div key={idx} style={{
                textAlign: "center",
                padding: "20px",
                minWidth: "150px",
              }}>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #00ffff, #00ffaa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "10px",
                }}>
                  {stat.number}
                </div>
                <div style={{ color: "#aaa", fontSize: "14px", letterSpacing: "1px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* MODULES GRID - Futuristic Cards */}
      <section style={{ 
        padding: "100px 20px", 
        background: `
          linear-gradient(180deg, #000 0%, #0a0a1a 30%, #000 100%)
        `,
        position: "relative",
      }}>
        {/* Background elements */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0, 100, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            textAlign: "center", 
            marginBottom: "80px", 
            fontWeight: "bold",
            background: "linear-gradient(90deg, #fff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            ⚡ Master the Complete Stack
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px",
          }}>
            {modules.map((module, i) => (
              <div 
                key={i} 
                style={{
                  ...cardStyle,
                  animation: `cardFloat ${3 + i * 0.5}s ease-in-out infinite alternate`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
                }}
              >
                <div style={{ 
                  fontSize: "48px", 
                  marginBottom: "20px",
                  filter: "drop-shadow(0 0 10px currentColor)",
                }}>
                  {module.icon}
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}>
                  <span style={{
                    background: "linear-gradient(90deg, #0066ff, #00ccff)",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                    Module {i + 1}
                  </span>
                </div>
                <h3 style={cardTitle}>{module.title}</h3>
                <p style={cardText}>{module.desc}</p>
                <Link 
                  style={cardBtn} 
                  to={module.link}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateX(5px)";
                    e.target.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateX(0)";
                    e.target.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.3)";
                  }}
                >
                  Explore <span style={{ marginLeft: "10px" }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ 
        padding: "120px 20px", 
        background: "linear-gradient(180deg, #000 0%, #001122 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Animated lines */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
          animation: "scanLine 3s linear infinite",
        }} />
        
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            textAlign: "center", 
            marginBottom: "80px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #00ffaa, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Why This Is Different
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px",
          }}>
            {features.map((f, i) => (
              <div key={i} style={{
                ...featureBox,
                animation: `fadeInUp 0.6s ease-out ${i * 0.2}s both`,
              }}>
                <div style={{ 
                  fontSize: "60px", 
                  marginBottom: "30px",
                  filter: "drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))",
                }}>
                  {f.icon}
                </div>
                <h3 style={{ 
                  fontSize: "28px", 
                  fontWeight: "bold", 
                  marginBottom: "20px",
                  color: "#fff",
                }}>
                  {f.title}
                </h3>
                <p style={{ 
                  color: "#aaa", 
                  lineHeight: "1.7", 
                  fontSize: "18px",
                  opacity: 0.9,
                }}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Futuristic */}
      <section style={{
        padding: "140px 20px",
        background: `
          linear-gradient(135deg, #000 0%, #0a0a2a 100%),
          radial-gradient(circle at 50% 0%, rgba(0, 100, 255, 0.3) 0%, transparent 50%)
        `,
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(0, 255, 255, 0.2)",
      }}>
        {/* Floating elements */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          fontSize: "120px",
          opacity: 0.1,
          animation: "float 6s ease-in-out infinite",
        }}>
          🤖
        </div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          fontSize: "120px",
          opacity: 0.1,
          animation: "float 8s ease-in-out infinite reverse",
        }}>
          ⚡
        </div>
        
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            marginBottom: "30px",
            fontWeight: 900,
            background: "linear-gradient(90deg, #00ffff, #00ffaa, #ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
          }}>
            The Future is Physical AI
          </h2>
          
          <p style={{ 
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
            maxWidth: "700px", 
            margin: "0 auto 60px", 
            opacity: 0.9,
            lineHeight: 1.7,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(0, 255, 255, 0.2)",
          }}>
            Tesla Bot, Figure 02, Boston Dynamics Atlas, Apptronik Apollo — 
            they're not science fiction anymore. Be part of the revolution.
          </p>
          
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction/intro"
            style={{ 
              fontSize: "24px", 
              padding: "20px 50px", 
              borderRadius: "15px",
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              border: "none",
              fontWeight: "bold",
              color: "#000",
              boxShadow: "0 0 40px rgba(255, 0, 255, 0.5)",
              transition: "all 0.3s",
              animation: "pulse 2s infinite",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 60px rgba(255, 0, 255, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 40px rgba(255, 0, 255, 0.5)";
            }}
          >
            🚀 Start Building Now →
          </Link>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes glow {
          from { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5); }
          to { box-shadow: 0 0 30px rgba(0, 212, 255, 0.8); }
        }
        
        @keyframes cardFloat {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        
        @keyframes scanLine {
          0% { top: 0; }
          100% { top: 100%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </Layout>
  );
}

/* DATA */
const modules = [
  { icon: "🤖", title: "ROS 2 Foundations", desc: "Master the nervous system of modern robots — nodes, topics, actions, QoS, and real-world workflows.", link: "/docs/ros2-foundations/module-1-ros2" },
  { icon: "🌐", title: "Simulation & Digital Twins", desc: "Gazebo, Isaac Sim, Unity — train robots safely at scale with perfect digital replicas.", link: "/docs/simulation/module-2-simulation" },
  { icon: "⚙️", title: "Hardware Foundations", desc: "Motors, IMUs, torque control, embedded systems — everything real humanoids are built from.", link: "/docs/hardware-basics/module-3-hardware" },
  { icon: "🧠", title: "VLA Systems", desc: "The ultimate architecture: LLMs + vision + action tokens = true embodied intelligence.", link: "/docs/vla-systems/module-4-vla-foundations" },
  { icon: "🚀", title: "Advanced AI Control", desc: "RL, MPC, diffusion policies, trajectory optimization — intelligent motion generation.", link: "/docs/advanced-ai-control/module-5-advanced-ai" },
  { icon: "🦾", title: "Humanoid Design", desc: "End-to-end humanoid creation: kinematics, actuators, morphology, energy, and balance.", link: "/docs/humanoid-design/module-6-humanoid-design" },
  { icon: "📚", title: "Resources & Research", desc: "Glossary, papers, tools, datasets, and bleeding-edge research updates.", link: "/docs/appendix/glossary" },
];

const features = [
  { icon: "🧠", title: "AI-Native Architecture", text: "Built around LLMs, VLA models, and diffusion policies — exactly how Figure, Tesla, and 1X build today's robots." },
  { icon: "💻", title: "Production-Ready Code", text: "Every module includes runnable ROS 2 packages, Isaac Sim scenes, Colab notebooks, and real deployment examples." },
  { icon: "⚡", title: "Live Updates", text: "The curriculum evolves weekly with new research, tools, and industry practices. Stay ahead of the curve." },
];

/* STYLES */
const cardStyle = {
  background: `
    linear-gradient(145deg, rgba(10, 15, 40, 0.9), rgba(5, 10, 30, 0.9)),
    radial-gradient(circle at top left, rgba(0, 100, 255, 0.2), transparent 50%),
    radial-gradient(circle at bottom right, rgba(0, 255, 170, 0.1), transparent 50%)
  `,
  padding: "40px 30px",
  borderRadius: "25px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  cursor: "pointer",
  textAlign: "center",
  border: "1px solid rgba(0, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  position: "relative",
  overflow: "hidden",
};

const cardTitle = {
  fontSize: "26px",
  fontWeight: "bold",
  margin: "20px 0 15px",
  color: "#fff",
  lineHeight: 1.3,
};

const cardText = {
  fontSize: "16px",
  color: "#aaa",
  lineHeight: "1.7",
  marginBottom: "30px",
  opacity: 0.9,
};

const cardBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(90deg, rgba(0, 255, 255, 0.2), rgba(0, 200, 255, 0.2))",
  color: "#00ffff",
  padding: "12px 25px",
  borderRadius: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.3s",
  border: "1px solid rgba(0, 255, 255, 0.3)",
  boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
  minWidth: "140px",
};

const featureBox = {
  padding: "50px 40px",
  background: "rgba(10, 20, 40, 0.7)",
  borderRadius: "25px",
  border: "1px solid rgba(0, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  transition: "transform 0.3s",
};