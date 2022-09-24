import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 30,
        onClick: favoritar
    }

    return (
    <div className="colaborador">
        <AiFillCloseCircle 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)} 
            size={25}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                ? <AiFillStar {...propsFavorito} color='#FFD700' /> 
                : <AiOutlineStar {...propsFavorito} />
                }
            </div>
        </div>
    </div>
    )
}

export default Colaborador