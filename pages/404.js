import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import errorStyles from "../styles/404error.module.css";

const Custom404 = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);
    return (
        <div className={errorStyles.error}>
            <Head>
                <title>404 에러 페이지</title>
            </Head>
            <h3 color="#fff" className={errorStyles.text}>
                404 ERROR
            </h3>
            <img className={errorStyles.status} src="/Images/error404.png" alt="404 Error" />
            <p className={errorStyles.message}>페이지를 찾을 수 없습니다.</p>
            <p className={errorStyles.message}>5초 후 메인 페이지로 이동됩니다.</p>
        </div>
    );
};

export default Custom404;
