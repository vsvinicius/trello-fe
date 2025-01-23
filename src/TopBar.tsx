import './TopBar.css';
import Logo from './images/logo.svg';
import trello from './images/trello-mark.svg';
import bell from './images/bell.svg';
import plus from './images/plus-circle.svg'
import alert from './images/alert-circle.svg'
import profile from './images/profile.svg'

function TopBar(){
    return (
        <>
            <div className='topBar'>
                <div className='logoDiv' style={{display: 'flex'}}>
                    <img src={Logo} alt="Logo" className='logo' />
                    <div className='verticalLine'></div>
                </div>
                <div className='textDiv' style={{display: 'flex'}}>
                    <img src={trello} alt="" className='trello-mark'/>
                    <p className='textBoard'>Boards</p>
                    <div className='verticalLine'></div>
                </div>
                <div className='inputDiv' style={{display: 'flex'}}>
                    <input type="search" className='input' placeholder="Search"/>
                </div>
                <div className='icons'>
                    <img src={plus} alt="Icon plus-circle" />
                    <img src={alert} alt="Icon alert-circle" />
                    <img src={bell} alt="Icon bell" />
                </div>
                <div className='profile'>
                    <img src={profile} alt="Icon profile" className='profile' />
                </div>
            </div>
            <hr />
        </>
    )
}

export default TopBar;