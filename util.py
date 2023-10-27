import pickle
import json
import numpy as np

__data_columns = None
__model = None


import warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']

    global __model
    if __model is None:
        with open('./artifacts/predict_student_performance.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")


def predict_student_performance(marital_status, mode, application_order, course, attendance,
                                previous_qualification_grade, f_qualification, m_occupation, f_occupation,
                                admission_grade, displaced, debtor, tuition, gender, scholarship,
                                age_at_enrollment, curricular_units_1st_sem_enrolled,
                                curricular_units_1st_sem_evaluations,
                                curricular_units_1st_sem_approved, curricular_units_1st_sem_grade,
                                curricular_units_2nd_sem_enrolled, curricular_units_2nd_sem_evaluations,
                                curricular_units_2nd_sem_approved, curricular_units_2nd_sem_grade,
                                curricular_units_2nd_sem_without_evaluations, gdp):

    x = np.zeros(len(__data_columns))

    x[0] = marital_status
    x[1] = mode
    x[2] = application_order
    x[3] = course
    x[4] = attendance
    x[5] = previous_qualification_grade
    x[6] = f_qualification
    x[7] = m_occupation
    x[8] = f_occupation
    x[9] = admission_grade
    x[10] = displaced
    x[11] = debtor
    x[12] = tuition
    x[13] = gender
    x[14] = scholarship
    x[15] = age_at_enrollment
    x[16] = curricular_units_1st_sem_enrolled
    x[17] = curricular_units_1st_sem_evaluations
    x[18] = curricular_units_1st_sem_approved
    x[19] = curricular_units_1st_sem_grade
    x[20] = curricular_units_2nd_sem_enrolled
    x[21] = curricular_units_2nd_sem_evaluations
    x[22] = curricular_units_2nd_sem_approved
    x[23] = curricular_units_2nd_sem_grade
    x[24] = curricular_units_2nd_sem_without_evaluations
    x[25] = gdp

    return __model.predict([x])[0]


if __name__ == "__main__":
    load_saved_artifacts()
    print (__data_columns)
    print(predict_student_performance(0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0,0, 0, 0, 0,0, 0, 1.74))