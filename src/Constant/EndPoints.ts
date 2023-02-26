import { REACT_APP_BACKEND_API_PROXY} from '../config/'

const API_CONSTANT = {
    STUDENT_REGISTER: `${REACT_APP_BACKEND_API_PROXY}/student/register`,
    STUDENT_LOGIN: `${REACT_APP_BACKEND_API_PROXY}/student/login`,
    STUDENT_PROFILE: `${REACT_APP_BACKEND_API_PROXY}/student/profile`,
    STUDENT_UPDATE: `${REACT_APP_BACKEND_API_PROXY}/student/update`,
    CHANGE_PASSWORD: `${REACT_APP_BACKEND_API_PROXY}/student/changePassword`,
    GET_FINE_LIST: `${REACT_APP_BACKEND_API_PROXY}/fine/ger`,


    // Staff
    STAFF_LOGIN: `${REACT_APP_BACKEND_API_PROXY}/staff/login`,
    GET_ALL_FINE_LIST:`${REACT_APP_BACKEND_API_PROXY}/fine/get`
};

export {
    API_CONSTANT
}