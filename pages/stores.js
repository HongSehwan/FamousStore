import storeStyles from "../styles/stores.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Stores = () => {
    const [storeImg, setStoreImg] = useState(null);
    useEffect(() => {
        axios
            .get(`http://localhost:9000/stores`)
            .then((res) => {
                if (res) {
                    setStoreImg(res.data);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, []);
    return (
        <div className={storeStyles.container}>
            <div className={storeStyles.layout}>
                <div className={storeStyles.title}>
                    <p className={storeStyles.layoutText}>S</p>
                    <p className={storeStyles.layoutText}>T</p>
                    <p className={storeStyles.layoutText}>O</p>
                    <p className={storeStyles.layoutText}>R</p>
                    <p className={storeStyles.layoutText}>E</p>
                </div>
                <div>
                    {storeImg ? (
                        <>
                            <ul className={storeStyles.topLine}>
                                <div className={storeStyles.lineBox}>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.firstBox}>
                                            <img className={storeStyles.img} src={storeImg[0].image} alt="Image One" />
                                            <p className={storeStyles.text}>{storeImg[0].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.secondBox}>
                                            <img className={storeStyles.img} src={storeImg[1].image} alt="Image Two" />
                                            <p className={storeStyles.text}>{storeImg[1].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                </div>
                                <div className={storeStyles.lineBox}>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.thirdBox}>
                                            <img className={storeStyles.img} src={storeImg[2].image} alt="Image Three" />
                                            <p className={storeStyles.text}>{storeImg[2].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.fourthBox}>
                                            <img className={storeStyles.img} src={storeImg[3].image} alt="Image Four" />
                                            <p className={storeStyles.text}>{storeImg[3].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                </div>
                            </ul>
                            <ul className={storeStyles.bottomLine}>
                                <div className={storeStyles.lineBox}>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.fifthBox}>
                                            <img className={storeStyles.img} src={storeImg[4].image} alt="Image Five" />
                                            <p className={storeStyles.text}>{storeImg[4].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.sixthBox}>
                                            <img className={storeStyles.img} src={storeImg[5].image} alt="Image Six" />
                                            <p className={storeStyles.text}>{storeImg[5].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                </div>
                                <div className={storeStyles.lineBox}>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.seventhBox}>
                                            <img className={storeStyles.img} src={storeImg[6].image} alt="Image Seven" />
                                            <p className={storeStyles.text}>{storeImg[6].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                    <button className={storeStyles.boxLink}>
                                        <li className={storeStyles.eighthBox}>
                                            <img className={storeStyles.img} src={storeImg[7].image} alt="Image Eight" />
                                            <p className={storeStyles.text}>{storeImg[7].name}</p>
                                            <p className={storeStyles.detail}>상세보기</p>
                                        </li>
                                    </button>
                                </div>
                            </ul>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Stores;
