<template>
  <header>
    <div class="NavBar">
      <div class="container">
        <router-link
          to="#"
          class="navBarTitle"
        >
          <svg
            class="logo"
            viewBox="0 0 128 128"
            width="24"
            height="24"
          >
            <path
              fill="#42b883"
              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
              data-v-e9cb7cd5=""
            ></path>
            <path
              fill="#35495e"
              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
              data-v-e9cb7cd5=""
            ></path>
          </svg>
          <span>Vue.js</span>
        </router-link>
        <div class="content">
          <div class="NavBarSearch">
            <button
              type="button"
              class="DocSearch-button"
            >
              <span class="DocSearch-Container">
                <svg
                  width="20"
                  height="20"
                  class="DocSearch-Icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="router"
                    stroke-linejoin="router"
                  ></path>
                </svg>
                <span class="DocSearch-Placeholder">搜索</span>
              </span>
              <span class="DocSearch-keys">
                <kdb>Ctrl</kdb>
                <kdb>K</kdb>
              </span>
            </button>
          </div><!-- 搜索区 -->
          <nav class="NavBarMenu">
            <div class="flyout">
              <button
                type="button"
                class="flyout-button"
              >
                <span>文档
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    class="flyout-button-text-icon"
                  >
                    <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                  </svg>
                </span>
              </button>
              <div class="flyout-menu">
                <div class="menu">
                  <div class="menu-items">
                    <router-link
                      class="menu-link"
                      to="#"
                    >深度指南</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >互动教程</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >示例</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >快速上手</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >术语表</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >错误码参照表</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >Vue 2 文档</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >从 Vue 2 迁移</router-link>
                  </div>
                </div>
              </div>
            </div>
            <router-link
              to="#"
              class="flyoutMenu-link"
            >API</router-link>
            <router-link
              to="#"
              class="flyoutMenu-link"
            >演练场</router-link>
            <div class="flyout">
              <button
                type="button"
                class="flyout-button"
              >
                <span>生态系统<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    class="flyout-button-text-icon"
                  >
                    <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                  </svg></span>
              </button>
              <div class="flyout-menu">
                <div class="menu">
                  <div class="menu-items">
                    <div class="menu-group">
                      <p class="menu-group-title">资源</p>
                      <router-link
                        class="menu-link"
                        to="#"
                      >合作伙伴</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >主题</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >UI 组件</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >证书</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >找工作</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >T-Shirt 商店 </router-link>

                    </div>
                    <div class="menu-group">
                      <p class="menu-group-title">官方库</p>
                      <router-link
                        class="menu-link"
                        to="#"
                      >Vue Router</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >Pinia</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >工具链指南</router-link>
                    </div>
                    <div class="menu-group">
                      <p class="menu-group-title">视频课程</p>
                      <router-link
                        class="menu-link"
                        to="#"
                      >Vue Mastery</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >Vue School</router-link>
                    </div>
                    <div class="menu-group">
                      <p class="menu-group-title">帮助</p>
                      <router-link
                        class="menu-link"
                        to="#"
                      >Discord 聊天室</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >GitHub 论坛</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >DEV Community</router-link>
                    </div>
                    <div class="menu-group">
                      <p class="menu-group-title">动态</p>
                      <router-link
                        class="menu-link"
                        to="#"
                      >博客</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >Twitter</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >活动</router-link>
                      <router-link
                        class="menu-link"
                        to="#"
                      >新闻简报</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flyout">
              <button
                type="button"
                class="flyout-button"
              >
                <span>关于<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    class="flyout-button-text-icon"
                  >
                    <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                  </svg></span></button>
              <div class="flyout-menu">
                <div class="menu">
                  <div class="menu-items">
                    <router-link
                      class="menu-link"
                      to="#"
                    >常见问题</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >团队</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >版本发布</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >社区指南</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >行为规范</router-link>
                    <router-link
                      class="menu-link"
                      to="#"
                    >纪录片</router-link>
                  </div>
                </div>
              </div>
            </div>
            <router-link
              to="#"
              class="flyoutMenu-link"
            >赞助</router-link>
            <router-link
              to="#"
              class="flyoutMenu-link"
            >合作伙伴</router-link>
            <div class="flyout">
              <button
                type="button"
                class="flyout-button"
              >
                <div class="locales-btn-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    class="locales-btn-icon"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                    ></path>
                    <path
                      d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                      class="css-c4d79v"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </nav>
          <div
            class="NavBarAppearance"
            @click="toggleTheme"
          ><!-- 切换深色模式 -->
            <button
              :class="['switch',theme]"
              type="button"
              aria-label="切换深色模式"
            >
              <span class="switch-check">
                <span class="switch-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    class="switch-appearance-sun"
                  >
                    <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path>
                    <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
                    <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
                    <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path>
                    <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path>
                    <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                    <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                    <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path>
                    <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    class="switch-appearance-moon"
                  >
                    <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
          <div class="socialLinks"><!-- 社交 -->
            <router-link
              to="#"
              class="social-link"
              title="github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                class="social-link-icon"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              <span class="visually-hidden">github</span>
            </router-link>
            <router-link
              to="#"
              class="social-link"
              title="twitter"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                class="social-link-icon"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg><span class="visually-hidden">twitter</span></router-link>
            <router-link
              to="#"
              class="social-link"
              title="discord"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                class="social-link-icon"
              >
                <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
              </svg><span class="visually-hidden">discord</span></router-link>
          </div>
          <div class="flyout NavBarExtra">
            <button
              type="button"
              class="flyout-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                class="flyout-button-icon"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                ></circle>
                <circle
                  cx="19"
                  cy="12"
                  r="2"
                ></circle>
                <circle
                  cx="5"
                  cy="12"
                  r="2"
                ></circle>
              </svg><!--]--></button>
            <div class="flyout-menu">
              <div class="menu"><!--[--><!--[-->
                <div
                  class="menu-group"
                  data-v-d817d99a=""
                >
                  <div class="menu-item item">
                    <p class="menu-label">外观</p>
                    <div
                      class="menu-action action"
                      @click="toggleTheme"
                    >
                      <div id="docsearch">
                        <button
                          :class="['switch','switch-appearance',theme]"
                          type="button"
                          role="switch"
                          aria-label="切换深色模式"
                        >
                          <span class="switch-check">
                            <span class="switch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="switch-appearance-sun"
                              >
                                <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path>
                                <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
                                <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
                                <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path>
                                <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path>
                                <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                                <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                                <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path>
                                <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="switch-appearance-moon"
                              >
                                <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="menu-group"
                  data-v-d817d99a=""
                >
                  <div
                    class="menu-item item"
                    data-v-d817d99a=""
                  >
                    <div
                      class="social-links social-links"
                      data-v-d817d99a=""
                    ><!--[--><router-link
                        to="#"
                        class="social-link is-small"
                        title="github"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          class="social-link-icon"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg><span class="visually-hidden">github</span></router-link>
                      <router-link
                        to="#"
                        class="social-link is-small"
                        title="twitter"
                        target="_blank"
                      ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          class="social-link-icon"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg><span class="visually-hidden">twitter</span></router-link>
                      <router-link
                        to="#"
                        class="social-link is-small"
                        title="discord"
                        target="_blank"
                      ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          class="social-link-icon"
                        >
                          <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
                        </svg>
                        <span class="visually-hidden">discord</span></router-link><!--]-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="hamburger NavBarHamburger"
          aria-label="移动版导航" @click="NavScreenEvent"
        >
          <span class="hamburger-container">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </span>
        </button>
      </div>
    </div>
    <header-NavScreen v-if="dispalay" />
  </header>
</template>
<script setup>
import "./home.less";
import { useTheme } from "@/utils/useTheme.js";
import headerNavScreen from "@/components/header-NavScreen.vue";
const { theme, toggleTheme } = useTheme();

let dispalay = ref(false)
const NavScreenEvent= () => {
    dispalay.value=!dispalay.value
    
}
</script>
