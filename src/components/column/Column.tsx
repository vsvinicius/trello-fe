import './Column.css'

interface ColumnProps{
    children?: React.ReactNode;
    title?: string;
}

function Column({children, title}: ColumnProps){
    return(
        <>
            <div className="column">
                <div className='cardTitle'>
                    <p className='titleCard'>
                        {title}
                    </p>
                </div>
                {children}
            </div>
        </>
    )
}

export default Column;