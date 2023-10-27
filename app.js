
function mapPerformanceLabel(value) {
    switch (value) {
        case 0:
            return "Dropout";
        case 1:
            return "Enrolled";
        case 2:
            return "Graduate";
        default:
            return "Unknown";
    }
}
function validateInputs() {
    const elementIds = [
      "uiMaritalStatus", "uiAppMode", "uiAppOrder", "uiPrevQualificationGrade", "uiCourse",
      "uiFathersQualification", "uiMothersOccupation", "uiFathersOccupation", "uiAttendance",
      "uiScholarship", "uiAdmissionGrade", "uiDisplaced", "uiDebtor", "uiTuition", "uiGender",
      "uiAgeEnrollment", "uiCurricular1stSemEnrolled", "uiCurricular1stSemEvaluations",
      "uiCurricular1stSemApproved", "uiCurricular1stSemGrade", "uiCurricular2ndSemEnrolled",
      "uiCurricular2ndSemEvaluations", "uiCurricular2ndSemApproved", "uiCurricular2ndSemGrade",
      "uiCurricular2ndSemWithoutEvaluations", "uiGDP"
    ];
  
    for (const id of elementIds) {
      const element = document.getElementById(id);
      if (element.tagName === "SELECT") {
        const selectedOption = element.options[element.selectedIndex];
        if (!selectedOption.value) {
          alert("Please make a selection for all fields");
          return false;
        }
      } else if (element.tagName === "INPUT" && !element.value.trim()) {
        alert("Please fill out all the fields");
        return false;
      }
    }
    return true;
  }

function getMaritalStatus() {
    var uiMaritalStatus = document.getElementById("uiMaritalStatus");
    var selectedOption = uiMaritalStatus.options[uiMaritalStatus.selectedIndex];
    return parseInt(selectedOption.value);
}

function getApplicationMode() {
    var uiAppMode = document.getElementById("uiAppMode");
    var selectedOption = uiAppMode.options[uiAppMode.selectedIndex];
    return parseInt(selectedOption.value);
}


function getApplicationOrder() {
  var uiAppOrder = document.getElementById("uiAppOrder");
  return parseInt(uiAppOrder.value);
}

function getPreviousQualificationGrade() {
    var uiPrevQualificationGrade = document.getElementById("uiPrevQualificationGrade");
    return parseFloat(uiPrevQualificationGrade.value);
}

function getCourse() {
    var uiCourse = document.getElementById("uiCourse");
    var selectedOption = uiCourse.options[uiCourse.selectedIndex];
    return parseInt(selectedOption.value);
}

function getFathersQualification() {
    var uiFathersQualification = document.getElementById("uiFathersQualification");
    var selectedOption = uiFathersQualification.options[uiFathersQualification.selectedIndex];
    return parseInt(selectedOption.value);
}

function getMothersOccupation() {
    var uiMothersOccupation = document.getElementById("uiMothersOccupation");
    var selectedOption = uiMothersOccupation.options[uiMothersOccupation.selectedIndex];
    return parseInt(selectedOption.value);
}

function getFathersOccupation() {
    var uiFathersOccupation = document.getElementById("uiFathersOccupation");
    var selectedOption = uiFathersOccupation.options[uiFathersOccupation.selectedIndex];
    return parseInt(selectedOption.value);
}

function getAttendance() {
    var uiAttendance = document.getElementById("uiAttendance");
    var selectedOption = uiAttendance.options[uiAttendance.selectedIndex];
    return parseInt(selectedOption.value);
}

function getScholarship() {
    var uiScholarship = document.getElementById("uiScholarship");
    var selectedOption = uiScholarship.options[uiScholarship.selectedIndex];
    return parseInt(selectedOption.value);
}

function getAdmissionGrade() {
  var uiAdmissionGrade = document.getElementById("uiAdmissionGrade");
  return parseFloat(uiAdmissionGrade.value);
}

function getDisplaced() {
    var uiDisplaced = document.getElementById("uiDisplaced");
    var selectedOption = uiDisplaced.options[uiDisplaced.selectedIndex];
    return parseInt(selectedOption.value);
}

function getDebtor() {
    var uiDebtor = document.getElementById("uiDebtor");
    var selectedOption = uiDebtor.options[uiDebtor.selectedIndex];
    return parseInt(selectedOption.value);
}

function getTuition() {
    var uiTuition = document.getElementById("uiTuition");
    var selectedOption = uiTuition.options[uiTuition.selectedIndex];
    return parseInt(selectedOption.value);
}

function getGender() {
    var uiGender = document.getElementById("uiGender");
    var selectedOption = uiGender.options[uiGender.selectedIndex];
    return parseInt(selectedOption.value);
}

function getScholarship() {
    var uiScholarship = document.getElementById("uiScholarship");
    var selectedOption = uiScholarship.options[uiScholarship.selectedIndex];
    return parseInt(selectedOption.value);
}


function getAgeEnrollment() {
  var uiAgeEnrollment = document.getElementById("uiAgeEnrollment");
  return parseInt(uiAgeEnrollment.value);
}

function getCurricular1stSemEnrolled() {
  var uiCurricular1stSemEnrolled = document.getElementById("uiCurricular1stSemEnrolled");
  return parseInt(uiCurricular1stSemEnrolled.value);
}

