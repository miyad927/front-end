<template>
  <div class="mypage_cont">
    <div class="mypage_product_list">
      <div class="mypage_zone_tit">
        <h3>내 상품 리스트</h3>
      </div>
      <div class="mypage_table_type">
        <form
          id="frmProduct"
          name="frmProduct"
          method="post"
          target="ifrmProcess"
        >
          <input type="hidden" name="mode" value="" />
          <input type="hidden" name="isCart" value="false" />
          <table>
            <colgroup>
              <col style="width: 20%" />
              <col style="width: 7%" />
              <col style="width: 5%" />
              <col style="width: 20%" />
              <col style="width: 10%" />
              <col style="width: 12%" />
            </colgroup>
            <thead>
              <tr>
                <th>상품명</th>
                <th>상품금액</th>
                <th>재고</th>
                <th>상품설명</th>
                <th>카테고리</th>
                <th>수정/삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="pick_add_cont">
                    <img
                      src="https://godomall.speedycdn.net/ec5d2a1c8483712efb957784c858b320/goods/1000008350/image/list/1000008350_list_082.jpg"
                      alt="한우대창 순살곱도리탕 490g"
                      width="100"
                    />
                    <div class="pick_add_info">
                      <a href="../goods/goods_view.php?goodsNo=1000008350">
                        <em>한우대창 순살곱도리탕 490g</em>
                      </a>
                    </div>
                  </div>
                </td>
                <td><strong>16,900</strong><em>원</em></td>
                <td><strong>19개</strong></td>
                <td>
                  <em>한우 대창과 순살 고기, 매운 양념으로 만든 탕</em>
                </td>
                <td><strong>한식</strong></td>
                <td>
                  <a href="#" class="btn_product_cart"><em>수정하기</em></a>
                  <a href="#" class="btn_product_del"><em>삭제하기</em></a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="pick_add_cont">
                    <img
                      src="https://godomall.speedycdn.net/ec5d2a1c8483712efb957784c858b320/goods/1000002188/image/list/1000002188_list_083.jpg"
                      alt="베샤멜 고르곤졸라 씬크러스트 피자 346g_(10인치)"
                      width="100"
                    />
                    <div class="pick_add_info">
                      <a href="../goods/goods_view.php?goodsNo=1000002188">
                        <em>베샤멜 고르곤졸라 씬크러스트 피자 346g_(10인치)</em>
                      </a>
                    </div>
                  </div>
                </td>
                <td><strong>10,000</strong><em>원</em></td>
                <td><strong>12개</strong></td>
                <td>
                  <em>고르곤졸라 치즈와 베샤멜 소스가 조화를 이루는 피자</em>
                </td>
                <td><strong>양식</strong></td>
                <td>
                  <a href="#" class="btn_product_cart"><em>수정하기</em></a>
                  <a href="#" class="btn_product_del"><em>삭제하기</em></a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="pick_add_cont">
                    <img
                      src="https://godomall.speedycdn.net/ec5d2a1c8483712efb957784c858b320/goods/1000002179/image/list/1000002179_list_07.jpg"
                      alt="김치어묵우동 740g"
                      width="100"
                    />
                    <div class="pick_add_info">
                      <a href="../goods/goods_view.php?goodsNo=1000002179">
                        <em>김치어묵우동 740g</em>
                      </a>
                    </div>
                  </div>
                </td>
                <td><strong>10,500</strong><em>원</em></td>
                <td><strong>8개</strong></td>
                <td>
                  <em>김치와 어묵이 어우러진 매콤한 우동</em>
                </td>
                <td><strong>한식</strong></td>
                <td>
                  <a href="#" class="btn_product_cart"><em>수정하기</em></a>
                  <a href="#" class="btn_product_del"><em>삭제하기</em></a>
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
}

.mypage_cont {
  margin-top: 42px;
}

.mypage_zone_tit {
  margin-bottom: 20px;
}

.mypage_table_type {
  width: 100%;
  border-collapse: collapse;
}

.mypage_table_type th,
.mypage_table_type td {
  padding: 8px 12px;
  text-align: center;
  border: 1px solid #ddd;
}

.mypage_table_type th {
  background-color: #f7f7f7;
}

.mypage_table_type td {
  color: #777;
}

.mypage_table_type td a {
  color: #00a7b3;
  text-decoration: none;
}

.mypage_table_type td .btn_product_cart,
.mypage_table_type td .btn_product_del {
  background-color: #00a7b3;
  color: white;
  padding: 3px 9px;
  border-radius: 5px;
  font-size: 12px;
  margin-right: 5px;
}

.mypage_zone_tit h3 {
  color: #00a7b3;
  text-align: center;
  font-size: 2rem;
}
.mypage_table_type td .btn_product_cart:hover,
.mypage_table_type td .btn_product_del:hover {
  background-color: #007a8a;
}
</style>
