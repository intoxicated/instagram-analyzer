import React from "react";
import styles from "./styles.scss";
import {I18n} from "utils/i18n";

class LoadingIndicator extends React.Component {
    render() {
        const {
            message,
        } = this.props;

        const loadingMessage = message || I18n.t('kiosk.loading_msg');

        return (
            <div className={styles.loading_container}>
                <p className={styles.loading_text}>
                    {loadingMessage}
                </p>
                <div className={styles.loading_dots_container}>
                    <div className={styles.loading_dot}/>
                    <div className={styles.loading_dot}/>
                    <div className={styles.loading_dot}/>
                    <div className={styles.loading_dot}/>
                    <div className={styles.loading_dot}/>
                </div>
            </div>
        );
    }
}

export default LoadingIndicator;
