import './Nav.css'

import { Link } from 'react-router-dom'

function Nav(){
    return(
        <nav className='Nav'>
            <Link to="/test-1">Teste 1</Link>
            <Link to="/test-2">Teste 2</Link>
            <Link to="/test-3">Teste 3</Link>
        </nav>
    )
}

export default Nav