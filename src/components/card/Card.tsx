import './Card.css';
import message from '../../images/message.svg'
import heart from '../../images/heart.svg';
import clip from '../../images/clip.svg';
import Label from '../label/Label';

function Card(){
    return(
            <div className="rectangle">
                <div style={{ display: 'flex' }}>
                    <Label color='yellow'/>
                    <Label color='green'/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <div className='title'><p>Título adicionado aqui</p></div>
                    <div className='text'><p>Conteúdo adicionado aqui</p></div>
                    <div className='symbol'>
                        <img src={message} alt="message" />
                        <img src={heart} alt="heart" />
                        <img src={clip} alt="clip" />
                    </div>
                </div>
            </div>
    )
}

export default Card;