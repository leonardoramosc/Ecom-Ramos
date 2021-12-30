import { Modal } from "react-bootstrap";
import './orderInfoModal.css';

const OrderInfoModal = ({ orderId, ...otherProps }) => {
  return (
    <Modal
      {...otherProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="moda-title">
          Compra Exitosa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tu id de compra es: <span className="order-id">{orderId}</span>.
        Guárdalo en caso de reclamo.
        <h4 style={{'marginTop': '25px'}}>Gracias por elegirnos!</h4>
      </Modal.Body>
    </Modal>
  );
};

export default OrderInfoModal;