function getCurricular1stSemEvaluations() {
  var uiCurricular1stSemEvaluations = document.getElementById("uiCurricular1stSemEvaluations");
  return parseInt(uiCurricular1stSemEvaluations.value);
}

function getCurricular1stSemApproved() {
  var uiCurricular1stSemApproved = document.getElementById("uiCurricular1stSemApproved");
  return parseInt(uiCurricular1stSemApproved.value);
}

function getCurricular1stSemGrade() {
  var uiCurricular1stSemGrade = document.getElementById("uiCurricular1stSemGrade");
  return parseFloat(uiCurricular1stSemGrade.value);
}

function getCurricular2ndSemEnrolled() {
  var uiCurricular2ndSemEnrolled = document.getElementById("uiCurricular2ndSemEnrolled");
  return parseInt(uiCurricular2ndSemEnrolled.value);
}

function getCurricular2ndSemEvaluations() {
  var uiCurricular2ndSemEvaluations = document.getElementById("uiCurricular2ndSemEvaluations");
  return parseInt(uiCurricular2ndSemEvaluations.value);
}

function getCurricular2ndSemApproved() {
  var uiCurricular2ndSemApproved = document.getElementById("uiCurricular2ndSemApproved");
  return parseInt(uiCurricular2ndSemApproved.value);
}

function getCurricular2ndSemGrade() {
  var uiCurricular2ndSemGrade = document.getElementById("uiCurricular2ndSemGrade");
  return parseFloat(uiCurricular2ndSemGrade.value);
}

function getCurricular2ndSemWithoutEvaluations() {
  var uiCurricular2ndSemWithoutEvaluations = document.getElementById("uiCurricular2ndSemWithoutEvaluations");
  return parseInt(uiCurricular2ndSemWithoutEvaluations.value);
}

function getGDP() {
  var uiGDP = document.getElementById("uiGDP");
  return parseFloat(uiGDP.value);
}

function onClickedEstimatePerformance() {
    console.log("Estimate performance button clicked");

  if (!validateInputs()) {
    return;
  }

  var marital_status = getMaritalStatus();
  var mode = getApplicationMode();
  var application_order = getApplicationOrder();
  var course = getCourse();
  var attendance = getAttendance();
  var previous_qualification_grade = getPreviousQualificationGrade();
  var f_qualification = getFathersQualification();
  var m_occupation = getMothersOccupation();
  var f_occupation = getFathersOccupation();
  var admission_grade = getAdmissionGrade();
  var displaced = getDisplaced();
  var debtor = getDebtor();
  var tuition = getTuition();
  var gender = getGender();
  var scholarship = getScholarship();
  var age_at_enrollment = getAgeEnrollment();
  var curricular_units_1st_sem_enrolled = getCurricular1stSemEnrolled();
  var curricular_units_1st_sem_evaluations = getCurricular1stSemEvaluations();
  var curricular_units_1st_sem_approved = getCurricular1stSemApproved();
  var curricular_units_1st_sem_grade = getCurricular1stSemGrade();
  var curricular_units_2nd_sem_enrolled = getCurricular2ndSemEnrolled();
  var curricular_units_2nd_sem_evaluations = getCurricular2ndSemEvaluations();
  var curricular_units_2nd_sem_approved = getCurricular2ndSemApproved();
  var curricular_units_2nd_sem_grade = getCurricular2ndSemGrade();
  var curricular_units_2nd_sem_without_evaluations = getCurricular2ndSemWithoutEvaluations();
  var gdp = getGDP();

  var url = "http://127.0.0.1:5000/student_performance";

  $.post(url, {
    marital_status: marital_status,
    mode: mode,
    application_order: application_order,
    course: course,
    attendance: attendance,
    previous_qualification_grade: previous_qualification_grade,
    f_qualification: f_qualification,
    m_occupation: m_occupation,
    f_occupation: f_occupation,
    admission_grade: admission_grade,
    displaced: displaced,
    debtor: debtor,
    tuition: tuition,
    gender: gender,
    scholarship: scholarship,
    age_at_enrollment: age_at_enrollment,
    curricular_units_1st_sem_enrolled: curricular_units_1st_sem_enrolled,
    curricular_units_1st_sem_evaluations: curricular_units_1st_sem_evaluations,
    curricular_units_1st_sem_approved: curricular_units_1st_sem_approved,
    curricular_units_1st_sem_grade: curricular_units_1st_sem_grade,
    curricular_units_2nd_sem_enrolled: curricular_units_2nd_sem_enrolled,
    curricular_units_2nd_sem_evaluations: curricular_units_2nd_sem_evaluations,
    curricular_units_2nd_sem_approved: curricular_units_2nd_sem_approved,
    curricular_units_2nd_sem_grade: curricular_units_2nd_sem_grade,
    curricular_units_2nd_sem_without_evaluations: curricular_units_2nd_sem_without_evaluations,
    gdp: gdp
    }, function(data, status) {
        console.log(data.predicted_performance);

        var performanceValue = data.predicted_performance[0];
        var performanceLabel = mapPerformanceLabel(performanceValue);

        var performance = document.getElementById("uiEstimatedPerformance");
        performance.innerHTML = "<h2>" + performanceLabel + " </h2>";
        console.log(status);
    });
    }
  
  function onPageLoad() {
    console.log("Document loaded");
  }
  
  window.onload = onPageLoad;
  



