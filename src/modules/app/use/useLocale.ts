
import { computed } from 'vue'
import { useI18n } from "vue-i18n";


export function useLocale() {
    const { t, locale } = useI18n();

    const setLocale = (language: string) => (locale.value = language);
    const currentLocale = computed(() => locale.value);

    return {
        t,
        locale,
        setLocale,
        currentLocale,
    }
}
