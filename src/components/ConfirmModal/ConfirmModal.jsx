import classes from './ConfirmModal.module.scss';

function ConfirmModal({ onClose, onDelete }) {
  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <h2 className={classes.header}>Do you want to delete the product?</h2>
        <div className={classes.actions}>
          <button type='button' className={classes.button} onClick={onDelete}>
            Yes
          </button>
          <button
            type='button'
            className={classes.buttonCancel}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
