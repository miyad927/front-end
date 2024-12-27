<script setup></script>

<template>
  <div class="mypage_cont">
    <div class="mypage_order_list">
      <div class="mypage_zone_tit">
        <h3>주문 내역</h3>
      </div>
      <div class="mypage_table_type">
        <form id="frmOrder" name="frmOrder" method="post" target="ifrmProcess">
          <input type="hidden" name="mode" value="" />
          <input type="hidden" name="isCart" value="false" />
          <table>
            <colgroup>
              <col style="width: 10%" />
              <col style="width: 30%" />
              <col style="width: 10%" />
              <col style="width: 7%" />
              <col style="width: 10%" />
              <col style="width: 10%" />
              <col style="width: 19%" />
            </colgroup>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>상품명</th>
                <th>상품금액</th>
                <th>수량</th>
                <th>결제상태</th>
                <th>결제수단</th>
                <th>주문상세/배송등록</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ord1</td>
                <td>
                  <div class="pick_add_cont">
                    <img
                      src="https://godomall.speedycdn.net/ec5d2a1c8483712efb957784c858b320/goods/1000008350/image/list/1000008350_list_082.jpg"
                      alt="한우대창 순살곱도리탕 490g"
                    />
                    <div class="pick_add_info">
                      <a href="../goods/goods_view.php?goodsNo=1000008350"
                        ><em>한우대창 순살곱도리탕 490g</em></a
                      >
                    </div>
                  </div>
                </td>
                <td><strong>16,900</strong><em>원</em></td>
                <td><strong>1개</strong></td>
                <td><strong>결제완료</strong></td>
                <td><strong>신용카드</strong></td>
                <td>
                  <div class="btn_box">
                    <a href="#" class="order_details"><em>주문상세</em></a>
                    <a href="#" class="btn_shipping_register"
                      ><em>배송등록</em></a
                    >
                  </div>
                </td>
              </tr>

              <tr>
                <td>ord2</td>
                <td>
                  <div class="pick_add_cont">
                    <img
                      src="https://godomall.speedycdn.net/ec5d2a1c8483712efb957784c858b320/goods/1000002188/image/list/1000002188_list_083.jpg"
                      alt="베샤멜 고르곤졸라 씬크러스트 피자 346g_(10인치)"
                    />
                    <div class="pick_add_info">
                      <a href="../goods/goods_view.php?goodsNo=1000002188"
                        ><em
                          >베샤멜 고르곤졸라 씬크러스트 피자 346g_(10인치)</em
                        ></a
                      >
                    </div>
                  </div>
                </td>
                <td><strong>10,000</strong><em>원</em></td>
                <td><strong>2개</strong></td>
                <td><strong>결제대기</strong></td>
                <td><strong>카카오페이</strong></td>
                <td>
                  <div class="btn_box">
                    <a href="#" class="order_details"><em>상세보기</em></a>
                    <a href="#" class="btn_shipping_register"
                      ><em>배송등록</em></a
                    >
                  </div>
                </td>
              </tr>

              <tr>
                <td>order3</td>
                <td>
                  <div class="pick_add_cont">
                    <img
                      src="https://godomall.speedycdn.net/ec5d2a1c8483712efb957784c858b320/goods/1000002179/image/list/1000002179_list_07.jpg"
                      alt="김치어묵우동 740g"
                    />
                    <div class="pick_add_info">
                      <a href="../goods/goods_view.php?goodsNo=1000002179"
                        ><em>김치어묵우동 740g</em></a
                      >
                    </div>
                  </div>
                </td>
                <td><strong>10,500</strong><em>원</em></td>
                <td><strong>3개</strong></td>
                <td><strong>결제완료</strong></td>
                <td><strong>계좌이체</strong></td>
                <td>
                  <div class="btn_box">
                    <a href="#" class="order_details"><em>상세보기</em></a>
                    <a href="#" class="btn_shipping_register"
                      ><em>배송등록</em></a
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.mypage_cont {
  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.mypage_order_list {
  width: 90%;
  max-width: 1200px;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.mypage_zone_tit h3 {
  font-size: 28px;
  margin-bottom: 30px;
}

.mypage_table_type {
  width: 100%;
  border-collapse: collapse;
}

.mypage_table_type th,
.mypage_table_type td {
  padding: 15px;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 16px;
}

.mypage_table_type th {
  background-color: #f7f7f7;
  font-size: 18px;
}

.mypage_table_type td {
  color: #777;
}

.mypage_table_type td .order_details,
.mypage_table_type td .btn_shipping_register {
  background-color: #00a7b3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  margin: 5px 0;
}

.mypage_table_type td .btn_shipping_register {
  background-color: #00a7b3;
}

.mypage_table_type img {
  width: 150px;
  height: auto;
}

.mypage_table_type colgroup col:nth-child(7) {
  width: 40%;
}

.mypage_table_type td .btn_box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}
.mypage_zone_tit h3 {
  text-align: center;
  color: #00a7b3;
  margin-bottom: 50px;
}
.mypage_table_type img {
  width: 100px;
  height: auto;
}

.mypage_table_type th,
.mypage_table_type td {
  padding: 10px;
  font-size: 14px;
}

.mypage_table_type th {
  font-size: 16px;
}

.mypage_table_type td .order_details,
.mypage_table_type td .btn_shipping_register {
  padding: 3px 9px;
  font-size: 12px;
}

.mypage_table_type td .order_details:hover,
.mypage_table_type td .btn_shipping_register:hover {
  background-color: #007a85;
  transition: background-color 0.3s ease;
}
</style>
