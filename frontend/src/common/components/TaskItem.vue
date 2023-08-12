<template>
    <div class="flex flex-col rounded border-black border-2 my-2">
        <h1 class="flex justify-center">{{ title }}</h1>
        <div class="flex xs:flex-col sm:flex-row xs:w-96 sm:w-fit xs:items-center">
            <button type="submit" @click="complete" class="m-2 bg-green-500 w-44 p-2 rounded">
                Complete
            </button>
            <button type="submit" @click="edit" class="m-2 bg-blue-500 w-44 p-2 rounded">
                Edit
            </button>
            <button type="submit" @click="remove" class="m-2 bg-red-500  w-44 p-2 rounded">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
    methods: {
        complete() {
            this.$emit('complete');
        },
        edit() {
            this.$emit('edit');
        },
        remove() {
            this.$emit('remove');
        },
    },
};
</script>