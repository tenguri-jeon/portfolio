import { useDispatch } from "react-redux";
import { DetailBtnCom } from "./styled";
import { modalon } from "../store/modules/pagingSlice";

const Detail = ({...item}) => {
    const dispatch = useDispatch()
    return (
        <DetailBtnCom onClick={()=>dispatch(modalon(item))}>
            상세내용
        </DetailBtnCom>
    );
};

export default Detail;