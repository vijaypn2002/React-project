import React, { useEffect, useRef } from 'react';

function BusinessSolutionsSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollAmount >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        slider.scrollLeft += 1;
        scrollAmount += 1;
      }
    };

    const scrollInterval = setInterval(scrollStep, 10); // Adjust speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Transform Your Business with AI-Powered Solutions</h2>
      <div style={styles.sliderContainer} ref={sliderRef}>
        {[...Array(6)].map((_, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>Sales Automation</h3>
            <p style={styles.cardText}>
              Unlock new revenue streams by automating the sales process. Yugaa AI assists in lead qualification, product recommendations.
            </p>
            <div style={styles.listContainer}>
              <div style={styles.listItem}>
                <span style={styles.listText}>check my order status</span>
              </div>
              <div style={styles.listItem}>
                <span style={styles.listText}>check my order status</span>
              </div>
              <div style={styles.listItem}>
                <span style={styles.listText}>check my order status</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#060B27',
    padding: '40px 20px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  heading: {
    color: '#fff',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  sliderContainer: {
    display: 'flex',
    gap: '20px',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    width: '100%',
    padding: '20px 0',
    scrollbarWidth: 'none', // Hide scrollbar for Firefox
  },
  card: {
    background: 'linear-gradient(145deg, #0f1624, #242b49)',
    borderRadius: '15px',
    width: '250px',
    padding: '20px',
    color: '#fff',
    textAlign: 'left',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '14px',
    marginBottom: '15px',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  listItem: {
    backgroundColor: '#162447',
    borderRadius: '10px',
    padding: '10px',
    color: '#fff',
    marginTop: '5px',
  },
  listText: {
    fontSize: '14px',
  },

  // Responsive styles for mobile
  '@media (max-width: 768px)': {
    section: {
      padding: '20px 10px',
    },
    heading: {
      fontSize: '20px',
    },
    sliderContainer: {
      gap: '10px',
      padding: '10px 0',
    },
    card: {
      width: '200px',
      padding: '15px',
    },
    cardTitle: {
      fontSize: '16px',
    },
    cardText: {
      fontSize: '12px',
    },
    listText: {
      fontSize: '12px',
    },
  },
};

export default BusinessSolutionsSection;
