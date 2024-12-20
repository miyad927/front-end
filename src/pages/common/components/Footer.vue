<script setup></script>

<template>
  <footer>
    <div class="ft_sec_1">
      <div class="ft_contents_wrap_1">
        <div class="ft_menu">
          <li><router-link to="/">회사소개</router-link></li>
          <li><router-link to="/">이용약관</router-link></li>
          <li><router-link to="/">쇼핑몰이용안내</router-link></li>
          <li>
            <router-link to="/"><strong>개인정보처리방침</strong></router-link>
          </li>
        </div>
        <div class="ft_contactus">
          <li class="market">
            <router-link to="/">입점매장 안내</router-link>
          </li>
          <li class="provider">
            <router-link to="/">상품제휴</router-link>
          </li>
          <li class="propose">
            <router-link to="/">입점신청</router-link>
          </li>
          <li class="design">
            <router-link to="/">촬영·디자인 의뢰</router-link>
          </li>
        </div>
      </div>
    </div>
    <div class="ft_sec_2">
      <div class="ft_contents_wrap_2">
        <address>
          <span class="company">주식회사 더나음</span><br />대표 :
          김선국&nbsp;&nbsp;&nbsp;&nbsp;사업자 등록번호 :
          132-86-30090&nbsp;&nbsp;&nbsp;&nbsp;통신판매업 신고 :
          제2017-별내-0243호<a
            href="https://www.ftc.go.kr/www/bizCommView.do?key=232&amp;apv_perm_no=2014399015430200442&amp;pageUnit=10&amp;searchCnd=wrkr_no&amp;searchKrwd=1328630090&amp;pageIndex=1"
            target="_blank"
            >[사업자정보확인]</a
          ><br />본사 : 경기도 남양주시 송산로339번길 4-16
          3층&nbsp;&nbsp;&nbsp;&nbsp;물류 : 경기도 남양주시 진건읍 독정로성지2길
          36-11 (진건읍)<br />고객센터 : 1599-7988&nbsp;&nbsp;&nbsp;&nbsp;팩스 :
          031-575-1722&nbsp;&nbsp;&nbsp;&nbsp;개인정보관리책임자 :
          김선국&nbsp;&nbsp;&nbsp;&nbsp;Hosting by NHNGODO<br />Copyright 2014.
          www.foodingfactory.com All rights reserved.
        </address>
        <div class="ft_sec_2_r">
          <div class="ft_cs">
            <h3>고객상담센터</h3>
            <h4>1599-7988</h4>
            <button>
              <router-link to="/"
                ><span class="eng">1:1</span> 문의하기</router-link
              >
            </button>
            <p>
              평일 10:00 ~ 18:00 (점심시간 12:00 ~ 13:00)<br />주말&nbsp;&nbsp;·&nbsp;&nbsp;공휴일
              휴무
            </p>
          </div>
          <div class="ft_account">
            <div class="accountpop">
              <div class="accountpop_box">
                <img
                  src="https://thenaum.cdn-nhncommerce.com/data/img/allnew/layout/n_all_close_fix_b.svg"
                  alt=""
                />
                <dl>
                  <dt>무통장 입금안내</dt>
                  <dd>(예금주 : 주식회사 더나음)</dd>
                </dl>
                <ul>
                  <li class="kb">
                    <span
                      >국민<span class="colon">:</span
                      ><span class="bank_num">806437-00-002480</span></span
                    >
                  </li>
                  <li class="nh">
                    <span
                      >농협<span class="colon">:</span
                      ><span class="bank_num">355-0032-4055-63</span></span
                    >
                  </li>
                  <li class="sh">
                    <span
                      >신한<span class="colon">:</span
                      ><span class="bank_num">100-030-336550</span></span
                    >
                  </li>
                  <li class="wr">
                    <span
                      >우리<span class="colon">:</span
                      ><span class="bank_num">1005-402-582801</span></span
                    >
                  </li>
                  <li class="ibk">
                    <span
                      >기업<span class="colon">:</span
                      ><span class="bank_num">003-097719-01-018</span></span
                    >
                  </li>
                </ul>
              </div>
              <div class="accountpop_bg"></div>
            </div>
            <p>무통장 입금안내</p>
            <button class="bank_pop">은행별 계좌번호</button>
          </div>
        </div>
      </div>
    </div>
    <div class="ft_sec_3">
      <div class="ft_contents_wrap_3">
        <p class="copynotice">
          주식회사 더나음이 운영하는 푸딩팩토리 홈페이지 內 이미지 및 모든
          컨텐츠 등은 저작권등록 제C-2017-012413호에 등록 되어 있으며 저작권 법
          및 콘텐츠 산업진흥법에 의해 보호받고 있습니다.<br />따라서 홈페이지
          내의 컨텐츠와 이미지를 무단 도용하여 상업적으로 이용하시는 경우 사전
          예고없이 민.형사상 책임을 물을 수 있습니다.
        </p>
        <div class="payment">
          <div>
            고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한
            PG 사의 구매안전서비스를 이용하실 수 있습니다.<br />NHN KCP
            에스크로<button>
              <router-link to="/">서비스가입사실확인</router-link>
            </button>
          </div>
          <img
            src="https://thenaum.cdn-nhncommerce.com/data/skin/front/moment/img/banner/fee4e47f3e4c529b1f2c751035a4492c_42374.gif"
            alt="KGINISIS KB국민은행 롯데택배 공정거래위원회인증 표준약관사용 COMODO"
            title="KGINISIS KB국민은행 롯데택배 공정거래위원회인증 표준약관사용 COMODO"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: left;
}

