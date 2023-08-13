classCount = 1;
const grades = [
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
  "F",
];
function addClass() {
  classCount++;

  const brk = document.createElement("br");
  brk.id = "break" + classCount;
  document.getElementById("classgrades").appendChild(brk);

  const newClass = document.createElement("label");
  newClass.innerText = "Class " + classCount + " Grade: ";
  newClass.for = "grade" + classCount;
  newClass.id = "grade" + classCount + "label";
  document.getElementById("classgrades").appendChild(newClass);

  const selector = document.createElement("select");
  selector.name = "grade" + classCount;
  selector.id = "grade" + classCount;
  document.getElementById(newClass.id).appendChild(selector);
  for (let i = 0; i < grades.length; i++) {
    const newGradeVal = document.createElement("option");
    newGradeVal.id = "gradeLetter" + classCount;
    newGradeVal.innerText = grades[i];
    document.getElementById(selector.id).appendChild(newGradeVal);
  }
  const newWeight = document.createElement("label");
  newWeight.innerText = " Weight: ";
  newWeight.for = "weight" + classCount;
  newWeight.id = "weight" + classCount;
  document.getElementById("classgrades").appendChild(newWeight);

  const weightNumber = document.createElement("input");
  weightNumber.type = "number";
  weightNumber.id = "weightNum" + classCount;
  document
    .getElementById("weight" + classCount)
    .appendChild(weightNumber);
}
function removeClass() {
  if (classCount > 1) {
    document.getElementById("break" + classCount).remove();
    document.getElementById("grade" + classCount).remove();
    document.getElementById("grade" + classCount + "label").remove();
    document.getElementById("weightNum" + classCount).remove();
    document.getElementById("weight" + classCount).remove();

    classCount--;
  }
}
function calculateGPA() {
  const gradeVals = new Map();
  for (let i = 0; i < 12; i++) {
    gradeVals.set(
      document.getElementById(grades[i]).id,
      parseFloat(document.getElementById(grades[i]).innerHTML)
    );
  }
  let gpa = 0;
  let weightTotal = 0;
  for (let i = 1; i <= classCount; i++) {
    selectElement1 = document.getElementById("grade" + i);
    letter = selectElement1.value;
    selectElement2 = document.getElementById("weightNum" + i);
    weight = parseInt(selectElement2.value);
    gpa += gradeVals.get(letter) * weight;
    weightTotal += weight;
  }
  gpa = gpa / weightTotal;
  gpa = gpa.toFixed(2);
  if (isNaN(gpa)) {
    alert("Error -- Please complete all fields.");
  } else {
    document.getElementById("output").textContent = "GPA: " + gpa;
  }
}