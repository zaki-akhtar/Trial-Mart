import { useSelector } from "react-redux"
import Modal from "./Modal"

const Card=(props)=>{
    const message=useSelector(state=>state.Ui.message);
    return <Modal onClose={props.onClose}>
        <p>{message}</p>
    </Modal>
}

export default Card