// GSAP Animations
gsap.from('.animate__fadeIn', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
gsap.from('.card', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.1,
  delay: 0.5,
});

// Modal Functionality
const projectDetails = {
  'arise-empowerment': {
    title: 'Arise Empowerment',
    description: 'A comprehensive empowerment platform designed to inspire and uplift communities. This website features a modern, responsive design with engaging content sections, smooth navigation, and interactive elements. Built with accessibility and user experience in mind, it serves as a digital hub for community empowerment initiatives.',
    tech: 'HTML5, CSS3, JavaScript, Responsive Design',
    link: 'https://ariseempowerment.unaux.com/',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center',
    features: [
      'Fully responsive design across all devices',
      'Engaging hero sections with call-to-action buttons',
      'Interactive navigation and smooth scrolling',
      'Optimized for performance and accessibility',
      'Modern CSS animations and transitions'
    ]
  },
  'deskvibe': {
    title: 'DeskVibe',
    description: 'A sleek and modern workspace solution platform that showcases contemporary web design principles. DeskVibe features an intuitive user interface, optimized user experience, and clean aesthetics perfect for productivity-focused audiences. The site demonstrates advanced frontend development skills with attention to detail.',
    tech: 'HTML5, CSS3, JavaScript, UI/UX Design',
    link: 'https://deskvibe.unaux.com/',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop&crop=center',
    features: [
      'Clean and modern interface design',
      'Optimized user experience flow',
      'Interactive elements and hover effects',
      'Cross-browser compatibility',
      'Performance-optimized loading'
    ]
  }
};

function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projectDetails[projectId];
  
  const featuresHtml = project.features ? 
    `<div class="mb-4">
      <h4 class="font-semibold text-pink-600 mb-2">Key Features:</h4>
      <ul class="list-disc pl-5 text-gray-700">
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>` : '';
  
  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="mb-4 rounded-lg w-full">
    <h3 class="text-2xl font-bold mb-4 text-pink-600">${project.title}</h3>
    <p class="mb-4 text-gray-700">${project.description}</p>
    ${featuresHtml}
    <div class="mb-4">
      <p class="font-semibold text-pink-600 mb-2">Tech Stack:</p>
      <p class="text-gray-700">${project.tech}</p>
    </div>
    <div class="flex space-x-3">
      <a href="${project.link}" target="_blank" class="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition flex-1 text-center">Visit Live Site</a>
    </div>
  `;
  modal.style.display = 'block';
  gsap.from('.modal-content', { opacity: 0, scale: 0.8, duration: 0.5 });
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
