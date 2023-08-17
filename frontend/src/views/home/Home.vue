<template>
    <div class="flex flex-col justify-center items-center h-screen">

        <img src="../../assets/vue.svg" alt="logo" class="w-16 h-16 mr-2 my-4">
        <button type="submit" @click="openTaskModal" class="my-2 bg-yellow-500 w-96 p-2 rounded font-bold">
            Add Task
        </button>

        <TaskModal v-if="showAddTaskModal">
            <div class="fixed w-full h-screen flex items-center justify-center bg-slate-300 opacity-95 inset-0 z-0">
                <div class="flex flex-col justify-center w-full max-w-2xl h-96 bg-white shadow-lg rounded-lg p-8">
                    <div class="flex justify-center font-bold text-3xl">Add Task</div>
                    <input type="email" name="email" id="email" placeholder="Add Task..." v-model="newTask"
                        class="w-full p-2 rounded border-black border-2 my-4" />
                    <div class="flex items-center justify-evenly">
                        <button @click="closeModal" class="bg-red-600 rounded w-96 mr-1 p-2 font-bold">
                            Close
                        </button>
                        <button @click="handleAddTask" class="bg-green-600 rounded w-96 ml-1 p-2 font-bold">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </TaskModal>

        <TaskModal v-if="showEditModal">
            <div class="fixed w-full h-screen flex items-center justify-center bg-slate-300 opacity-95 inset-0 z-0">
                <div class="flex flex-col justify-center  w-full max-w-2xl h-96 bg-white shadow-lg rounded-lg p-8">
                    <div class="flex justify-center font-bold text-3xl">Edit Task</div>
                    <input type="text" v-model="editedTask" placeholder="Edit Task..."
                        class="w-full p-2 rounded border-black border-2 my-4" />
                    <div class="flex items-center justify-evenly">
                        <button @click="closeModal" class="bg-red-600 rounded w-96 mr-1 p-2 font-bold">
                            Close
                        </button>
                        <button @click="handleEdit" class="bg-green-600 rounded w-96 ml-1 p-2 font-bold">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </TaskModal>

        <TaskModal v-if="showDeleteModal">
            <div class="fixed w-full h-screen flex items-center justify-center bg-slate-300 opacity-95 inset-0 z-0">
                <div class="flex flex-col justify-center w-full max-w-2xl h-96 bg-white shadow-lg rounded-lg p-8">
                    <div class="flex justify-center font-bold text-2xl">
                        Are you sure you want to delete this task?
                    </div>
                    <div class="flex items-center justify-evenly my-6">
                        <button @click="closeModal" class="bg-red-600 rounded w-96 mr-1 p-2 font-bold">
                            Close
                        </button>
                        <button @click="handleRemove(index)" class="bg-blue-600 rounded w-96 ml-1 p-2 font-bold">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </TaskModal>

        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @complete="handleComplete(index)"
            @edit="openEditModal(index)" @remove="openDeleteModal(index)" />

    </div>
</template>

<script>

// Vue Toastify
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Components
import TaskItem from '../../components/TaskItem.vue';
import TaskModal from '../../components/TaskModal.vue';

export default {
    components: {
        TaskItem,
        TaskModal,
    },
    data() {
        return {
            showAddTaskModal: false,
            showEditModal: false,
            showDeleteModal: false,
            tasks: [],
            newTask: '',
            editedTaskIndex: null,
        };
    },
    methods: {
        openTaskModal() {
            this.showAddTaskModal = true;
        },
        openEditModal(index) {
            this.editedTaskIndex = index; 
            this.editedTask = this.tasks[index].title;
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
            this.tasks.push({ title: this.newTask, completed: false });
            this.newTask = '';
            this.showAddTaskModal = false;
            toast.success('Task added');
        },
        handleComplete(index) {
            this.tasks[index].completed = true;
            toast.success('Task completed');
        },
        handleEdit() {
            this.tasks[this.editedTaskIndex].title = this.editedTask;
            this.showEditModal = false;
            toast.success('Task updated');
        },
        handleRemove(index) {
            this.tasks.splice(index, 1);
            toast.success('Task deleted');
            this.showDeleteModal = false;
        },
    },
};
</script>
