import foto from '../../assets/foto.svg';
import eth from '../../assets/eth.svg';
import './Card.scss';
import * as Icon from 'react-feather' 

const Card = ({...props}) => {
    return (
        <>
            <div className="w-[400px] card-container">
                <img src="https://s2.glbimg.com/6fLjMPYo50gB1llNwE11EVXdf8w=/620x430/e.glbimg.com/og/ed/f/original/2022/02/21/https___hypebeast.com_image_2021_10_bored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg" alt="" className="card-photo" />

                <table className="table-container">
                    <tbody style={{ padding: '10px' }}>
                        <tr>
                            <td>ID #9214</td>
                            <td>
                                <div className="box-table">
                                    <p>RANK 321</p>
                                    <button>33%</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ESTIMATED PRICE</td>
                            <td>
                                <div className="box-table">
                                    <Icon.Menu />
                                    <span>155.17</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>LATEST PRICE</td>
                            <td>
                                <div className="box-table">
                                    <Icon.Menu />
                                    <span>155.17</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="box-table">
                                    <Icon.ArrowUp />
                                    <p>3,4% PROFIT TARGET</p>
                                </div>
                            </td>
                            <td>
                                <div className="box-table">
                                    <Icon.Menu />
                                    <span>155.17</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Card;