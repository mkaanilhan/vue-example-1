<script>
export default {
    data() {
        return {
            header: 'To Do App',
            list: [],
            inputText: null
        }
    },
    methods: {

        addNewItem() {

            if (!!this.inputText.trim().length) {
                this.list.push(this.listItem)

                this.inputText = null
            } else {
                alert('Please write something')
            }

        },

        deleteItem(index) {

            this.list.splice(index, 1)

        },

        markAsRead(index) {

            this.list[index].completed = !this.list[index].completed

        }

    },
    computed: {

        listItem() {

            return { completed: false, text: this.inputText }
        },

        numberOfItem() {

            const lengthOfItems = this.list.filter(item => item.completed).length

            switch (lengthOfItems) {
                case 0:

                    return 'No item completed'

                case 1:

                    return `${lengthOfItems} item completed`

                default:
                    return `${lengthOfItems} items completed`
            }

        }

    },

    async created() {

    },
    async mounted() {

    }

}
</script>

<template>
    <div class='container mx-auto w-640 bg-slate-100 my-4 p-2 rounded-lg'>

        <div class='p-4 flex justify-between'>
            <div class=' text-3xl'>
                {{ header }}
            </div>

            <div class='text-xl underline'>
                {{ numberOfItem }}
            </div>
        </div>

        <div class='flex p-4'>

            <input class='w-4/5 p-2 rounded-l-lg' v-model='inputText' placeholder='Enter your item..'>


            <button class='w-1/5 bg-orange-400 rounded-r-lg' @click='addNewItem'>Add</button>

        </div>

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

        <!--

        <div v-if='inputText === "Kaan"'>

            Your name is kaan

        </div>

        <div v-else-if='inputText === "Sercan"'>

            Your name is Sercan

        </div>

        <div v-else>

            I dont your name

        </div>

        -->

    </div>
</template>

<style></style>