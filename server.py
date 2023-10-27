from flask import Flask, request, jsonify
import util
import numpy as np

app = Flask(__name__)


@app.route('/student_performance', methods=['POST'])
def student_performance():
    if request.is_json:
        data = request.json
    else:
        data = request.form

    marital_status = int(data['marital_status'])
    mode = int(data['mode'])
    application_order = int(data['application_order'])
    course = int(data['course'])
    attendance = int(data['attendance'])
    previous_qualification_grade = float(data['previous_qualification_grade'])
    f_qualification = int(data['f_qualification'])
    m_occupation = int(data['m_occupation'])
    f_occupation = int(data['f_occupation'])
    admission_grade = float(data['admission_grade'])
    displaced = int(data['displaced'])
    debtor = int(data['debtor'])
    tuition = int(data['tuition'])
    gender = int(data['gender'])
    scholarship = int(data['scholarship'])
    age_at_enrollment = int(data['age_at_enrollment'])
    curricular_units_1st_sem_enrolled = int(data['curricular_units_1st_sem_enrolled'])
    curricular_units_1st_sem_evaluations = int(data['curricular_units_1st_sem_evaluations'])
    curricular_units_1st_sem_approved = int(data['curricular_units_1st_sem_approved'])
    curricular_units_1st_sem_grade = float(data['curricular_units_1st_sem_grade'])
    curricular_units_2nd_sem_enrolled = int(data['curricular_units_2nd_sem_enrolled'])
    curricular_units_2nd_sem_evaluations = int(data['curricular_units_2nd_sem_evaluations'])
    curricular_units_2nd_sem_approved = int(data['curricular_units_2nd_sem_approved'])
    curricular_units_2nd_sem_grade = float(data['curricular_units_2nd_sem_grade'])
    curricular_units_2nd_sem_without_evaluations = int(data['curricular_units_2nd_sem_without_evaluations'])
    gdp = float(data['gdp'])

    predicted_performance = util.predict_student_performance(
        marital_status, mode, application_order, course, attendance,
        previous_qualification_grade, f_qualification, m_occupation, f_occupation,
        admission_grade, displaced, debtor, tuition, gender, scholarship,
        age_at_enrollment, curricular_units_1st_sem_enrolled,
        curricular_units_1st_sem_evaluations, curricular_units_1st_sem_approved, curricular_units_1st_sem_grade,
        curricular_units_2nd_sem_enrolled, curricular_units_2nd_sem_evaluations,
        curricular_units_2nd_sem_approved, curricular_units_2nd_sem_grade,
        curricular_units_2nd_sem_without_evaluations, gdp)

    if isinstance(predicted_performance, (list, np.ndarray)):
        predicted_performance_list = [float(i) if isinstance(i, (float, np.float64)) else int(i) for i in
                                      predicted_performance]
    else:
        predicted_performance_list = [int(predicted_performance)] if isinstance(predicted_performance, np.int64) else [
            float(predicted_performance)]

    response = jsonify({
        'predicted_performance': predicted_performance_list
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


@app.errorhandler(400)
def bad_request(e):
    return "Bad Request: " + str(e), 400


@app.errorhandler(500)
def internal_server_error(e):
    return "Internal Server Error: " + str(e), 500


if __name__ == "__main__":
    print("Starting python Flask Server For Student Prediction...")
    util.load_saved_artifacts()
    app.run()