import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { ScaleModal as Modal } from 'boron';
import Button from 'shared/mangostrap/Button';
import { I18n } from 'utils/i18n';

import styles from './styles.scss';

class Confirm extends React.Component {
  static propTypes = {
    modalStyle: PropTypes.object,
    backdropStyle: PropTypes.object,
    buttonStyle: PropTypes.string,
    yes: PropTypes.string,
    no: PropTypes.string,
    onYesClick: PropTypes.func,
    onNoClick: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
  }

  show() {
    this.refs.modal.show();
  }

  hide() {
    this.refs.modal.hide();
  }

  handleYesClick() {
    if(this.props.onYesClick)
      this.props.onYesClick();
  }

  handleNoClick() {
    if(this.props.onNoClick){
      this.props.onNoClick();
    } else {
      this.hide();
    }
  }

  render() {
    const {
      modalStyle,
      backdropStyle,
      propContent,
      children,
      hideNo,
      yes,
      no,
      disabled,
      buttonStyle,
      enabledAddClass,
      disabledAddClass,
    } = this.props;
    const applyDisabledButtonStyle =
      buttonStyle || classNames(styles.button, styles.disabled);
    const applyEnabledButtonStyle =
      buttonStyle || classNames(styles.button, styles.enabled);

    let content = null;
    if(content) {
      content = propContent;
    } else {
      content = children;
    }

    return (
      <div className={styles.confirm}>
        <Modal modalStyle={modalStyle} backdropStyle={backdropStyle} ref='modal' closeOnClick={false}>
          <div className={styles.confirm_content}>
            {content}
          </div>

          <div className={styles.buttons}>
            <If condition={!hideNo}>
              <Button className={classNames(applyDisabledButtonStyle,
                disabledAddClass, styles.button, styles.disabled)}
                onClick={this.handleNoClick}>
                {no || I18n.t("common.btn_cancel")}
              </Button>
            </If>
            <Button className={classNames(applyEnabledButtonStyle,
              enabledAddClass, styles.button, styles.enabled)}
              disabled={disabled}
              onClick={this.handleYesClick}>
              {yes || I18n.t("common.btn_confirm")}
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Confirm;
