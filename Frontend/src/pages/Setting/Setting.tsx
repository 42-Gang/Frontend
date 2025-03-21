import { useNavigate } from 'react-router-dom'
import Button_Back from '../../assets/image/Button_Back.svg'
import ProfileAvatarSection from '../../components/Setting/ProfileAvatarSection'
import UserInformation from '../../components/Setting/UserInformation'

const Setting = () => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/Home')
    }

    return (
        <div className="bg-black w-[800px] h-[600px]">
            {/* 뒤로 가기 버튼 */}
            <button className="font-['Sixtyfour-Regular'] text-white text-2xl">
                <img
                    className="absolute top-[2px] left-[2px] cursor-pointer"
                    src={Button_Back}
                    onClick={handleBackClick}
                />
            </button>
            {/* 페이지 이름 */}
            <h1 className="font-['Sixtyfour-Regular'] text-white text-4xl flex justify-center mt-[30px]">
                Setting
            </h1>
            {/* 프로필 아바타 영역 */}
            <ProfileAvatarSection/>
            <UserInformation/>
        </div>
    )
}

export default Setting