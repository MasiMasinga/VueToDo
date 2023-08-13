<template>
    <div class="flex flex-col rounded border-black border-2 my-2 xs:p-5 md:p-0">
        <h1 class="flex justify-center" :class="{ 'line-through text-black-500': task.completed }">
            {{ task.title }}
        </h1>
        <div class="flex xs:flex-col sm:flex-row xs:w-96 sm:w-fit xs:items-center">
            <button type="submit" @click="complete" class="m-2 bg-green-500 xs:w-full sm:w-44 p-2 rounded">
                Complete
            </button>
            <button type="submit" @click="edit" class="m-2 bg-blue-500 xs:w-full sm:w-44 p-2 rounded">
                Edit
            </button>
            <button type="submit" @click="remove" class="m-2 bg-red-500 xs:w-full sm:w-44 p-2 rounded">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: Object,
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