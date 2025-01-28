import './Card.css';
import message from '../../images/message.svg'
import heart from '../../images/heart.svg';
import clip from '../../images/clip.svg';
import Label from '../label/Label';

interface TitleProps{
    title?: string;
    content?: string;
    labelColors?: string[];
}

function Card({content,title, labelColors=[]}: TitleProps ){

    const labels = labelColors.map((labelColor) => <Label color={labelColor} key={labelColor}/> );

    return(
            <div className="rectangle">
                <div style={{ display: 'flex' }}>
                    {labels}
                </div>
                <div style={{marginTop: '20px'}}>
                    <div className='title'><p>{title}</p></div>
                    <div className='text'><p>{content}</p></div>
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