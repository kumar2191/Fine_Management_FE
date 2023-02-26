import { Button } from '@mantine/core'
import { useState } from 'react'
import RegisterModal from '../Student/RegisterModal/Index'
import Student_LoginModal from '../Student/StudentLoginModal/Login'
import StaFFLoginModal from '../Staff/StaffLogin/index'
function Landing() {
    const [Register_Modal, setRegister_Modal] = useState<boolean>(false)
    const [StudentLoginModal, setStudentLogin_Modal] = useState<boolean>(false)
    const [Staff_LoginModal, setStaffLogin_Modal] = useState<boolean>(false)

    return (
        <div>
            <Button
                onClick={() => {
                    setRegister_Modal(true)
                }}
            >Register</Button>

            <Button
                onClick={() => {
                    setStudentLogin_Modal(true)
                }}
            >Login</Button>

            <Button onClick={() => {
                setStaffLogin_Modal(true)
            }}>
                Staff Login
            </Button>






            <RegisterModal
                onClose={() => {
                    setRegister_Modal(false)

                }}
                show={Register_Modal}

            />
            <Student_LoginModal
                onClose={() => {
                    setStudentLogin_Modal(false)

                }}
                show={StudentLoginModal}
            />
            <StaFFLoginModal
                onClose={() => {
                    setStaffLogin_Modal(false)

                }}
                show={Staff_LoginModal}

            />
        </div>
    )
}

export default Landing