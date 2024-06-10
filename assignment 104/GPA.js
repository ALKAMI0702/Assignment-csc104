function addCourse() {
    var courseContainer = document.getElementById('courses');
    var courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `
        <input type="text" class="grade" placeholder="Grade">
        <input type="number" class="credits" placeholder="Credit unit">
    `;
    courseContainer.appendChild(courseDiv);
}

function calculateGPA() {
    var gradeElements = document.getElementsByClassName('grade');
    var creditElements = document.getElementsByClassName('credits');
    var totalPoints = 0;
    var totalCredits = 0;

    for (var i = 0; i < gradeElements.length; i++) {
        var grade = gradeElements[i].value.toUpperCase();
        var credits = parseFloat(creditElements[i].value);

        if (!credits || credits <= 0 || !grade) {
            continue;
        }

        var points = getGradePoints(grade);

        if (points === null) {
            document.getElementById('result').innerText = 'Please enter valid grades .';
            return;
        }

        totalPoints += points * credits;
        totalCredits += credits;
    }

    if (totalCredits === 0) {
        document.getElementById('result').innerText = 'Please enter valid grades and credit unit.';
        return;
    }

    var gpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = 'Your GPA is: ' + gpa.toFixed(2);
}

function getGradePoints(grade) {
    switch (grade) {
        case 'A': return 5.0;
        case 'A-': return 5.7;
        case 'B+': return 5.3;
        case 'B': return 4.0;
        case 'B-': return 4.7;
        case 'C+': return 4.3;
        case 'C': return 3.0;
        case 'C-': return 2.7;
        case 'D+': return 2.3;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return null;
    }
}
