import { useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import "../css/BreadTimeModal.css";

const BreadTimeModal = (props) => {
  const { open, close, bakeryData, breadData } = props;

  const viewBreadTimeTable = () => {
    if (!open) return;

    const result = [];
    result.push(
      <thead>
        <tr>
          <th>알림등록</th>
          <th>빵 이름</th>
          <th>나오는 시간</th>
          <th>가격</th>
        </tr>
      </thead>
    );
    for (let i = 0; i < breadData.length; i++) {
      result.push(
        <tr>
          <td>
            <input inline type="checkbox" />
          </td>
          <td>{breadData[i].foodName}</td>
          <td>{breadData[i].saleTime}</td>
          <td>{breadData[i].price}</td>
        </tr>
      );
    }
    return result;
  };

  return (
    //modal이 열릴 때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {bakeryData.storeName}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {/* 회사정보 */}
            <div>
              전화번호: {bakeryData.storeContact}
              <br />
              주소:{" "}
              {bakeryData.storeAddress2 !== null ||
              bakeryData.storeAddress2 !== undefined
                ? bakeryData.storeAddress1 + " " + bakeryData.storeAddress2
                : bakeryData.storeAddress1}
              <br />
              영업시간: {bakeryData.businessHour}
              <br />
              정기휴무: {bakeryData.holiday}
              <br />
              <br />
            </div>
            {/* 게시판 버튼 */}
            {bakeryData.boardSet === "T" ? <button>리뷰 게시판</button> : null}
            {/* 빵나오는 시간 */}
            <Table striped bordered size="sm">
              {viewBreadTimeTable()}
            </Table>
          </main>
          <footer>
            <button className="close" onClick={close}>
              &times;
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default BreadTimeModal;
