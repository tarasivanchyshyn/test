import Button from '../../Button/Button';
import classes from './ConfirmModal.module.scss';

function ConfirmModal({ onClose, onDelete }) {
  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <h2 className={classes.header}>Do you want to delete the product?</h2>
        <div className={classes.actions}>
          <Button style={{ width: '4rem' }} onClick={onDelete}>
            Yes
          </Button>
          <Button style={{ width: '4rem' }} secondary onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
