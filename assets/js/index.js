window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Scroll top 
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show the button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

/* Toggle Bar Start  */
document.addEventListener("DOMContentLoaded", () => {
  const headerArea = document.querySelector(".header-area");
  const toggleBar = document.querySelector(".toggle-bar");
  const barsBtn = document.querySelector(".bars-btn");
  const crossBtn = document.querySelector(".cross-btn");

  // Open the header
  barsBtn.addEventListener("click", () => {
    headerArea.classList.add("active");
    toggleBar.classList.add("active");
  });

  // Close the header
  crossBtn.addEventListener("click", () => {
    headerArea.classList.remove("active");
    toggleBar.classList.remove("active");
  });
});
/* Toggle Bar End  */

// typewriterText
document.addEventListener("DOMContentLoaded", function() {
  const typewriterText = document.getElementById("typewriter-text");
  const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];
  let roleIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let typingSpeed = 100; // Speed of typing in ms
  let deletingSpeed = 50; // Speed of deleting in ms
  let isDeleting = false;

  function typeWriter() {
    // Add the appropriate class for each role color
    let currentRoleClass = "";

    if (roles[roleIndex] === "Web Developer") {
      currentRoleClass = "developer";
    } else if (roles[roleIndex] === "Web Designer") {
      currentRoleClass = "designer";
    } else if (roles[roleIndex] === "UI/UX Designer") {
      currentRoleClass = "ux-designer";
    }

    // Apply the class to the typewriter text
    typewriterText.className = `typewriter-role ${currentRoleClass}`;

    if (isDeleting) {
      currentText = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = roles[roleIndex].substring(0, charIndex + 1);
      charIndex++;
    }

    typewriterText.textContent = currentText;

    if (!isDeleting && charIndex === roles[roleIndex].length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
      isDeleting = false;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
  }

  // Start typing effect
  typeWriter();
});


//  progress bar 
document.addEventListener("DOMContentLoaded", function () {
  // Define the progress bars and target percentages
  const progressBars = [
    { id: 'progress-1', percentage: 80, skill: 'HTML' },
    { id: 'progress-2', percentage: 55, skill: 'CSS' },
    { id: 'progress-3', percentage: 25, skill: 'JavaScript' },
    { id: 'progress-5', percentage: 60, skill: 'WordPress' }
  ];

  let currentProgress = 0;

  function updateProgressBar(progressBar, percentage) {
    const barElement = document.getElementById(progressBar.id);
    barElement.style.width = percentage + '%';
    barElement.textContent = percentage + '%';
  }

  function animateProgressBars() {
    if (currentProgress < progressBars.length) {
      let progressBar = progressBars[currentProgress];
      let currentPercentage = 0;

      // Animate progress bar from 0 to the target percentage
      let interval = setInterval(() => {
        if (currentPercentage <= progressBar.percentage) {
          updateProgressBar(progressBar, currentPercentage);
          currentPercentage++;
        } else {
          clearInterval(interval);
          // Move to the next progress bar after 1 second
          setTimeout(() => {
            currentProgress++;
            animateProgressBars();
          }, 1000);
        }
      }, 50); // Progress increase speed (in milliseconds)
    } else {
      // Loop back to the first progress bar after completing the cycle
      setTimeout(() => {
        currentProgress = 0;
        animateProgressBars();
      }, 1000);
    }
  }

  // Start the animation
  animateProgressBars();
});


// Isotope for filtering portfolio items
// Initialize Isotope
document.addEventListener('DOMContentLoaded', function () {
  var grid = document.querySelector('.filltering');
  var iso = new Isotope(grid, {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows',
  });

  // Filter items on button click
  var filters = document.querySelectorAll('.controls .btn');
  filters.forEach((filter) =>
    filter.addEventListener('click', function () {
      var filterValue = this.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      // Update active button
      filters.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
    })
  );
});
