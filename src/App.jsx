import React, { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Music, Bot, Radio, Star } from 'lucide-react';
import './index.css';

function App() {
  const scrollRef = useRef(null);
  const isTouching = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      if (isTouching.current) return;

      const itemWidth = container.querySelector('.gallery-item')?.clientWidth || 280;
      const gap = 20;
      const scrollStep = itemWidth + gap;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, 2500);

    return () => clearInterval(autoScroll);
  }, []);

  const galleryItems = [
    { src: "WhatsApp Image 2026-06-22 at 2.49.39 AM (1).jpeg", info: "Secure Login" },
    { src: "WhatsApp Image 2026-06-22 at 2.49.40 AM.jpeg", info: "Welcome Screen" },
    { src: "WhatsApp Image 2026-06-22 at 2.49.37 AM.jpeg", info: "Personalized Home" },
    { src: "WhatsApp Image 2026-06-22 at 2.49.38 AM.jpeg", info: "Ask Neon AI" },
    { src: "WhatsApp Image 2026-06-22 at 2.49.39 AM.jpeg", info: "Premium Player" },
    { src: "WhatsApp Image 2026-06-22 at 2.49.38 AM (1).jpeg", info: "Your Library" },
    { src: "WhatsApp Image 2026-06-22 at 2.49.38 AM (2).jpeg", info: "Custom Settings" }
  ];

  const initialFeedbacks = [
    { name: "Arun Lamani", rating: 5, text: "Bhai sach me maza aa gaya! UI itna smooth hai ki Spotify use karna chhod diya maine. Ads nahi aate isse badi baat aur kya hogi. ❤️" },
    { name: "Nikhil", rating: 5, text: "The AI playlist feature is literally insane. I just typed 'long drive' and the songs it picked were 100% my vibe. Kudos to the dev team." },
    { name: "Vinod Morya", rating: 5, text: "Bohot sahi app hai! Audio quality ekdum crisp aati hai earphones me. Background visualizer dekh ke toh ekdum premium feel aati hai." },
    { name: "Gayatri", rating: 5, text: "I love the dark neon theme! It doesn't hurt my eyes at night, and the app is so easy to navigate. Really happy with it." },
    { name: "Sneha", rating: 4, text: "One of the best music apps out there right now. Downloads work perfectly offline. Bass thoda aur regional songs add kar do toh perfect ho jayega! ✨" },
    { name: "Rohan", rating: 5, text: "Mujhe pehle laga normal sa music player hoga, but the animations and glass UI blew my mind. 5 stars easily." },
    { name: "Pooja", rating: 5, text: "Ad-free experience is a blessing! I can listen to my study lo-fi mixes for hours without any annoying interruptions." },
    { name: "Vikram", rating: 5, text: "Super fast and responsive. Usually, aesthetic apps lag a lot, but this one is butter smooth on my phone. Great work guys." }
  ];

  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.text.trim()) {
      setFeedbacks([{ name: newReview.name, text: newReview.text, rating: newReview.rating }, ...feedbacks]);
      setNewReview({ name: '', text: '', rating: 5 });
      setShowReviewForm(false);
    }
  };

  const handleDownload = () => {
    // APK file download logic
    const element = document.createElement("a");
    element.href = "/neon-music.apk"; // Ensure your APK is named this and placed in the public folder
    element.download = "NeonMusic.apk"; 
    document.body.appendChild(element); 
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <div className="background-blobs"></div>
      
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="audio-visualizer">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bar" style={{ animationDelay: `${Math.random()}s`, height: `${20 + Math.random() * 80}px` }}></div>
            ))}
          </div>
          <div className="content" style={{ position: 'relative', zIndex: 1 }}>
            <div className="logo-container">
              <img src="/images/neon music.jpeg" alt="Neon Music Logo" className="main-logo" />
              <span className="beta-badge">Trial Version</span>
            </div>
            <h1>Your music,<br/><span className="highlight">illuminated.</span></h1>
            <p>Experience the future of streaming with Neon Music. Enjoy high-fidelity audio, AI-curated playlists, and a stunning interface.</p>
            <button className="download-btn" onClick={handleDownload}>
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose Neon Music?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={36} /></div>
              <h3>100% Secure</h3>
              <p>Your privacy is our priority. Enjoy your favorite tracks with bank-grade security and complete peace of mind.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Radio size={36} /></div>
              <h3>Ad-Free Experience</h3>
              <p>No annoying interruptions. Just pure, continuous music streaming all day and night.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Bot size={36} /></div>
              <h3>Neon AI Assistant</h3>
              <p>Tell our official AI your mood, and it will instantly generate the perfect playlist for you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Music size={36} /></div>
              <h3>Studio Quality Audio</h3>
              <p>Experience rich, high-fidelity sound with our advanced premium audio streaming engine.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Experience the Interface</h2>
          <div 
            className="horizontal-scroll-container"
            ref={scrollRef}
            onTouchStart={() => isTouching.current = true}
            onTouchEnd={() => { setTimeout(() => { isTouching.current = false; }, 2000); }}
            onMouseEnter={() => isTouching.current = true}
            onMouseLeave={() => isTouching.current = false}
          >
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={`/images/${item.src}`} alt={`Screenshot ${index + 1}`} loading="lazy" />
                <div className="item-info">{item.info}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            {feedbacks.map((fb, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < (fb.rating || 5) ? "#FFD700" : "none"} color={i < (fb.rating || 5) ? "#FFD700" : "rgba(255, 255, 255, 0.3)"} />
                  ))}
                </div>
                <p>"{fb.text}"</p>
                <h4>- {fb.name}</h4>
              </div>
            ))}
          </div>
          <div className="review-action">
            <button className="write-review-btn" onClick={() => setShowReviewForm(true)}>
              Share Your Review
            </button>
          </div>

          {/* Review Form Modal */}
          {showReviewForm && (
            <div className="review-modal-overlay">
              <div className="review-modal">
                <button className="close-modal-btn" onClick={() => setShowReviewForm(false)}>×</button>
                <h3>Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="review-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      value={newReview.name} 
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Rating</label>
                    <div className="star-rating-select" style={{ display: 'flex', gap: '8px', padding: '5px 0' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={28} 
                          fill={newReview.rating >= star ? "#FFD700" : "none"} 
                          color={newReview.rating >= star ? "#FFD700" : "rgba(255, 255, 255, 0.4)"} 
                          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Your Review</label>
                    <textarea 
                      placeholder="What do you think about Neon Music?" 
                      rows="4"
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-review-btn">Post Review</button>
                </form>
              </div>
            </div>
          )}
        </section>

        <footer>
          <p>© 2026 Neon Music. All rights reserved.</p>
          <p className="developer-credits">
            <a href="https://sallu-dev.vercel.app/" target="_blank" rel="noopener noreferrer">Sallu Developer</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
