<script>
export default {

    methods: {
        markAsRead(index) {

            this.$emit('markAsReadFromChild', index)

            localStorage.setItem('list', JSON.stringify(this.list))

        },

        deleteItem(index) {

            this.$emit('deleteItemFromChild', index)

            localStorage.setItem('list', JSON.stringify(this.list))

        }

    },

    emits: ['markAsReadFromChild', 'deleteItemFromChild'],

    props: {

        list: {
            type: Array,
            default: []

        }

    }

}
</script>

<template>
    <div v-for='(item, index) in list' class='mx-4 flex justify-between py-2'>

        <div class='flex gap-2 items-center hover:cursor-pointer' @click='markAsRead(index)'>

            <i class="pi pi-check-circle text-xl" v-if='item.completed'></i>
            <i class="pi pi-circle text-xl" v-else></i>

            <div :class='`${item.completed ? "line-through" : ""}`'>{{ item.text }}</div>

        </div>

        <div class='hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2' @click='deleteItem(index)'>

            <i class="pi pi-times"></i>
        </div>

    </div>
</template>