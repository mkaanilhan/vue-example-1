<script>
export default {
    watch: {

        state(newValue, OldValue) {

            if (newValue) {

                const timeout = setTimeout(() => {

                    this.$emit('update:state', false)

                    clearTimeout(timeout)

                }, 3000)
            }

        }

    },
    emits: ['update:state'],
    props: {
        state: {

            type: Boolean,
            default: false
        },

        text: {

            type: String,
            default: 'Lorem ipsum..'

        }
    }

}
</script>

<template>
    <div class='w-64 bg-slate-100 border-black border-2 rounded-lg py-2 px-4 absolute top-4 right-4' v-if='state'>
        {{ text }}
    </div>
</template>