footer .ft_sec_1 {
  width: 100%;
  min-height: 2.875rem;
  background: #fbfbfb;
  border-top: 0.0625rem solid #b4b4b4;
  border-bottom: 0.0625rem solid #d6d6d6;
}

footer .ft_contents_wrap_1 {
  max-width: 78.75rem;
  width: 90%;
  margin: 0 auto;
  min-height: 2.875rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer .ft_sec_1 .ft_menu {
  display: flex;
}

.ft_sec_1 .ft_menu li:last-child:after {
  display: none;
}

footer .ft_sec_1 .ft_menu li a {
  color: #555;
  font-size: 0.9375rem;
  font-weight: 500;
  display: inline-block;
  height: 2.875rem;
  line-height: 2.875rem;
}

footer .ft_sec_1 .ft_menu li:after {
  content: "";
  display: inline-block;
  width: 0.1875rem;
  height: 0.1875rem;
  border-radius: 0.1875rem;
  background: #555;
  margin: 0 0.5rem 0.3125rem;
}

footer .ft_sec_1 .ft_contactus {
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
}

footer .ft_sec_1 .ft_contactus li a {
  color: #555;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  height: 2.875rem;
  line-height: 2.875rem;
}

footer .ft_sec_1 .ft_contactus .market a:before {
  content: "";
  display: inline-block;
  background: url(https://thenaum.cdn-nhncommerce.com/data/img/allnew/footer/n_market_offline.svg)
    no-repeat;
  width: 0.8125rem;
  height: 1.125rem;
  margin: 0.8125rem 0.375rem 0 0;
  vertical-align: top;
}

footer .ft_sec_1 .ft_contactus .provider a:before {
  content: "";
  display: inline-block;
  background: url(https://thenaum.cdn-nhncommerce.com/data/img/allnew/footer/footer_icon_pc.svg)
    no-repeat;
  width: 1.625rem;
  height: 1.1875rem;
  margin: 0.875rem 0.5rem 0 0;
  vertical-align: top;
}

footer .ft_sec_1 .ft_contactus .propose a:before {
  content: "";
  display: inline-block;
  background: url(https://thenaum.cdn-nhncommerce.com/data/img/allnew/footer/footer_icon_pc.svg)
    no-repeat;
  width: 1.4375rem;
  height: 1.125rem;
  margin: 0.8125rem 0.375rem 0 0;
  vertical-align: top;
  background-position-y: -1.1875rem;
}

footer .ft_sec_1 .ft_contactus .design a:before {
  content: "";
  display: inline-block;
  background: url(https://thenaum.cdn-nhncommerce.com/data/img/allnew/footer/footer_icon_pc.svg)
    no-repeat;
  width: 1.375rem;
  height: 1.125rem;
  margin: 0.8125rem 0.375rem 0 0;
  vertical-align: top;
  background-position-y: -2.3125rem;
}

footer .ft_sec_2 {
  width: 100%;
  min-height: 10.875rem;
}

footer .ft_sec_2 .ft_sec_2_r {
  min-width: 22.1875rem;
}

footer .ft_contents_wrap_2 {
  max-width: 78.75rem;
  width: 90%;
  margin: 0 auto;
  min-height: 10.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2.125rem 0;
  row-gap: 1rem;
}

footer .ft_sec_2 address {
  color: #555;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.25rem;
  word-break: keep-all;
}

footer .ft_sec_2 address .company {
  color: #333;
  font-size: 0.9375rem;
  font-weight: 500;
}

footer .ft_sec_2 .ft_sec_2_r .ft_cs h3 {
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
  display: inline-block;
  vertical-align: top;
  margin: 0.25rem 0 0 0;
  line-height: 1.25rem;
}

footer .ft_sec_2 .ft_sec_2_r .ft_cs h4 {
  font-family: "Open Sans";
  font-size: 1.5rem;
  color: #ff7400;
  font-weight: 700;
  display: inline-block;
  vertical-align: top;
  margin: 0.0625rem 0 0 0.5rem;
  line-height: 1.5rem;
}

footer .ft_sec_2 .ft_sec_2_r .ft_cs button {
  width: 7rem;
  height: 1.4375rem;
  border: 0.0625rem solid #c5c5c5;
  box-sizing: border-box;
  margin: 0.125rem 0 0 0.6875rem;
}

footer .ft_sec_2 .ft_sec_2_r .ft_cs button a {
  font-size: 0.6875rem;
  font-weight: 500;
  color: #707070;
  display: inline-block;
  width: 6.875rem;
  height: 1.3125rem;
  line-height: 1.375rem;
}

footer .ft_sec_2 .ft_sec_2_r .ft_cs button a .eng {
  font-family: "Open Sans";
  font-weight: 600;
}

footer .ft_sec_2 .ft_sec_2_r .ft_cs p {
  font-size: 0.875rem;
  font-weight: 400;
  color: #555;
  line-height: 1.25rem;
  margin: 0.5625rem 0 0 0;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account {
  border-top: 0.0625rem solid #ddd;
  padding: 0.8125rem 0 0 0;
  margin: 0.6875rem 0 0 0;
  position: relative;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop {
  display: none;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop .accountpop_box {
  width: 14.5625rem;
  height: 14.3125rem;
  background: #fff;
  border-radius: 0.1875rem;
  position: absolute;
  left: 0.1875rem;
  bottom: -1rem;
  z-index: 100;
  padding: 0 1.375rem;
  box-sizing: border-box;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop .accountpop_box img {
  width: 0.9375rem;
  height: 0.875rem;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  cursor: pointer;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop .accountpop_box dl {
  margin: 1.8125rem 0 0 0;
  border-bottom: 0.0625rem solid #000;
  padding: 0 0 0.75rem 0;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop .accountpop_box dl dt {
  font-size: 1.125rem;
  font-weight: 500;
  color: #222;
  line-height: 1.125rem;
}
footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop .accountpop_box dl dd {
  font-size: 0.75rem;
  font-weight: 500;
  color: #3b3b3b;
  margin: 0.4375rem 0 0 0;
  line-height: 0.75rem;
}

footer .ft_sec_2 .ft_sec_2_r .ft_account .accountpop .accountpop_box ul li {
  margin: 0.625rem 0 0 0;
  line-height: 0.8125rem;
}
footer .ft_sec_2 .ft_sec_2_r .ft_account p {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #555;
  display: inline-block;
  vertical-align: top;
  margin: 0.3125rem 0 0 0;
  letter-spacing: -0.05em;
  line-height: 0.9375rem;
}
footer
  .ft_sec_2
  .ft_sec_2_r
  .ft_account
  .accountpop
  .accountpop_box
  ul
  li:first-child {
  margin: 1.0625rem 0 0 0;
}

footer
  .ft_sec_2
  .ft_sec_2_r
  .ft_account
  .accountpop
  .accountpop_box
  ul
  li
  span {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #3b3b3b;
  line-height: 0.8125rem;
}
footer
  .ft_sec_2
  .ft_sec_2_r
  .ft_account
  .accountpop
  .accountpop_box
  ul
  li
  span
  .colon {
  margin: 0 0.1875rem 0 0.375rem;
}

footer
  .ft_sec_2
  .ft_sec_2_r
  .ft_account
  .accountpop
  .accountpop_box
  ul
  li
  span
  .bank_num {
  font-family: "Open Sans";
}

footer .ft_sec_2 .ft_sec_2_r .ft_account button {
  width: 7rem;
  height: 1.4375rem;
  border: 0.0625rem solid #c5c5c5;
  box-sizing: border-box;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #707070;
  line-height: 1.4375rem;
  margin: 0 0 0 0.5rem;
}

footer .ft_sec_3 {
  width: 100%;
  min-height: 11rem;
  background: #363636;
}

footer .ft_contents_wrap_3 {
  max-width: 78.75rem;
  width: 90%;
  margin: 0 auto;
  min-height: 11rem;
  padding: 1.25rem 0 0 0;
  box-sizing: border-box;
}

footer .ft_sec_3 p {
  max-width: 78.75rem;
  width: 100%;
  min-height: 4.3125rem;
  background: #2a2a2a;
  color: #fff;
  padding: 1.0625rem 1.625rem;
  box-sizing: border-box;
  font-size: 0.8125rem;
  font-weight: 300;
  line-height: 1.125rem;
}

footer .ft_sec_3 .payment {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer .ft_sec_3 .payment > div {
  color: #afafaf;
  margin: 1.1875rem 0 0 0.0625rem;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.1875rem;
}
footer .ft_sec_3 .payment > div button {
  width: 7rem;
  height: 1.1875rem;
  border: 0.0625rem solid #6a6a6a;
  box-sizing: border-box;
  margin: 0 0 0.125rem 0.25rem;
}

footer .ft_sec_3 .payment > div button a {
  color: #cfcfcf;
  font-size: 0.6875rem;
  display: inline-block;
  width: 6.875rem;
  height: 1.0625rem;
  vertical-align: top;
  line-height: 1.1875rem;
}

footer .ft_sec_3 .payment img {
  max-width: 100%;
}

@media (min-width: 1200px) {
  footer .ft_sec_2 .ft_sec_2_r {
    width: 31.75rem;
  }
}

@media (max-width: 1024px) {
  footer .ft_sec_2 .ft_sec_2_r .ft_account {
    border-top: unset;
    padding: unset;
  }
}
</style>
