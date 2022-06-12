import storeStyles from "../styles/stores.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Detail from "../components/Detail";

const Stores = () => {
    const [storeData, setStoreData] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:9000/stores`)
            .then((res) => {
                if (res) {
                    setStoreData(res.data);
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
                <div className={storeStyles.storeContainer}>
                    {storeData ? (
                        <>
                            {storeData.map((store) => (
                                <Detail keyId={store.id} storeData={store} />
                            ))}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Stores;
