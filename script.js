function showSection(sectionId) {
  const sections = document.querySelectorAll('.info-card');
  sections.forEach(sec => sec.classList.add('hidden'));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('fade-in');
  }
}
