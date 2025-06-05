let subjects = [];

function addSubject() {
  const subjectInput = document.getElementById('subject');
  const marksInput = document.getElementById('marks');
  const subject = subjectInput.value.trim();
  const marks = Number(marksInput.value);

  // Basic validation
  if (subject === '' || isNaN(marks) || marks < 0 || marks > 100) {
    alert('Please enter a valid subject and marks (0-100).');
    return;
  }

  subjects.push({ subject, marks });
  subjectInput.value = '';
  marksInput.value = '';
  displaySubjects();
  calculateResult();
}

function displaySubjects() {
  const listDiv = document.getElementById('subjectsList');
  listDiv.innerHTML = '';

  subjects.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = "bg-gray-100 px-4 py-2 rounded-md flex justify-between items-center shadow";
    div.innerHTML = `
      <span class="font-medium text-gray-800">${index + 1}. ${item.subject}</span>
      <span class="text-indigo-600 font-semibold">${item.marks} marks</span>
    `;
    listDiv.appendChild(div);
  });
}

function calculateResult() {
  if (subjects.length === 0) {
    document.getElementById('resultSection').classList.add('hidden');
    return;
  }

  let total = 0;
  let highest = subjects[0].marks;
  let lowest = subjects[0].marks;

  subjects.forEach(item => {
    total += item.marks;
    if (item.marks > highest) highest = item.marks;
    if (item.marks < lowest) lowest = item.marks;
  });

  const average = total / subjects.length;
  const grade = getGrade(average);

  const summary = `
    Total Subjects: ${subjects.length}<br>
    Total Marks: ${total}<br>
    Average Marks: ${average.toFixed(2)}<br>
    Grade: <strong>${grade}</strong><br>
    Highest Marks: ${highest}<br>
    Lowest Marks: ${lowest}
  `;

  document.getElementById('resultSummary').innerHTML = summary;
  document.getElementById('resultSection').classList.remove('hidden');
}

function getGrade(avg) {
  if (avg >= 90) return 'A+';
  if (avg >= 80) return 'A';
  if (avg >= 70) return 'B';
  if (avg >= 60) return 'C';
  if (avg >= 50) return 'D';
  return 'F (Fail)';
}

function resetAll() {
  subjects = [];
  document.getElementById('subjectsList').innerHTML = '';
  document.getElementById('resultSummary').innerHTML = '';
  document.getElementById('resultSection').classList.add('hidden');
}
