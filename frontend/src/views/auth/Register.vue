<template>
    <div class="grid xs:grid-cols-1 md:grid-cols-2">
        <div class="w-full h-screen bg-yellow-500 xs:hidden	md:flex"></div>
        <div class="w-full flex justify-center items-center">
            <div class="flex items-center p-8 flex-col">
                <h4 class="font-bold text-xl mb-3">Register</h4>
                <Form @submit="onSubmit">
                    <div class="flex flex-col my-3">
                        <Field v-model="name" type="text" name="name" id="name" placeholder="Name"
                            class="w-96 p-2 rounded border-yellow-500 border-2" :rules="validateName" />
                        <ErrorMessage name="name" class="mt-1 flex justify-center font-bold text-red-600 text-xs" />
                    </div>
                    <div class="flex flex-col my-3">
                        <Field v-model="email" type="email" name="email" id="email" placeholder="Email"
                            :rules="validateEmail" class="w-96 p-2 rounded border-yellow-500 border-2" />
                        <ErrorMessage name="email" class="mt-1 flex justify-center font-bold text-red-600 text-xs" />
                    </div>
                    <div class="flex flex-col my-3">
                        <Field v-model="password" type="password" name="password" id="password" placeholder="Password"
                            class="w-96 p-2 rounded border-yellow-500 border-2" :rules="validatePassword" />
                        <ErrorMessage name="password" class="mt-1 flex justify-center font-bold text-red-600 text-xs" />
                    </div>
                    <div class="flex flex-col my-3">
                        <Field v-model="confirmPassword" type="password" name="confirmPassword" id="confirmPassword"
                            placeholder="Confirm Password" class="w-96 p-2 rounded border-yellow-500 border-2"
                            :rules="validatePassword" />
                        <ErrorMessage name="confirmPassword"
                            class="mt-1 flex justify-center font-bold text-red-600 text-xs" />
                    </div>
                    <button type="submit" class="my-2 bg-yellow-500 w-96 p-2 rounded font-bold">
                        <router-link to="/home">Register</router-link>
                    </button>
                </form>
                <h4 class="text-sm mb-4">
                    Already have an account? <router-link to="/login">Login</router-link>
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        onSubmit(values) {
            if (values) {
                console.log(values);
                toast.success('Registration successful');
                this.$router.push('/home');
            }
        },
        validateName(value) {
            if (!value) {
                return 'Name is required';
            }
            if (value.length < 3) {
                return 'The name must be at least 3 characters long';
            }
            return true;
        },
        validateEmail(value) {
            if (!value) {
                return 'Email is required';
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This email must be a valid email';
            }
            return true;
        },
        validatePassword() {
            if (this.password.length < 6) {
                return 'Password must be at least 6 characters long';
            }
            if (this.password !== this.confirmPassword) {
                return 'Passwords do not match';
            }
            return true;
        },
    },
};
</script>