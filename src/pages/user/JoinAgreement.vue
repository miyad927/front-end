<script setup></script>
<template>
  <div class="container">
    <div class="main">
      <div class="location_wrap">
        <div class="location_cont">
          <em
            ><a href="/" class="local_home">HOME</a> &gt; 회원가입 &gt; 가입방법
            선택</em
          >
        </div>
      </div>
      <div class="content_wrap">
        <div class="member_wrap">
          <div class="member_tit">
            <h2>회원가입</h2>
          </div>
          <div class="join_tit">
            푸딩팩토리 회원가입하고<br />할인, 이벤트 등 다양한 혜택을
            만나보세요!
          </div>
          <div class="member_cont">
            <div class="member_login_box">
              <a
                href="#"
                class="js_btn_kakao_login"
                data-kakao-type="join_method"
                data-return-url="/member/join_method.php"
              >
                <span class="left">
                  <img
                    src="https://thenaum.cdn-nhncommerce.com/data/skin/front/moment/img/member/icon_kakao.png"
                    alt="카카오"
                  />
                  <span> 카카오톡 회원가입</span>
                </span>
                <img
                  src="https://thenaum.cdn-nhncommerce.com/data/img/allnew/layout/arrow_right_b.svg"
                  class="right_arrow"
                />
              </a>
              <a
                href="#"
                class="js_btn_naver_login"
                data-naver-type="join_method"
                data-naver-url=""
              >
                <span class="left">
                  <img
                    src="https://thenaum.cdn-nhncommerce.com/data/skin/front/moment/img/member/icon_naver.png"
                    alt="네이버"
                  />
                  <span>네이버 회원가입</span>
                </span>
                <img
                  src="https://thenaum.cdn-nhncommerce.com/data/img/allnew/layout/arrow_right_b.svg"
                  class="right_arrow"
                />
              </a>

              <a href="/join_agreement" id="btnJoin" class="login_box">
                <span class="left">
                  <img
                    src="https://thenaum.cdn-nhncommerce.com/data/img/allnew/layout/fd_gom.svg"
                    alt="쇼핑몰"
                  />
                  <span>쇼핑몰 회원가입</span>
                </span>
                <img
                  src="https://thenaum.cdn-nhncommerce.com/data/img/allnew/layout/arrow_right_b.svg"
                  class="right_arrow"
                />
              </a>
            </div>
          </div>
          <div class="member_guide_txt">
            <p>
              이미 쇼핑몰 회원이신가요?
              <a href="#" id="btnLoginMember" class="login_btn">로그인</a>
            </p>
          </div>
        </div>
        <div class="banner_wrap">
          <a href="/board/view.php?category=event&amp;bdId=event&amp;sno=175"
            ><img
              src="https://thenaum.cdn-nhncommerce.com/data/img/allnew/member/join_banner.jpg"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.location_wrap {
  position: relative;
  width: 100%;
}

.location_wrap .location_cont {
  width: 100%;
  margin: 0;
  text-align: right;
}

.location_cont em {
  display: inline-block;
  padding: 0.75rem 0 0.625rem 0;
  color: #777777;
  font-size: 0.7813rem;
}

.location_cont .local_home {
  color: #777777;
}

.location_wrap .location_cont:after {
  display: block;
  clear: both;
  content: "";
}
.main {
  width: 50%;
  min-width: 37.5rem;
  margin: 0 auto;
}
.container {
  margin-bottom: 3.125rem;
}
.content_wrap {
  width: 46.875rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.content_wrap .member_wrap {
  width: 25.6875rem;
  flex-shrink: 0;
  margin: 0;
}

.content_wrap .member_wrap .member_tit h2 {
  font-size: 1.625rem;
  line-height: 1.625rem;
  letter-spacing: -0.05em;
  font-weight: 500;
}

.content_wrap .member_wrap .join_tit {
  margin: 1.25rem 0 0 0;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  letter-spacing: -0.05em;
  color: #777;
}

.content_wrap .member_wrap .member_cont {
  padding: 1.875rem 0;
  border: none;
}

.content_wrap .member_wrap .member_cont .member_login_box {
  display: flex;
  flex-direction: column;
}

.content_wrap .member_wrap .member_cont .member_login_box a {
  flex-grow: 1;
  height: 4.0625rem;
  padding: 0 1.5625rem;
  border-radius: 0.75rem;
  border: 0.0625rem solid #e8e8e8;
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  letter-spacing: -0.05em;
  color: #555;
  justify-content: space-between;
}

.content_wrap .member_wrap .member_cont .member_login_box a .left {
  display: flex;
  align-items: center;
}

.content_wrap .member_wrap .member_cont .member_login_box a .left img {
  margin: 0 0.75rem 0 0;
  width: 2.1875rem;
}

.content_wrap .member_wrap .member_cont .member_login_box a {
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  letter-spacing: -0.05em;
  color: #555;
}

.content_wrap .member_wrap .member_cont .member_login_box a .right_arrow {
  width: 0.375rem;
  height: 0.6875rem;
  opacity: 0.2;
}

.content_wrap
  .member_wrap
  .member_cont
  .member_login_box
  > *:not(:first-child) {
  margin: 0.75rem 0 0 0;
}
</style>
