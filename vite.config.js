import path from 'path'
import Vue from '@vitejs/plugin-vue'
import {defineConfig} from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
const pathSrc=path.resolve(__dirname,'src');
export default defineConfig({
    //与根相关的目录，构键输岀将 放在其中.如果目录存在则在创建之前删除
    base: "./",
    outDir: 'dist',
    //反向代理
    proxy: {
        '/api': {
            target: '',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/,''),
        }
    },
    plugins: [
        Vue(),
        AutoImport({
            // Auto import functions from Vue, e.g. ref, reactive, toRef...
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue'],

            // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [
                ElementPlusResolver(),

                // Auto import icon components
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon',
                }),
            ],
        }),

        Components({
            resolvers: [
                // Auto register icon components
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
                // Auto register Element Plus components
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ],
        }),

        Icons({
            autoInstall: true,
        }),

        Inspect(),
    ],
    server: {
        host: '0.0.0.0'
    },
    resolve: {
        //构建别名
        alias: {
            "@": pathSrc, //必须在配置项目后面加逗号
        },
    },
    optimizeDeps: {
        include: ["axios"],
    },
    build: {
        target: "modules",
        outDir: "dist",
        assetsDir: "assets",
        minify: "terser", // 混淆器
    },
    css: {
        loaderOptions: {
            less: {
                additionalData: '@import "@/views/index.less'
            }
        }
    }
});
