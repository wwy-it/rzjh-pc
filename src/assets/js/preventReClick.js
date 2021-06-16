import Vue from 'vue'

Vue.directive('preventReClick', {
    inserted: function (el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                el.style.cursor = "not-allowed"
                setTimeout(() => {
                    el.disabled = false
                    el.style.cursor = "pointer"
                }, binding.value || 3000)
            }
        })
    }
});
