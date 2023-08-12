<template>
    <div class="flex flex-col justify-center items-center h-screen">

        <img src="../../assets/vue.svg" alt="logo" class="w-16 h-16 mr-2 my-4">
        <button type="submit" @click="openTaskModal" class="my-2 bg-yellow-500 w-96 p-2 rounded font-bold">
            Add Task
        </button>

        <TaskModal v-if="showAddTaskModal">
            <div>
                <div>Add Task</div>
                <button @click="closeModal">Close</button>
                <button @click="handleAddTask">Save</button>
            </div>
        </TaskModal>

        <TaskModal v-if="showEditModal">
            <div>
                <div>Edit Task</div>
                <button @click="closeModal">Close</button>
                <button @click="handleEdit">Save</button>
            </div>
        </TaskModal>

        <TaskModal v-if="showDeleteModal">
            <div>
                <h1>
                    Are you sure you want to delete this task?
                </h1>
                <button @click="closeModal">Close</button>
                <button @click="handleRemove">Delete</button>
            </div>
        </TaskModal>

        <TaskItem title="Ride Bicycle" @complete="handleComplete" @edit="openEditModal" @remove="openDeleteModal" />

    </div>
</template>

<script>

// Components
import TaskItem from '../../common/components/TaskItem.vue';
import Modal from '../../common/components/Modal.vue';

export default {
    components: {
        TaskItem,
        Modal,
    },
    data() {
        return {
            showAddTaskModal: false,
            showEditModal: false,
            showDeleteModal: false,
        };
    },
    methods: {
        openTaskModal() {
            this.showAddTaskModal = true;
        },
        openEditModal() {
            this.showEditModal = true;
        },
        openDeleteModal() {
            this.showDeleteModal = true;
        },
        closeModal() {
            if (this.showAddTaskModal) {
                this.showAddTaskModal = false;
            }

            if (this.showEditModal) {
                this.showEditModal = false;
            }

            if (this.showDeleteModal) {
                this.showDeleteModal = false;
            }
        },
        handleAddTask() {
            console.log('Add Task');
        },
        handleComplete() {
            console.log('Completed');
        },
        handleEdit() {
            this.showEditModal = true;
            console.log('Edit');
        },
        handleRemove() {
            this.showDeleteModal = true;
            console.log('Delete');
        },
    },
};
</script>
