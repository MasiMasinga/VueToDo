<template>
    <div class="grid xs:grid-cols-1 md:grid-cols-2">
        <div class="w-full h-screen bg-yellow-500 xs:hidden	md:flex"></div>
        <div class="w-full flex justify-center items-center">
            <div class="flex items-center p-8 flex-col">
                <h4 class="font-bold text-xl mb-3">Login</h4>
                <Form @submit="onSubmit">
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
                    <button type="submit" class="my-2 bg-yellow-500 w-96 p-2 rounded font-bold">
                        <router-link to="/home">Login</router-link>
                    </button>
                </Form>
                <h4 class="text-sm mb-4">
                    Don't have an account? <router-link to="/">Register</router-link>
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
            email: '',
            password: '',
        };
    },
    methods: {
        onSubmit(values) {
            console.log(values);
            toast.success('Login successful');
            this.$router.push('/home');
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
            return true;
        },
    },
};
</script>
