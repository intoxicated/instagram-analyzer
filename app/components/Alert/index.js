import React, { PropTypes } from 'react';

import styles from './styles.scss';

import Button from 'shared/mangostrap/Button';
import { ScaleModal as Modal } from 'boron';
import { I18n } from 'utils/i18n';

export default class Alert extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    modalStyle: PropTypes.object,
    buttonTitle: PropTypes.string,
    buttonStyle: PropTypes.string,
    handleButtonClick: PropTypes.func,
  }

  show() {
    this.refs.modal.show();
  }

  hide() {
    this.refs.modal.hide();
  }

  ButtonClick() {
    if(this.props.handleButtonClick){
      this.props.handleButtonClick();
    }

    this.hide();
  }

  render() {
    let content = null;
    if(this.props.content) {
      content = this.props.content;
    } else {
      content = this.props.children;
    }
    const buttonTitle = this.props.buttonTitle || I18n.t("common.btn_confirm");
    return (
      <Modal
        modalStyle={this.props.modalStyle} 
        ref='modal'
        closeOnClick={false}>
        {content}

        <div className={styles.buttons}>
          <Button className={this.props.buttonStyle || styles.button}
            onClick={()=>{this.ButtonClick();}}>
            {buttonTitle}
          </Button>
        </div>
      </Modal>
    );
  }
}
