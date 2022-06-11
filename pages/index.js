import homeStyles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

export default function Home() {
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
        <Carousel pause={false} indicators={false}>
            <Carousel.Item>
                <img src="/Images/food_image.png" alt="First slide" />
                <Carousel.Caption>
                    <h3 className={homeStyles.text}>맛집 소개 홈페이지에 오신 걸 환영합니다.</h3>
                    <p className={homeStyles.description}>유명한 맛집을 한눈에 알아볼 수 있는 공간 AWESOME FOOD STORE입니다.</p>
                    <a style={{ color: "#0984e3" }} href="/stores">
                        <p>Store 상세 정보 확인하기</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ background: "url(/Images/wood_board.png)" }}>
                {storeImg ? (
                    <>
                        <div className={homeStyles.info}>
                            <div className={homeStyles.firstBox}>
                                <img className={homeStyles.topImg} src={storeImg[0].image} alt="Image One" />
                                <img className={homeStyles.topImg} style={{ marginLeft: "2vw" }} src={storeImg[1].image} alt="Image Two" />
                            </div>
                            <div className={homeStyles.secondBox}>
                                <img
                                    className={homeStyles.topImg}
                                    style={{ marginLeft: "2vw" }}
                                    src={storeImg[2].image}
                                    alt="Image Three"
                                />
                                <img className={homeStyles.topImg} style={{ marginLeft: "2vw" }} src={storeImg[3].image} alt="Image Four" />
                            </div>
                        </div>
                        <div className={homeStyles.info}>
                            <div className={homeStyles.thirdBox}>
                                <img className={homeStyles.bottomImg} src={storeImg[4].image} alt="Image Five" />
                                <img
                                    className={homeStyles.bottomImg}
                                    style={{ marginLeft: "2vw" }}
                                    src={storeImg[5].image}
                                    alt="Image Six"
                                />
                            </div>
                            <div className={homeStyles.fourthBox}>
                                <img
                                    className={homeStyles.bottomImg}
                                    style={{ marginLeft: "2vw" }}
                                    src={storeImg[6].image}
                                    alt="Image Seven"
                                />
                                <img
                                    className={homeStyles.bottomImg}
                                    style={{ marginLeft: "2vw" }}
                                    src={storeImg[7].image}
                                    alt="Image Eight"
                                />
                            </div>
                        </div>
                    </>
                ) : null}
                <Carousel.Caption>
                    <h3 className={homeStyles.text}>한 끼도 우아하게, 맛집 리스트 모아보기</h3>
                    <a className={homeStyles.detail} href="/stores">
                        <p>Store 상세 정보 확인하기</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
