import footerStyles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <div className={footerStyles.container}>
            <p className={footerStyles.text}>&copy; {new Date().getFullYear()} Hong-Sehwan. All rights reserved.</p>
        </div>
    );
};

export default Footer;
