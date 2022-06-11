import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import errorStyles from "../styles/500error.module.css";

const Custom500 = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);
    return (
        <div className={errorStyles.error}>
            <Head>
                <title>500 에러 페이지</title>
            </Head>
            <h3 color="#fff" className={errorStyles.status}>
                500 에러
            </h3>
            <p className={errorStyles.message}>페이지를 찾을수 없습니다.</p>
        </div>
    );
};

export default Custom500;
