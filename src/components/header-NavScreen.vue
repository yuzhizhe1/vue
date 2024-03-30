<template>
  <div class="NavScreen">
    <div class="container">
      <nav class="NavScreenMenu menu">
        <Dropdown-Menu v-model="arr[0]">
          <div
            id="NavScreenGroup-文档"
            class="items"
          >
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >深度指南</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >互动教程</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >示例</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >快速上手</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >术语表</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >错误码参照表</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >Vue 2 文档
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  class="link-icon"
                >
                  <path
                    d="M0 0h24v24H0V0z"
                    fill="none"
                  >
                  </path>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                </svg>
              </router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >从 Vue 2 迁移
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  class="link-icon"
                >
                  <path
                    d="M0 0h24v24H0V0z"
                    fill="none"
                  >
                  </path>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </Dropdown-Menu>

        <router-link
          to="#"
          class="link NavScreenMenuLink"
        >API</router-link>
        <router-link
          to="#"
          class="link NavScreenMenuLink"
        >演练场
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            class="link-icon"
          >
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            >
            </path>
            <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
          </svg>
        </router-link>
        <Dropdown-Menu v-model="arr[1]">
          <button
            type="button"
            class="button"
          >
            <span class="button-text">生态系统</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              class="button-icon"
            >
              <path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
            </svg>
          </button>
          <div
            id="NavScreenGroup-生态系统"
            class="items"
          >
            <div class="group">
              <div class="NavScreenMenuGroupSection">
                <p class="title">资源</p>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >合作伙伴</router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >主题</router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >UI 组件<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >证书
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    >
                    </path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >找工作
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >T-Shirt 商店
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    >
                    </path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
              </div>
            </div>
            <div class="group">
              <div class="NavScreenMenuGroupSection">
                <p class="title">官方库</p>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >Vue Router
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >Pinia
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >工具链指南</router-link>
              </div>
            </div>
            <div class="group">
              <div class="NavScreenMenuGroupSection">
                <p class="title">视频课程</p>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >Vue Mastery<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >Vue School<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
              </div>
            </div>
            <div class="group">
              <div class="NavScreenMenuGroupSection">
                <p class="title">帮助</p>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >Discord 聊天室<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >GitHub 论坛<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >DEV Community<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
              </div>
            </div>
            <div class="group">
              <div class="NavScreenMenuGroupSection">
                <p class="title">动态</p>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >博客<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >Twitter<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >活动<svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    class="link-icon"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    ></path>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                  </svg>
                </router-link>
                <router-link
                  to="#"
                  class="link NavScreenMenuGroupLink"
                >新闻简报</router-link>
              </div>
            </div>
          </div>
        </Dropdown-Menu>
        <Dropdown-Menu v-model="arr[2]">
          <button
            type="button"
            class="button"
            aria-controls="NavScreenGroup-关于"
          >
            <span class="button-text">关于</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              class="button-icon"
            >
              <path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
            </svg>
          </button>
          <div
            id="NavScreenGroup-关于"
            class="items"
          >
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >常见问题</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >团队</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >版本发布</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >社区指南</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >行为规范</router-link>
            </div>
            <div class="item">
              <router-link
                to="#"
                class="link NavScreenMenuGroupLink"
              >纪录片<svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  class="link-icon"
                >
                  <path
                    d="M0 0h24v24H0V0z"
                    fill="none"
                  ></path>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </Dropdown-Menu>
        <router-link
          to="#"
          class="link NavScreenMenuLink"
        >赞助</router-link>
        <router-link
          to="#"
          class="link NavScreenMenuLink"
        >合作伙伴</router-link>
      </nav>

      <div
        class="NavScreenAppearance"
        @click="toggleTheme"
      >
        <p class="text">外观</p>
        <button
          :class="['switch','switch-appearance',theme]"
          class="switch switch-appearance"
          type="button"
          role="switch"
          aria-label="切换深色模式"
          aria-checked="false"
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
      <div class="social-links NavScreenSocialLinks social-links">
        <router-link
          to="#"
          class="social-link is-medium"
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
          class="social-link is-medium"
          title="twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            class="social-link-icon"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          <span class="visually-hidden">twitter</span>
        </router-link>
        <router-link
          to="#"
          class="social-link is-medium"
          title="discord"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            class="social-link-icon"
          >
            <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
          </svg>
          <span class="visually-hidden">discord</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.NavScreen {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 32px;
  width: 100%;
  background-color: var(--bg);
  transition: background-color 0.5s;
  overflow-y: auto;

  .container {
    margin: 0 auto;
    padding: 24px 0 96px;
    max-width: 288px;
    nav.NavScreenMenu {
      .NavScreenMenuGroup {
        border-bottom: 1px solid var(--divider-light);
        height: 48px;
        overflow: hidden;
        transition: border-color 0.5s;

        button.button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 4px 11px 0;
          width: 100%;
          line-height: 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text1);
          transition: color 0.25s;

          svg.button-icon {
            width: 14px;
            height: 14px;
            fill: var(--text2);
            transition: fill 0.5s, transform 0.25s;
          }
        }

        div.items {
          //   visibility: hidden;

          a.NavScreenMenuGroupLink {
            display: block;
            line-height: 32px;
            font-size: 13px;
            font-weight: 400;
            color: var(--text1);
            transition: color 0.25s;
            margin-left: 0.6em;
          }
          .link-icon {
            display: inline-block;
            margin-top: -2px;
            margin-left: 4px;
            width: 11px;
            height: 11px;
            fill: var(--text3);
            transition: fill 0.25s;
          }
        }

        .NavScreenMenuLink {
          display: block;
          border-bottom: 1px solid var(--divider-light);
          padding: 12px 0 11px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text1);
          transition: border-color 0.5s, color 0.25s;
        }
      }
      .NavScreenMenuGroup.block {
        padding-bottom: 10px;
        height: auto;
        .items {
          visibility: visible;
        }
      }
      .NavScreenMenuLink {
        display: block;
        border-bottom: 1px solid var(--divider-light);
        padding: 12px 0 11px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--text1);
        transition: border-color 0.5s, color 0.25s;
        .link-icon {
          display: inline-block;
          margin-top: -2px;
          margin-left: 4px;
          width: 11px;
          height: 11px;
          fill: var(--text3);
          transition: fill 0.25s;
        }
      }
    }
    .NavScreenAppearance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      padding: 12px 14px 12px 16px;
      background-color: var(--vt-c-bg-soft);
      transition: background-color 0.5s;
      .text {
        line-height: 24px;
        font-size: 12px;
        font-weight: 500;
        color: var(--text2);
        transition: color 0.5s;
      }
      .switch {
        position: relative;
        border-radius: 11px;
        display: block;
        width: 40px;
        height: 22px;
        flex-shrink: 0;
        border: 1px solid var(--divider);
        background-color: var(--bg-mute);
        transition: border-color 0.25s, background-color 0.25s;
        .switch-check {
          position: absolute;
          top: 1px;
          left: 1px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: var(--white);
          box-shadow: var(--shadow1);
          transition: background-color 0.25s, transform 0.25s;
          .switch-icon {
            position: relative;
            display: block;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            overflow: hidden;
            svg {
              position: absolute;
              top: 3px;
              left: 3px;
              width: 12px;
              height: 12px;
              fill: var(--text2);
            }
          }
        }
      }
      button.light span.switch-check {
        transform: translateX(0%);

        svg.switch-appearance-sun {
          opacity: 1;
          display: block;
        }

        svg.switch-appearance-moon {
          opacity: 0;
          display: none;
        }
      }

      button.dark span.switch-check {
        transform: translateX(100%);
        position: absolute;
        top: 1px;
        left: 1px;

        svg.switch-appearance-sun {
          opacity: 0;
          display: none;
        }

        svg.switch-appearance-moon {
          opacity: 1;
          display: block;
        }
      }
    }
    .social-links {
      margin-top: 12px;
    }
    .social-links {
      display: flex;
      justify-content: center;
      .social-link.is-medium {
        width: 48px;
        height: 48px;
      }
      .social-link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text2);
        transition: color 0.5s;
        .social-link-icon {
          width: 24px;
          height: 24px;
        }
        .social-link-icon {
          fill: currentColor;
        }
        .visually-hidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      }
    }
  }
}
</style>
<script setup>
import { useTheme } from "@/utils/useTheme.js";
const { theme, toggleTheme } = useTheme();
const arr = ["文档", "生态系统", "关于"];
</script>
