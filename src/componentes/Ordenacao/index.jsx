import './styles.css'

export default function Ordenacao() {
    return(
        <ul className="ordenacao">
            <li className='ordenacao__item'>
                <a>Recentes</a>
            </li>
            <li className='ordenacao__item ordenacao__item-inativo'>
                <a>Recentes</a>
            </li>
        </ul>
    )
}