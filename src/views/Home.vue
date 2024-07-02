<script>
import Header from '../components/Header.vue'
import Add from '../components/Add.vue'
import Snackbar from '../components/Snackbar.vue'
import List from '../components/List.vue'

export default {

    beforeRouteEnter(to, from) {


        /**
         * 
         *   console.log(to)
        console.log(from)
        console.log('from page')
         * 
         */



    },

    data() {
        return {

            header: 'To Do App',
            list: !!JSON.parse(localStorage.getItem('list'))?.length ? JSON.parse(localStorage.getItem('list')) : [],
            inputText: null,
            snackbar: {
                state: false,
                text: null
            }
        }
    },
    components: {
        Header,
        Add,
        Snackbar,
        List
    },
    methods: {

        addNewItem(inputText) {

            if (!!inputText.trim().length) {
                this.list.push({ completed: false, text: inputText })
                localStorage.setItem('list', JSON.stringify(this.list))

                this.snackbar.state = true
                this.snackbar.text = 'Item is added'

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


    beforeCreate() {


        //  this.header = 'To do app'
        console.log('PARENT BEFORE CREATE')
    },
    created() {



        //  console.log('PARENT CREATED')
    },
    beforeMount() { console.log('PARENT BEFORE MOUNTED') },
    mounted() {

        //  this.header = 'To do app from created'


        console.log('PARENT MOUNTED')
    },
    beforeUpdate() { console.log('PARENT BEFORE UPDATE') },
    updated() { console.log('PARENT UPDATED') },
    beforeUnmount() { console.log('PARENT BEFORE UNMOUNT') },
    unmounted() { console.log('PARENT UNMOUNT') }

}
</script>

<template>
    <div class='container mx-auto w-640 bg-slate-100 my-4 p-2 rounded-lg'>

        <Snackbar v-model:state='snackbar.state' :text='snackbar.text' />
        <Header :header='header' :numberOfItem='numberOfItem'>

            <template #header='props'>

                <div>
                    {{ props.id }}
                </div>

                <ul>

                    <li>1</li>
                    <li>2</li>
                    <li>3</li>

                </ul>
            </template>

            <template #header2>

                <ul>

                    <li>12</li>
                    <li>22</li>
                    <li>32</li>

                </ul>
            </template>


        </Header>

        <Header :header='header' :numberOfItem='numberOfItem'>
            <template #header2>

                some text
            </template>

        </Header>



        <Add @addNewItemFromChild='addNewItem' />

        <List :list='list' @markAsReadFromChild='markAsRead' @deleteItemFromChild='deleteItem' />

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