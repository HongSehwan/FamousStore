import { useState } from "react";
import detailStyles from "../styles/detail.module.css";
import { Modal } from "react-bootstrap";

const Detail = ({ keyId, storeData }) => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Modal className={detailStyles.modal} size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="modal-sizes-lg">
                <Modal.Header>
                    <Modal.Title id="modal-sizes-lg">{storeData.name}</Modal.Title>
                    <button className={detailStyles.close} onClick={() => setLgShow(false)}>
                        X
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className={detailStyles.modalBox}>
                        <img className={detailStyles.modalImg} src={storeData.image} alt="Store Image"></img>
                        <p className={detailStyles.description}>{storeData.description}</p>
                    </div>
                    {storeData.url ? (
                        <>
                            <p className={detailStyles.link}>
                                홈페이지 바로가기:
                                <a style={{ color: "#1e90ff" }} href={storeData.url}>
                                    {storeData.url}
                                </a>
                            </p>
                        </>
                    ) : null}
                </Modal.Body>
            </Modal>
            <ul className={detailStyles.storeLine} key={keyId}>
                <button className={detailStyles.boxLink} onClick={() => setLgShow(true)}>
                    <li className={detailStyles.storeBox}>
                        <img className={detailStyles.img} src={storeData.image} alt="Image" />
                        <p className={detailStyles.text}>{storeData.name}</p>
                        <p className={detailStyles.detail}>상세보기</p>
                    </li>
                </button>
            </ul>
        </>
    );
};

export default Detail;
