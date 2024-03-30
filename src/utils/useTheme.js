import {ref} from "vue"
const key='__theme__'
const theme=ref(localStorage.getItem(key)||'light');
watchEffect(() => {
    document.documentElement.dataset.theme=theme.value;
    localStorage.setItem(key,theme.value);
});
export function useTheme() {
    return {
        theme,toggleTheme() {
            theme.value=theme.value==='light'? 'dark':'light';
            console.log(localStorage.getItem(key));
        }
    }
}