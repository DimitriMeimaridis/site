/* js/calendar.js */
document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');
  const buttons = document.querySelectorAll('#controls button');

  // Simulate commit count: returns an integer from 0 to 4
  function randomCommitCount() {
    return Math.floor(Math.random() * 5);
  }

  // Map commit count to a color (GitHub-like scheme)
  function getColor(commitCount) {
    if (commitCount === 0) return '#ebedf0';
    if (commitCount === 1) return '#9be9a8';
    if (commitCount === 2) return '#40c463';
    if (commitCount === 3) return '#30a14e';
    return '#216e39';
  }

  // Render the calendar with a given number of weeks
  function renderCalendar(weeks) {
    calendarEl.innerHTML = ''; // Clear previous calendar

    // Loop over each week
    for (let w = 0; w < weeks; w++) {
      const weekEl = document.createElement('div');
      weekEl.className = 'week';

      // Each week has 7 days (cells)
      for (let d = 0; d < 7; d++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'day';
        const commitCount = randomCommitCount();
        dayEl.style.backgroundColor = getColor(commitCount);
        // Optional tooltip to show the commit count
        dayEl.title = `Commits: ${commitCount}`;
        weekEl.appendChild(dayEl);
      }
      calendarEl.appendChild(weekEl);
    }
  }

  // Set an initial view (e.g., 1 Month = 4 weeks)
  renderCalendar(4);

  // Update calendar when a button is clicked
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const weeks = parseInt(button.getAttribute('data-weeks'));
      renderCalendar(weeks);
    });
  });
});
